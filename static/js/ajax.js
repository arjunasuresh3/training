function ajaxhtml(obj) {
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	      document.getElementById("appendhere").innerHTML=xmlhttp.responseText;
	  }
	};
	xmlhttp.open("GET","ajaxex",true);
	xmlhttp.send();
}


function ajaxxml(obj) {
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              var xmlstring = xmlhttp.responseText, xmlDoc;
              if (window.DOMParser) {
                  var parser = new DOMParser();
                  xmlDoc = parser.parseFromString(xmlstring,"text/xml");
              }
              else{
                  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                  xmlDoc.async = false;
                  xmlDoc.loadXML(xmlstring);
              }
              var name = xmlDoc.documentElement.getElementsByTagName('name')[0],
              surname = name.getAttribute('surname'),
              myName = name.firstChild.nodeValue;
	      document.getElementById("xmlcontent").innerHTML = "My name is " + myName + " " + surname + "!!!";
	  }
	};
	xmlhttp.open("GET","ajaxxml",true);
	xmlhttp.send();
}


function ajaxjson(obj) {
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              var jsonObj = JSON.parse(xmlhttp.responseText),
              h1Obj = document.createElement("h1"),
              h2Obj = document.createElement("h2"),
              h3Obj = document.createElement("h3"),
	      jsonAppend = document.getElementById("jsoncontent");
              h1Obj.innerHTML = jsonObj.Resultset.Result.Name;
              h2Obj.innerHTML = jsonObj.Resultset.Result.Country;
              h3Obj.innerHTML = jsonObj.Resultset.Result.favlanguages;
              jsonAppend.appendChild(h1Obj);
              jsonAppend.appendChild(h2Obj);
              jsonAppend.appendChild(h3Obj);
	  }
	};
	xmlhttp.open("GET","ajaxjson",true);
	xmlhttp.send();
}