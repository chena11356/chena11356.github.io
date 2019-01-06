var givenName;
var familyName;
var email;
var status;
var userIndex;
var appIndex;

var serviceCredits;
var projectCredits;
var tutoringCredits;
var probations;
var serviceActivities; //2d array of service activities AND the number of credits received for each activity
var projectActivities;

function initializeGlobal2(){
  givenName = "givenName";
  familyName = "familyName";
  email = "email";
  status = "status";
  userIndex = -1;
  appIndex = -1;
  serviceCredits = 0;
  projectCredits = 0;
  tutoringCredits = 0;
  probations = 0;
  serviceActivities = [];
  projectActivities = [];
}

function convertToZeroIfEmpty(input){
  if ((input+"").length==0){
    input = 0;
  }
  return input;
}

function initializeTracker(callback){
  //make sure user is signed in
  if (gapi.auth2.getAuthInstance().isSignedIn.get()){
    //show loading stuff
    document.getElementById("loadingText").style.display = "block";
    document.getElementById("loadingImg").style.display = "block";
    document.getElementById("appButton").style.display = "none";
    console.log("Showing loading stuff");
    //get information
    var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    givenName = profile.getGivenName();
    familyName = profile.getFamilyName();
    email = profile.getEmail();
    console.log("Given name is "+givenName);
    console.log("Family name is "+familyName);
    console.log("Email is "+email);
    //appendPre("User email: "+email);
    //look for user in main spreadsheet and get status:
    //freshman, sophomore, juniorProspective, seniorProspective, juniorCurrent, or seniorCurrent
    gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: CryptoJS.AES.decrypt("U2FsdGVkX18kEuc0waEbwGgL1/rvnxgbHleT2o9MxdM13zbc6F3A2g/lUY/bSNZyxklDxPYUSG//Vxr7rf3GBw==", "nhs").toString(CryptoJS.enc.Utf8),
    range: 'Sheet1!A:D',
    }).then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        for (var i = 0; i < range.values.length; i++) {
          var row = range.values[i];
          console.log(row[2]); //should log the emails
          //row is array of arrays of last name, first name, email address, and status
          if ((row[2]+"").indexOf(email)>=0){
            status = row[3]+"";
            userIndex = i;
            console.log("Found user at userIndex "+userIndex+" and status is "+status);
            callback(initializeTracker2);
            break;
          }
        }
      }
    });
  }
  else{
    alert("To use this service, please sign in using your bxscience.edu email.")
  }
}

function initializeTracker1(callback){
  document.getElementById("loadingText").style.display = "none";
  document.getElementById("loadingImg").style.display = "none";
  document.getElementById("tracker").style.display = "block";
  console.log("Showing application");
  if (!(status.indexOf("seniorCurrent")>=0||status.indexOf("juniorCurrent")>=0)){
    alert("It seems that you are not a current NHS member. If this is incorrect, please contact chena@bxscience.edu.");
    document.getElementById("tracker").style.display = "none";
    return;
  }
  else {
    var creditSheetID;
    if (status.indexOf("seniorCurrent")>=0){
      //retrieve information from senior spreadsheet
      creditSheetID = "1yQkpeLWwiS8R4ngrkCvbF_tdFgK_PkgzbQPG3y_RbwA";
    }
    else{
      //retrieve information from junior spreadsheet
      creditSheetID = "1kgcIOqlAVqofPiqqIkWTXGeQ5YWcTMW1Jk-gWjkVE1s";
    }
    //then connect to the spreadsheet and get all the information needed
    gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: creditSheetID,
    range: 'Credits',
    }).then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        //first get necessary indices
        var TOTALTUTORINGINDEX = -1;
        var TOTALPROJECTSINDEX = -1;
        var TOTALSERVICEINDEX = -1;
        var temp = "";
        for (var i = 0; i < range.values[0].length; i++){
          temp = range.values[0][i];
          if (temp.indexOf("TOTAL TUTORING")>=0){
            TOTALTUTORINGINDEX = i;
          }
          else if (temp.indexOf("TOTAL PROJECTS")>=0){
            TOTALPROJECTSINDEX = i;
          }
          else if (temp.indexOf("TOTAL SERVICE")>=0){
            TOTALSERVICEINDEX = i;
          }
        }
        if (TOTALTUTORINGINDEX==-1){
          console.log("Error: cannot find total tutoring index");
        }
        if (TOTALPROJECTSINDEX==-1){
          console.log("Error: cannot find total projects index");
        }
        if (TOTALSERVICEINDEX==-1){
          console.log("Error: cannot find total service index");
        }
        for (var i = 0; i < range.values.length; i++) {
          var row = range.values[i];
          //row is array of arrays of application info
          if ((row[2]+"").indexOf(email)>=0){ //when applicant is found by email
            appIndex = i;
            probations = convertToZeroIfEmpty(row[3]);
            for (var j = 4; j < TOTALTUTORINGINDEX; j++){
              if (row[j].indexOf("service")>=0){ //if cell in range has the word "service", add the service activity and number of credits into the array
                serviceActivities.push(row[j],[range.values[0][j]]); //e.g. ["2 service", "Winter Wonderland"]
              }
              else if (row[j].indexOf("project")>=0){
                projectActivities.push(row[j],[range.values[0][j]]);
              }
            }
            serviceCredits = row[TOTALSERVICEINDEX];
            projectCredits = row[TOTALPROJECTSINDEX];
            tutoringCredits = row[TOTALTUTORINGINDEX];
            callback();
            break;
          }
        }
      }
    });
  }
}

function initializeTracker2(){
  document.getElementById("numberServiceCredits").innerHTML = serviceCredits;
  document.getElementById("numberProjectCredits").innerHTML = projectCredits;
  document.getElementById("numberTutoringCredits").innerHTML = tutoringCredits;
  document.getElementById("numberProbations").innerHTML = probations;
  document.getElementById("numberServiceCreditsOverview").innerHTML = serviceCredits;
  document.getElementById("numberProjectCreditsOverview").innerHTML = projectCredits;
  document.getElementById("numberTutoringCreditsOverview").innerHTML = tutoringCredits;
  document.getElementById("numberProbationsOverview").innerHTML = probations;
  var temp = "";
  for (var i = 0; i < serviceActivities.length;i++){
    temp+="<li>"+serviceActivities[i][0]+" from "+serviceActivities[i][1]+"</li>";
  }
  document.getElementById("serviceActivitiesUL").innerHTML = temp;
  temp = "";
  for (var i = 0; i < projectActivities.length;i++){
    temp+="<li>"+projectActivities[i][0]+" from "+projectActivities[i][1]+"</li>";
  }
  document.getElementById("projectActivitiesUL").innerHTML = temp;
}

function calculateOfficeHoursWeeksLeft(){
  var curDate = new Date().toLocaleDateString();
  var curMonth = parseInt(curDate.split("/")[0],10);
  var curDay = parseInt(curDate.split("/")[1],10);
  var curYear = parseInt(curDate.split("/")[2],10);
  var weeksLeft;
  if (curYear!=2019){
    alert("It appears the year is no longer 2019. Please update the function calculateOfficeHoursWeeksLeft().");
    return 0;
  }
  else{
    if (curMonth==1){
      if (curDay>=1&&curDay<=5){
        return 21;
      }
      else if (curDay<=12){
        return 20;
      }
      else if (curDay<=19){
        return 19;
      }
      else {
        return 18;
      }
    }
    else if (curMonth==2){
      if (curDay==1||curDay==2){
        return 18;
      }
      else if (curDay<=9){
        return 17;
      }
      else if (curDay<=16){
        return 16;
      }
      else {
        return 15;
      }
    }
    else if (curMonth==3){
      if (curDay==1||curDay==2){
        return 15;
      }
      else if (curDay<=9){
        return 14;
      }
      else if (curDay<=16){
        return 13;
      }
      else if (curDay<=23){
        return 12;
      }
      else if (curDay<=30){
        return 11;
      }
      else {
        return 10;
      }
    }
    else if (curMonth==4){
      if (curDay>=1&&curDay<=6){
        return 10;
      }
      else if (curDay<=13){
        return 9;
      }
      else if (curDay<=20){
        return 8;
      }
      else {
        return 7;
      }
    }
    else if (curMonth==5){
      if (curDay>=1&&curDay<=4){
        return 7;
      }
      else if (curDay<=11){
        return 6;
      }
      else if (curDay<=18){
        return 5;
      }
      else if (curDay<=25){
        return 4;
      }
      else {
        return 3;
      }
    }
    else if (curMonth==6){
      if (curDay==1){
        return 3;
      }
      else if (curDay<=8){
        return 2;
      }
      else if (curDay<=15){
        return 1;
      }
      else{
        return 0;
      }
    }
    else{
      return 0;
    }
  }
}

function setOfficeHoursText(){
  var weeksLeft = calculateOfficeHoursWeeksLeft();
  var text = "There are "+weeksLeft+" weeks remaining in this semester for office hours.";
  if (weeksLeft==0){
    text += "";
  }
  else if (weeksLeft<=4){
    text += " If you haven't already fulfilled your tutoring credits, please get them in ASAP!";
  }
  else if (weeksLeft<=8){
    text += " Please schedule your time accordingly, especially as we draw closer to the end of the semester.";
  }
  else if (weeksLeft<=11){
    text += " Please schedule your time accordingly."
  }
  else {
    text += " Please note that this is an estimate based on previous years, and may change.";
  }
  document.getElementById("officeHoursText").innerHTML = text;
}

initializeGlobal2();
setOfficeHoursText();
//$(document).bind('function_e_complete', initializeTrackerHelper);
//$(document).bind('function_d_complete', changeTrackerInfo);
