function main(){
  /*var app = new Vue({
    el: '#test',
    data: {
      message: 'Hello, Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })*/
}

/*function parseName(name){
  var array1 = name.split(' ');
  var newarray1 = [];

  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}*/

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  //make sure it is a Bronx Science account
  if (profile.getEmail().indexof("@bxscience.edu")<0){
    alert("Please sign in with a Bronx Science email.");
    signOut();
  }
  else {
    document.getElementById("signInLink").style.visibility = "hidden";
    //change the greeting
    $('.greeting').append("<h5 class='my-2 my-lg-0 px-1 greetingText' style='color: #B8BAB9;'>Hi, "+profile.getGivenName()+".</h5>");
    //make sign-out link visible
    document.getElementById("signOutLink").style.visibility = "visible";
  }
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  $(".greetingText").remove();
  document.getElementById("signInLink").style.visibility = "visible";
  document.getElementById("signOutLink").style.visibility = "hidden";
}

function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1yWsQtQbs6Uf3xxqj8TjBLg9cKm7dDf9jkCE6zxbFVE8/edit?usp=sharing',
                   callback: showInfo,
                   parseNumbers: true,
                   //simpleSheet: true
                  } )
}
function showInfo(data, tabletop) {
  data = tabletop.sheets("main").toArray();
  //so now data is a 2D array


  //console.log(tabletop.sheets("main").toArray()[0][0]);
  /*
  data = tabletop.sheets("main").toArray();
  //all data sent into a 1D array, so convert that into a 2D array
  //5 variables --> given name, family name, email, grade, probations



  var test = "";
  for (var i = 0; i < data.length; i++){
    test+=data[i];
  }
  console.log(test);
  */

}
window.addEventListener('DOMContentLoaded', init)

/*var auth2 = gapi.auth2.getAuthInstance();
  if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
} */

window.onload = main();
