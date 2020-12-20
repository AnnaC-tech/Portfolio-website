
function updateClock() {
    // Gets the current time
    var now = new Date();

    // Get the hours, minutes and seconds from the current time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format hours, minutes and seconds
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Gets the element we want to inject the clock into
    var elem = document.getElementById('clock');

    // Sets the elements inner HTML value to our clock data
    elem.innerHTML = hours + ':' + minutes + ':' + seconds;
}




function newElement() {
    var inputval = document.getElementById('inputnewlist').value;
    var li = document.createElement('li');
    var lichild = document.createTextNode(inputval);
  
    li.appendChild(lichild);
    if (inputval === '') {
      alert('you must put something in the textbox!');
    } else {
      document.getElementById('mylist').appendChild(li);
    }
    document.getElementById('inputnewlist').value = "";
  }
  
  let buttons = document.getElementsByClassName('addbutton');
  for (let b of buttons) {
    b.addEventListener('click', function() {
       newElement();
    });
  }




  var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Pineapple" && password == "Det099"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}