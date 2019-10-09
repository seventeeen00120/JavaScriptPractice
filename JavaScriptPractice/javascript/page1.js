
// Update the current slider value (each time you drag the slider handle)
/*slider.oninput = function() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value

  output.innerHTML = this.value;
}*/

function getData(){
    var result="";
    result += document.getElementsByName('name')[0].value+"<br>";
    result += document.getElementsByName('pass')[0].value+"<br>";
    result += document.getElementsByName('birth')[0].value+"<br>";
    result += document.getElementsByName('email')[0].value+"<br>";
    result += document.getElementsByName('phone')[0].value+"<br>";
    result += document.getElementsByName('time')[0].value+"<br>";
    result += document.getElementsByName('datetime')[0].value+"<br>";
    result += document.getElementsByName('url')[0].value+"<br>";
    result += document.getElementsByName('num1')[0].value+"<br>";
    result += document.getElementsByName('num2')[0].value+"<br>";
    result += document.getElementsByName('num3')[0].value+"<br>";
    result += document.getElementsByName('color')[0].value+"<br>";
    document.getElementById('result').innerHTML=result;
}
