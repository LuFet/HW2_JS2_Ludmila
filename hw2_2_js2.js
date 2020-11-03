function ButtonHandler(){
    var div1=document.getElementById("div1");
    var p1=document.createElement("p");
    p1.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    div1.appendChild(p1);
var p1s=document.getElementsByTagName("p");
console.log(p1s.length);
if(p1s.length==10)
{
    div1.innerHTML="";
}
}