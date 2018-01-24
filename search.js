
function pretraga(){
 if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
 else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.open("GET","zapretragu.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;
 dohvatiPodatke3(xmlDoc);
}

function dohvatiPodatke3(xmlDoc){
 var tbPretraga=document.getElementById('tbPretraga');
 var unetitekst="";
  var svaPretraga=xmlDoc.getElementsByTagName('slatkis');
  for(var i=0;i<svaPretraga.length;i++){
	  var naziv=  svaPretraga[i].getElementsByTagName('naziv')[0].childNodes[0].nodeValue;
	  var vrsta=svaPretraga[i].getElementsByTagName('vrsta')[0].childNodes[0].nodeValue;
	
      if(tbPretraga.value.toLowerCase().trim()==ime.toLowerCase().trim()){
	       unetitekst="<span style='color:#718147; font-size:13px'><i><b>Naziv: </b></i></span>"+naziv+
	        "<br/><span style='color:#718147; font-size:13px'><i><b>Vrsta: </b></i></span>"+vrsta;}
  }
 
  document.getElementById('rezultatPretraga').innerHTML=unetitekst;
}
