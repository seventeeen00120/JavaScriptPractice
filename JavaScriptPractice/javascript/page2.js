function getData(){
    var result=" ";
    var gender= document.getElementsByName('gender');
    result+=gender[0].value+" "+gender[0].checked+" ";
    result+=gender[1].value+" "+gender[1].checked+" ";
    result +="<br>";
    var drink= document.getElementsByName('drink');
    result+=drink[0].value+" "+drink[0].checked+" ";
    result+=drink[1].value+" "+drink[1].checked+" ";
    result+=drink[2].value+" "+drink[2].checked+" ";
    result +="<br>"; 
    var sport= document.getElementsByName('sport');
    result+=sport[0].value+" "+sport[0].checked+" ";
    result+=sport[1].value+" "+sport[1].checked+" ";
    result+=sport[2].value+" "+sport[2].checked+" ";
    result +="<br>";
    result += document.getElementsByName('num1')[0].value+"<br>";
    result += document.getElementsByName('textarea')[0].value+"<br>";
    document.getElementById('result').innerHTML=result;
}
