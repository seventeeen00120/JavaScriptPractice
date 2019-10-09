/*指定運算子*/
var a,b,c;
a=1,b=2;
c=a+b;
document.getElementById("var1").innerHTML=c;

var hello="你好",name="王小寶";   
document.getElementById("var2").innerHTML=name+hello;

var a="3"+2+1;    /* "3"是字串 +就變成字串連接 2跟1自動變成字串*/
document.getElementById("var3").innerHTML=a;

var a=2+1+"3";    /* "1和2先以數字相加 因為"3"為字串 +字串變成字串相連*/
document.getElementById("var4").innerHTML=a;

/*算術運算子*/
var a,b,c;
a=10,b=3;
c=a+b;
document.getElementById("op1").innerHTML=c;

c=a-b;
document.getElementById("op2").innerHTML=c;

c=a*b;
document.getElementById("op3").innerHTML=c;

a++;  /*a=a+1*/
document.getElementById("op4").innerHTML=a;

a--;
document.getElementById("op5").innerHTML=a;

a=10;
a/=3;
document.getElementById("op6").innerHTML=a;

a=10;
a%=3;
document.getElementById("op7").innerHTML=a;

