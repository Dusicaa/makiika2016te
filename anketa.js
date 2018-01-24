  var rb0=0;
var rb1=0;
var rb2=0;

var brAnkete=0;
var ocenjeno=false;
function anketa(){
 brAnkete=1;
 if(!ocenjeno){
 var rbOceniti=document.getElementsByName('lbanketa');
 
 
 for(var i=0;i<rbOceniti.length;i++){
   if(rbOceniti[i].checked) {
 switch(rbOceniti[i].value){
  case '0':rb0++;break;
  case '1':rb1++;break;
  case '2':rb2++;break;
  
 }
 ocenjeno=true;
 
 document.getElementById('rezultatAnkete').innerHTML=
 "<br/>Da= "+rb0+
 "<br/>Ne= "+rb1+
 "<br/>Možda= "+rb2;

 }
}
}
}



	