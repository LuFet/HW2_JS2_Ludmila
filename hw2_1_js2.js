const newLocal = document.getElementsByTagName("p");
window.onload=(function(){
    var paragraphs=newLocal;
    for(var i=0;i<paragraphs.length;i++)
    {
        paragraphs[i].innerHTML="PARAGRAPH";
    }
    
})