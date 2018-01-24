function postavi(){
	var taKomentar=document.getElementById("taKomentar");
		    var noviKomentar=document.createElement("div");
			noviKomentar.className="komentar";
			var tekstKomentara=document.createTextNode(taKomentar.value);
			noviKomentar.appendChild(tekstKomentara);
			var tagBody = document.getElementById("ostaviteKomentar").item(0);
                         tagBody.appendChild(noviKomentar);
			 document.getElementById("ostaviteKomentar").reset();
}		
