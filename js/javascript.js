var givenName;var familyName;var email;var status;var curStatus;var appIndex;var auth2;var userIndex;var updateIndex;function initializeGlobal(){givenName="givenName";familyName="familyName";email="email";status="status";curStatus="status";appIndex=-1;userIndex=-1;updateIndex=-1}function handleClientLoad(){initializeGlobal();$(document).bind('function_a_complete',initializeApplicationHelper);$(document).bind('function_b_complete',initializeApplication);$(document).bind('function_c_complete',changeStatusHelper);gapi.load('client:auth2',initClient)}function initClient(){gapi.client.init({apiKey:CryptoJS.AES.decrypt("U2FsdGVkX1/S8edWarSrmB53PvEMUMsK0tR5R8AURw/OjmOz7CjeZ1pNJKcJfNd6PpEKTTQbXhX1/tQMnSFVCQ==","nhs").toString(CryptoJS.enc.Utf8),clientId:'1058472710733-bc8l9sjqt9fktohmeejv5jlgjbnccpfj.apps.googleusercontent.com',discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"profile email https://www.googleapis.com/auth/spreadsheets"})}function appendPre(a){var b=document.getElementById('content');var c=document.createTextNode(a+'\n');b.appendChild(c)}function main(){}function onSignIn(a){var b=gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();if(b.getEmail().indexOf("@bxscience.edu")<0){alert("Please sign in with a Bronx Science email. You have been signed out.");signOut()}else{document.getElementById("signInLink").style.display="none";document.getElementById("greetingText").innerHTML="Hi, "+b.getGivenName()+".</h5>";document.getElementById("signOutLink").style.display="block"}}function signOut(){var a=gapi.auth2.getAuthInstance();a.signOut().then(function(){console.log('User signed out.')});document.getElementById("greetingText").innerHTML="";document.getElementById("signInLink").style.display="block";document.getElementById("signOutLink").style.display="none";givenName="givenName";familyName="familyName";email="email";status="status";if(window.location.href.indexOf("classman")>=0||window.location.href.indexOf("tracker")>=0){window.location.href="../"}}function addService(){if(document.getElementById("serviceForm4").style.display=="block"){document.getElementById("serviceForm5").style.display="block";document.getElementById("addActivity").style.display="none"}else if(document.getElementById("serviceForm3").style.display=="block"){document.getElementById("serviceForm4").style.display="block"}else if(document.getElementById("serviceForm2").style.display=="block"){document.getElementById("serviceForm3").style.display="block"}else{document.getElementById("serviceForm2").style.display="block"}}function addLeadership(){if(document.getElementById("leadershipForm9").style.display=="block"){document.getElementById("leadershipForm10").style.display="block";document.getElementById("laddActivity").style.display="none"}else if(document.getElementById("leadershipForm8").style.display=="block"){document.getElementById("leadershipForm9").style.display="block"}else if(document.getElementById("leadershipForm7").style.display=="block"){document.getElementById("leadershipForm8").style.display="block"}else if(document.getElementById("leadershipForm6").style.display=="block"){document.getElementById("leadershipForm7").style.display="block"}else if(document.getElementById("leadershipForm5").style.display=="block"){document.getElementById("leadershipForm6").style.display="block"}else if(document.getElementById("leadershipForm4").style.display=="block"){document.getElementById("leadershipForm5").style.display="block"}else if(document.getElementById("leadershipForm3").style.display=="block"){document.getElementById("leadershipForm4").style.display="block"}else if(document.getElementById("leadershipForm2").style.display=="block"){document.getElementById("leadershipForm3").style.display="block"}else{document.getElementById("leadershipForm2").style.display="block"}}function redirectIfSignedIn(a){if(gapi.auth2.getAuthInstance().isSignedIn.get()){window.location.href=a}else{alert('To use this service, please sign in using your bxscience.edu email.')}}function findStatus(d){gapi.client.sheets.spreadsheets.values.get({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX18kEuc0waEbwGgL1/rvnxgbHleT2o9MxdM13zbc6F3A2g/lUY/bSNZyxklDxPYUSG//Vxr7rf3GBw==","nhs").toString(CryptoJS.enc.Utf8),range:'Sheet1!A:D',}).then(function(a){var b=a.result;if(b.values.length>0){for(i=0;i<b.values.length;i++){var c=b.values[i];if((c[2]+"").indexOf(d)>=0){status=c[3]+"";curStatus=c[3]+"";userIndex=i;$(document).trigger('function_a_complete');return}}status="N/A";$(document).trigger('function_a_complete')}})}function changeStatus(){gapi.client.sheets.spreadsheets.values.get({spreadsheetId:'1FrHVeXNWCjov5MtHM4h8pNfQ007PiHReK07VSeTbbAc',range:'Sheet1',}).then(function(a){var b=a.result;if(b.values.length>0){for(i=1;i<b.values.length;i++){var c=b.values[i];if((c[2]+"").indexOf(email)>=0){userIndex=i;break}}$(document).trigger('function_c_complete')}})}function changeStatusHelper(){var a={"majorDimension":"ROWS","values":[[familyName,givenName,email,status],],};gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX1+TP7NKOInXJu1+3Gt9V3ACgPbivHWK7dM8t9GqfcmAuA79KdTkjUTamWGVbZ2/wAg4lBvnut/vRw==","nhs").toString(CryptoJS.enc.Utf8),range:("Sheet1!"+(userIndex+1)+":"+(userIndex+1)),valueInputOption:"USER_ENTERED",resource:a}).then((response)=>{var b=response.result;console.log(`${b.updatedCells}cells updated.`);console.log("Userindex is "+userIndex)})}function appendNewPerson(){var c={"majorDimension":"ROWS","values":[["",familyName,givenName,email,"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],],};if(window.location.href.indexOf("under")>=0){curStatus="freshman";status="freshman";gapi.client.sheets.spreadsheets.values.append({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8),range:"Applications",valueInputOption:"USER_ENTERED",resource:c}).then((response)=>{var d=response.result;console.log(`${d.updates.updatedCells}cells appended.`)});gapi.client.sheets.spreadsheets.values.get({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8),range:'Applications',}).then(function(a){var b=a.result;appIndex=b.values.length})}else{curStatus="juniorProspective";status="juniorProspective";gapi.client.sheets.spreadsheets.values.append({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8),range:"Applications",valueInputOption:"USER_ENTERED",resource:c}).then((response)=>{var d=response.result;console.log(`${d.updates.updatedCells}cells appended.`)});gapi.client.sheets.spreadsheets.values.get({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8),range:'Applications',}).then(function(a){var b=a.result;appIndex=b.values.length})}var e={"majorDimension":"ROWS","values":[[familyName,givenName,email,status],],};gapi.client.sheets.spreadsheets.values.append({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19ro83Kul9IRQrVq6oP5LCGhrjTze7hd2eyt8Q6c7LFRUtNZRscAy4+yZX5ocFZn42T3IqK6bGGjQ==","nhs").toString(CryptoJS.enc.Utf8),range:"Sheet1",valueInputOption:"USER_ENTERED",resource:e}).then((response)=>{var d=response.result;console.log(`${d.updates.updatedCells}cells appended.`)});if(window.location.href.indexOf("under")>=0){retrieveApp("Freshman")}else{retrieveApp("Junior")}}function initializeApplication(){if(gapi.auth2.getAuthInstance().isSignedIn.get()){document.getElementById("loadingText").style.display="block";document.getElementById("loadingImg").style.display="block";document.getElementById("appButton").style.display="none";var a=gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();givenName=a.getGivenName();familyName=a.getFamilyName();email=a.getEmail();findStatus(email)}else{alert("To use this service, please sign in using your bxscience.edu email.")}}function initializeApplicationHelper(){document.getElementById("loadingText").style.display="none";document.getElementById("loadingImg").style.display="none";document.getElementById("application").style.display="block";if(status.indexOf("N/A")>=0){appendNewPerson()}else if(status.indexOf("seniorCurrent")>=0||status.indexOf("juniorCurrent")>=0){alert("It seems that you are a current NHS member. If this is incorrect, please contact chena@bxscience.edu.");document.getElementById("application").style.display="none"}else if(status.indexOf("freshman")>=0||status.indexOf("sophomore")>=0){if(window.location.href.indexOf("upperclassman")>=0){alert("It seems that you are in our records as an underclassman. If you are ready, you may start your application as a junior or senior. All information will transfer over.");if(status.indexOf("freshman")>=0){retrieveApp("Freshman")}else{retrieveApp("Sophomore")}changeJunior()}else{if(status.indexOf("freshman")>=0){retrieveApp("Freshman")}else{retrieveApp("Sophomore")}}}else{if(window.location.href.indexOf("underclassman")>=0){alert("It seems that you are in our records as an upperclassman. If you started an upperclassman application by mistake, you may continue your pre-application as a freshman or sophomore. All information will transfer over.");if(status.indexOf("juniorProspective")>=0){retrieveApp("Junior")}else{retrieveApp("Senior")}changeFreshman()}else{if(status.indexOf("juniorProspective")>=0){retrieveApp("Junior")}else{retrieveApp("Senior");changeSenior()}}}}function retrieveApp(h){document.getElementById("grade").innerHTML=h;var j;if(h.indexOf("Junior")>=0){j=CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8)}else if(h.indexOf("Senior")>=0){j=CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(h.indexOf("Freshman")>=0){j=CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(h.indexOf("Sophomore")>=0){j=CryptoJS.AES.decrypt("U2FsdGVkX19CHL+utgPJXNT5VYpZo3/sXQwL3tZ6bFtz7lSdBzXnt/mRkttjVnRIwbUuYyD67aTniu3ZgaRftQ==","nhs").toString(CryptoJS.enc.Utf8)}gapi.client.sheets.spreadsheets.values.get({spreadsheetId:j,range:'Applications',}).then(function(a){var c=a.result;if(c.values.length>0){for(i=0;i<c.values.length;i++){var d=c.values[i];if((d[3]+"").indexOf(email)>=0){appIndex=i;document.getElementById("lastNameInput").value=d[1];document.getElementById("firstNameInput").value=d[2];if(!(d[4]===undefined)){document.getElementById("osisInput").value=d[4]}if(!(d[5]===undefined)){document.getElementById("offInput").value=d[5]}if(!(d[6]===undefined)){document.getElementById("averageInput").value=d[6]}if(!(d[7]===undefined)&&d[7].trim().toLowerCase().indexOf("yes")>=0){document.getElementById("failedInput").checked=true;document.getElementById("failedInput2").checked=false}else{document.getElementById("failedInput").checked=false;document.getElementById("failedInput2").checked=true}if(!(d[8]===undefined)&&d[8].trim().toLowerCase().indexOf("yes")>=0){document.getElementById("suspendedInput").checked=true;document.getElementById("suspendedInput2").checked=false}else{document.getElementById("suspendedInput").checked=false;document.getElementById("suspendedInput2").checked=true}if(!(d[9]===undefined)&&d[9].trim().toLowerCase().indexOf("sophomore")>=0){document.getElementById("enteredAsSoph").checked=true;document.getElementById("enteredAsSoph2").checked=true;if(h.indexOf("senior")>=0){document.getElementById("serviceNeeded").innerHTML="10";document.getElementById("serviceNeeded2").innerHTML="10";document.getElementById("leadershipNeeded").innerHTML="40";document.getElementById("leadershipNeeded2").innerHTML="40"}else{document.getElementById("serviceNeeded").innerHTML="8";document.getElementById("serviceNeeded2").innerHTML="8";document.getElementById("leadershipNeeded").innerHTML="30";document.getElementById("leadershipNeeded2").innerHTML="30"}}else{document.getElementById("enteredAsSoph").checked=false;document.getElementById("enteredAsSoph2").checked=false;if(h.indexOf("senior")>=0){document.getElementById("serviceNeeded").innerHTML="15";document.getElementById("serviceNeeded2").innerHTML="15";document.getElementById("leadershipNeeded").innerHTML="60";document.getElementById("leadershipNeeded2").innerHTML="60"}else{document.getElementById("serviceNeeded").innerHTML="13";document.getElementById("serviceNeeded2").innerHTML="13";document.getElementById("leadershipNeeded").innerHTML="50";document.getElementById("leadershipNeeded2").innerHTML="50"}}var e=1;for(var m=10;m<=34;m=m+6){if((d[m]+"").trim().length>0&&m>10){addService()}if((d[m]+"").trim().length<=0||d[m]===undefined){break}if((d[m]+"").trim().length>0){document.getElementById("serviceNameInput"+e).value=d[m];if((d[m+1]+"").trim().length>0){document.getElementById("code"+e).selectedIndex=getSelectedIndex(d[m+1])}document.getElementById("creditInput"+e).value=d[m+3];document.getElementById("facultyInput"+e).value=d[m+4];document.getElementById("emailInput"+e).value=d[m+5];e++}}e=1;for(var n=40;n<=94;n=n+6){if((d[n]+"").trim().length>0&&n>40){addLeadership()}if((d[n]+"").trim().length<=0||d[n]===undefined){break}if((d[n]+"").trim().length>0){document.getElementById("leadershipNameInput"+e).value=d[n];if((d[n+1]+"").trim().length>0){document.getElementById("lcode"+e).selectedIndex=getSelectedIndex(d[n+1])}document.getElementById("lcreditInput"+e).value=d[n+3];document.getElementById("lfacultyInput"+e).value=d[n+4];document.getElementById("lemailInput"+e).value=d[n+5];e++}}if(!(d[100]===undefined)){document.getElementById("additionalInput").value=d[100]}if(!(d[101]===undefined)){document.getElementById("electronicInput").value=d[101]}var f=0;var g=0;for(var b=1;b<=5;b++){if(!isNaN(parseInt(document.getElementById("creditInput"+b).value))){f+=parseInt(document.getElementById("creditInput"+b).value)}}document.getElementById("serviceInput").innerHTML=f+"";document.getElementById("serviceInput2").innerHTML=f+"";for(var b=1;b<=10;b++){if(!isNaN(parseInt(document.getElementById("lcreditInput"+b).value))){g+=parseInt(document.getElementById("lcreditInput"+b).value)}}document.getElementById("leadershipInput").innerHTML=g+"";document.getElementById("leadershipInput2").innerHTML=g+"";if(h.indexOf("Senior")>=0){changeSenior()}break}}}})}function getSelectedIndex(a){if(a.indexOf("S1")>=0||a.indexOf("L1")>=0){return 0}else if(a.indexOf("S2")>=0||a.indexOf("L2")>=0){return 1}else if(a.indexOf("S3")>=0||a.indexOf("L3")>=0){return 2}else if(a.indexOf("S4")>=0||a.indexOf("L4")>=0){return 3}else if(a.indexOf("S5")>=0||a.indexOf("L5")>=0){return 4}else if(a.indexOf("C1")>=0){return 5}else if(a.indexOf("C2")>=0){return 6}else if(a.indexOf("C3")>=0){return 7}else if(a.indexOf("C4")>=0){return 8}else{return-1}}function changeJunior(){status="juniorProspective";if(document.getElementById("enteredAsSoph").checked||document.getElementById("enteredAsSoph2").checked){document.getElementById("serviceNeeded").innerHTML="8";document.getElementById("serviceNeeded2").innerHTML="8";document.getElementById("leadershipNeeded").innerHTML="30";document.getElementById("leadershipNeeded2").innerHTML="30"}else{document.getElementById("serviceNeeded").innerHTML="13";document.getElementById("serviceNeeded2").innerHTML="13";document.getElementById("leadershipNeeded").innerHTML="50";document.getElementById("leadershipNeeded2").innerHTML="50"}}function changeSenior(){status="seniorProspective";if(document.getElementById("enteredAsSoph").checked||document.getElementById("enteredAsSoph2").checked){document.getElementById("serviceNeeded").innerHTML="10";document.getElementById("serviceNeeded2").innerHTML="10";document.getElementById("leadershipNeeded").innerHTML="40";document.getElementById("leadershipNeeded2").innerHTML="40"}else{document.getElementById("serviceNeeded").innerHTML="15";document.getElementById("serviceNeeded2").innerHTML="15";document.getElementById("leadershipNeeded").innerHTML="60";document.getElementById("leadershipNeeded2").innerHTML="60"}}function changeFreshman(){status="freshman"}function changeSophomore(){status="sophomore"}function handleChange(a){if(a.checked==true){if(status.indexOf("seniorProspective")>=0){document.getElementById("serviceNeeded").innerHTML="10";document.getElementById("serviceNeeded2").innerHTML="10";document.getElementById("leadershipNeeded").innerHTML="40";document.getElementById("leadershipNeeded2").innerHTML="40"}else{document.getElementById("serviceNeeded").innerHTML="8";document.getElementById("serviceNeeded2").innerHTML="8";document.getElementById("leadershipNeeded").innerHTML="30";document.getElementById("leadershipNeeded2").innerHTML="30"}}else{if(status.indexOf("seniorProspective")>=0){document.getElementById("serviceNeeded").innerHTML="15";document.getElementById("serviceNeeded2").innerHTML="15";document.getElementById("leadershipNeeded").innerHTML="60";document.getElementById("leadershipNeeded2").innerHTML="60"}else{document.getElementById("serviceNeeded").innerHTML="13";document.getElementById("serviceNeeded2").innerHTML="13";document.getElementById("leadershipNeeded").innerHTML="50";document.getElementById("leadershipNeeded2").innerHTML="50"}}}function saveApp(){var e=0;var f=0;for(var b=1;b<=5;b++){if(!isNaN(parseInt(document.getElementById("creditInput"+b).value))){e+=parseInt(document.getElementById("creditInput"+b).value)}}document.getElementById("serviceInput").innerHTML=e+"";document.getElementById("serviceInput2").innerHTML=e+"";for(var b=1;b<=10;b++){if(!isNaN(parseInt(document.getElementById("lcreditInput"+b).value))){f+=parseInt(document.getElementById("lcreditInput"+b).value)}}document.getElementById("leadershipInput").innerHTML=f+"";document.getElementById("leadershipInput2").innerHTML=f+"";var g;var h;var j;if(document.getElementById("failedInput2").checked){g="No"}else{g="Yes"}if(document.getElementById("suspendedInput2").checked){h="No"}else{h="Yes"}if(document.getElementById("enteredAsSoph").checked||document.getElementById("enteredAsSoph2").checked){j="Sophomore"}else{j="Freshman"}var k={"majorDimension":"ROWS","values":[["",familyName,givenName,email,document.getElementById("osisInput").value,document.getElementById("offInput").value,document.getElementById("averageInput").value,g,h,j,document.getElementById("serviceNameInput1").value,document.getElementById("code1").options[document.getElementById("code1").selectedIndex].text,"",document.getElementById("creditInput1").value,document.getElementById("facultyInput1").value,document.getElementById("emailInput1").value,document.getElementById("serviceNameInput2").value,document.getElementById("code2").options[document.getElementById("code2").selectedIndex].text,"",document.getElementById("creditInput2").value,document.getElementById("facultyInput2").value,document.getElementById("emailInput2").value,document.getElementById("serviceNameInput3").value,document.getElementById("code3").options[document.getElementById("code3").selectedIndex].text,"",document.getElementById("creditInput3").value,document.getElementById("facultyInput3").value,document.getElementById("emailInput3").value,document.getElementById("serviceNameInput4").value,document.getElementById("code4").options[document.getElementById("code4").selectedIndex].text,"",document.getElementById("creditInput4").value,document.getElementById("facultyInput4").value,document.getElementById("emailInput4").value,document.getElementById("serviceNameInput5").value,document.getElementById("code5").options[document.getElementById("code5").selectedIndex].text,"",document.getElementById("creditInput5").value,document.getElementById("facultyInput5").value,document.getElementById("emailInput5").value,document.getElementById("leadershipNameInput1").value,document.getElementById("lcode1").options[document.getElementById("lcode1").selectedIndex].text,"",document.getElementById("lcreditInput1").value,document.getElementById("lfacultyInput1").value,document.getElementById("lemailInput1").value,document.getElementById("leadershipNameInput2").value,document.getElementById("lcode2").options[document.getElementById("lcode2").selectedIndex].text,"",document.getElementById("lcreditInput2").value,document.getElementById("lfacultyInput2").value,document.getElementById("lemailInput2").value,document.getElementById("leadershipNameInput3").value,document.getElementById("lcode3").options[document.getElementById("lcode3").selectedIndex].text,"",document.getElementById("lcreditInput3").value,document.getElementById("lfacultyInput3").value,document.getElementById("lemailInput3").value,document.getElementById("leadershipNameInput4").value,document.getElementById("lcode4").options[document.getElementById("lcode4").selectedIndex].text,"",document.getElementById("lcreditInput4").value,document.getElementById("lfacultyInput4").value,document.getElementById("lemailInput4").value,document.getElementById("leadershipNameInput5").value,document.getElementById("lcode5").options[document.getElementById("lcode5").selectedIndex].text,"",document.getElementById("lcreditInput5").value,document.getElementById("lfacultyInput5").value,document.getElementById("lemailInput5").value,document.getElementById("leadershipNameInput6").value,document.getElementById("lcode6").options[document.getElementById("lcode6").selectedIndex].text,"",document.getElementById("lcreditInput6").value,document.getElementById("lfacultyInput6").value,document.getElementById("lemailInput6").value,document.getElementById("leadershipNameInput7").value,document.getElementById("lcode7").options[document.getElementById("lcode7").selectedIndex].text,"",document.getElementById("lcreditInput7").value,document.getElementById("lfacultyInput7").value,document.getElementById("lemailInput7").value,document.getElementById("leadershipNameInput8").value,document.getElementById("lcode8").options[document.getElementById("lcode8").selectedIndex].text,"",document.getElementById("lcreditInput8").value,document.getElementById("lfacultyInput8").value,document.getElementById("lemailInput8").value,document.getElementById("leadershipNameInput9").value,document.getElementById("lcode9").options[document.getElementById("lcode9").selectedIndex].text,"",document.getElementById("lcreditInput9").value,document.getElementById("lfacultyInput9").value,document.getElementById("lemailInput9").value,document.getElementById("leadershipNameInput10").value,document.getElementById("lcode10").options[document.getElementById("lcode10").selectedIndex].text,"",document.getElementById("lcreditInput10").value,document.getElementById("lfacultyInput10").value,document.getElementById("lemailInput10").value,document.getElementById("additionalInput").value,document.getElementById("electronicInput").value,"","","",e,"","",f],],};if(curStatus.trim().indexOf(status)<0){var l;var m;if(curStatus.indexOf("juniorProspective")>=0){l=CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("seniorProspective")>=0){l=CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("freshman")>=0){l=CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("sophomore")>=0){l=CryptoJS.AES.decrypt("U2FsdGVkX19CHL+utgPJXNT5VYpZo3/sXQwL3tZ6bFtz7lSdBzXnt/mRkttjVnRIwbUuYyD67aTniu3ZgaRftQ==","nhs").toString(CryptoJS.enc.Utf8)}else{console.log("Error: curStatus is "+curStatus);return}if(status.indexOf("juniorProspective")>=0){m=CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8)}else if(status.indexOf("seniorProspective")>=0){m=CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(status.indexOf("freshman")>=0){m=CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(status.indexOf("sophomore")>=0){m=CryptoJS.AES.decrypt("U2FsdGVkX19CHL+utgPJXNT5VYpZo3/sXQwL3tZ6bFtz7lSdBzXnt/mRkttjVnRIwbUuYyD67aTniu3ZgaRftQ==","nhs").toString(CryptoJS.enc.Utf8)}else{console.log("Error: curStatus is "+curStatus);return}var n={"majorDimension":"ROWS","values":[["",familyName,givenName,email,"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],],};updateIndex=-1;gapi.client.sheets.spreadsheets.values.get({spreadsheetId:m,range:'Applications',}).then(function(a){var b=a.result;if(b.values.length>0){for(i=0;i<b.values.length;i++){var c=b.values[i];if((c[3]+"").indexOf(email)>=0){updateIndex=i;gapi.client.sheets.spreadsheets.values.update({spreadsheetId:m,range:("Applications!"+(updateIndex+1)+":"+(updateIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((a)=>{var d=a.result;console.log(`${d.updatedCells}cells updated.`)});break}if(i==b.values.length-1){gapi.client.sheets.spreadsheets.values.append({spreadsheetId:m,range:("Applications"),valueInputOption:"USER_ENTERED",resource:k}).then((a)=>{var d=a.result;console.log(`${d.updates.updatedCells}cells appended.`)})}}}});curStatus=status;changeStatus();if(status.indexOf("juniorProspective")>=0){retrieveApp("Junior")}else if(status.indexOf("seniorProspective")>=0){retrieveApp("Senior")}else if(status.indexOf("freshman")>=0){retrieveApp("Freshman")}else if(status.indexOf("sophomore")>=0){retrieveApp("Sophomore")}if(status.indexOf("seniorProspective")>=0){gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8),range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`)})}gapi.client.sheets.spreadsheets.values.update({spreadsheetId:l,range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:n}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`)});alert('Your application has been saved!')}else if(status.indexOf("juniorProspective")>=0){gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8),range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`);alert('Your application has been saved!')})}else if(status.indexOf("seniorProspective")>=0){gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8),range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`);alert('Your application has been saved!')})}else if(status.indexOf("freshman")>=0){gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8),range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`);alert('Your application has been saved!')})}else if(status.indexOf("sophomore")>=0){gapi.client.sheets.spreadsheets.values.update({spreadsheetId:CryptoJS.AES.decrypt("U2FsdGVkX19CHL+utgPJXNT5VYpZo3/sXQwL3tZ6bFtz7lSdBzXnt/mRkttjVnRIwbUuYyD67aTniu3ZgaRftQ==","nhs").toString(CryptoJS.enc.Utf8),range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:k}).then((response)=>{var o=response.result;console.log(`${o.updatedCells}cells updated.`);alert('Your application has been saved!')})}handleChange(document.getElementById("enteredAsSoph"));handleChange(document.getElementById("enteredAsSoph2"))}function deleteApp(){var a;if(curStatus.indexOf("juniorProspective")>=0){a=CryptoJS.AES.decrypt("U2FsdGVkX19msL/1Yx58CumPHkOt2SMJ9kplpqPnIVr35yTV5JOKhiz8iHU3PKYBPoWreH4pXulNHBVwL3849A==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("seniorProspective")>=0){a=CryptoJS.AES.decrypt("U2FsdGVkX19vAoSS5/VCQltfcmz1PWRcw+gxqqrxNaW/a+oZIr9tV1jeJXmPisLoxDZJnZcqKLRJbTGP26ejzQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("freshman")>=0){a=CryptoJS.AES.decrypt("U2FsdGVkX1/ZYdq++0BwGDq/voK9wSavV/DWvCJ9kWsEX50Gi1/KQAERyuQuVXbKXIB3hDnbo+ThWpaf1b1HOQ==","nhs").toString(CryptoJS.enc.Utf8)}else if(curStatus.indexOf("sophomore")>=0){a=CryptoJS.AES.decrypt("U2FsdGVkX19CHL+utgPJXNT5VYpZo3/sXQwL3tZ6bFtz7lSdBzXnt/mRkttjVnRIwbUuYyD67aTniu3ZgaRftQ==","nhs").toString(CryptoJS.enc.Utf8)}else{console.log("Error: curStatus is "+curStatus);return}var b={"majorDimension":"ROWS","values":[["",familyName,givenName,email,"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],],};gapi.client.sheets.spreadsheets.values.update({spreadsheetId:a,range:("Applications!"+(appIndex+1)+":"+(appIndex+1)),valueInputOption:"USER_ENTERED",resource:b}).then((response)=>{var c=response.result;console.log(`${c.updatedCells}cells updated.`)});document.getElementById("loadingText").innerHTML="Your application has been deleted.";document.getElementById("loadingText").style.display="block";document.getElementById("application").style.display="none";alert('Your application has been deleted.')}var scrollEventHandler=function(){window.scroll(0,window.pageYOffset)}window.addEventListener("scroll",scrollEventHandler,false);$(function(){$('.confirm').click(function(e){e.preventDefault();if(window.confirm("Are you sure? Your application data will be removed from our database.")){deleteApp()}})});
