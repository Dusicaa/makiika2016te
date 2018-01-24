function prijava(){
	               var ime = document.getElementById('txtName');
				    var email=document.getElementById('txtEmail');
					var reIme = /^[a-z]{1,14}\s[a-z]{1,19}$/;
					var reEmail=/^[A-z0-9]{3,}@[A-z]{3,}$/;
					var greske = new Array();
	              var greskeID = new Array();
	             var sadrzaj = new Array();
				 
				
	if(!ime.value.match(reIme))
	{
		greske.push("Ime i prezime nisu u dobrom formatu!");
		greskeID.push(ime.id);
	}
	else
	{
		sadrzaj.push(ime.value);
	}
	
	if(!email.value.match(reEmail))
	{
		greske.push("Email nije u dobrom formatu!");
		greskeID.push(email.id);
	}
	else
	{
		sadrzaj.push(email.value);
	}
	
	if(greske.length == 0)
	{
		var tekst = "<ul>";
		
		for(var i = 0; i < sadrzaj.length; i++)
		{
			tekst += "<li>" + sadrzaj[i] + "</li>";
		}
		tekst += "</ul>";
		
		document.getElementById('ispis').innerHTML = tekst;
	}
	else
	{
		for(var i = 0; i < greskeID.length; i++)
		{
			document.getElementById(greskeID[i]).style.border="1px solid red";
		}
		
		var listaGresaka = "";
		for(var i = 0; i < greske.length; i++)
		{
			listaGresaka += greske[i] + "<br />";
		}
		
		document.getElementById('ispis').innerHTML = listaGresaka;
}}
