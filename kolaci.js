


		var i=0;
			var svi;
			var doct;
			function napraviXMLHttpRequest(){
				if(window.XMLHttpRequest){
				zahtev=new XMLHttpRequest();}
				else{	zahtev=new ActiveXObject("Microsoft.XMLHTTP");}
				zahtev.open("GET","kolaci.xml",false);
				zahtev.send();
				doct=zahtev.responseXML;
				prikazi();
			}
			
			function prikazi(){
				var tekst="<table border='1' ><tr><th>vrsta</th><th>podaci</th></tr>";
				svi=doct.getElementsByTagName("kolac");
				tekst+="</br><tr><td>" + svi[i].getElementsByTagName("vrsta")[0].childNodes[0].nodeValue + "</br></td>";
		
				
				tekst+="<td>" + svi[i].getElementsByTagName("podaci")[0].childNodes[0].nodeValue + "</td></tr>";
				
				
				tekst+="</table>"
				
				document.getElementById("kolaci").innerHTML = tekst;
				}
				
			function napred(){
				if(i<svi.length-1){
					i++;
					prikazi();
					PrikaziSliku();
				}
			}
			
			function nazad(){
				if(i>0){
					i--;
					prikazi();
					PrikaziSliku();
				}
			}
			
			function PrikaziSliku()
			{
				document.witcher.src='slike/galerija/torta'+i+'.png';
			}
			