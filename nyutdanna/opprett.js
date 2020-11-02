var subjectObject = {
  "Agder":{
	},
   "Innlandet":{
	},
	"Møre og Romsdal":{
	},
	"Nordland":{
	},
	"Oslo":{
	},
	"Rogaland":{
	},
	"Vestfold og Telemark":{
	},
	"Troms og Finnmark":{
	},
	"Trøndelag":{
	},
	"Vestland":{
	},
	"Viken":{
	},
	
	


}
var topicObject = {
	"Årsstudium":{
		},
	"Bachelor":{
		},
	"Master":{
		},
	"Doktorgrad":{
		},
	
	
	
	
	
	
}

var chapterObject = {
	"Språk, litteratur og kultur":{},
	"Kunst, musikk og design":{},
	"Historie, filosofi og religion":{},
	"Lærer og pedagogikk":{},
	"Samfunn og politikk":{},
	"Juss, økonomi og administrasjon":{},
	"IT og media":{},
	"Teknologi og ingeniør":{},
	"Hav, klima og energi":{},
	"Natur og realfag":{},
	"Helse og psykologi":{},
	
	
	
	
	
	
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  for (var y in topicObject) {
    topicSel.options[topicSel.options.length] = new Option(y, y);
  }
    for (var z in chapterObject) {
    chapterSel.options[chapterSel.options.length] = new Option(z, z);
  }


  }