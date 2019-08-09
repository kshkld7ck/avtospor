let validator = new (function(){

	//DONE
	this.slide1 = function(){
		var fields = [];
		var val = document.getElementById("games");
		var FIO = document.getElementById("FIO");
		var SUM = document.getElementById("sum");
		var NUMPOST = document.getElementById("numpost");
		var MODEL = document.getElementById("model");
		var DATA = document.getElementById("date");
		var NUMTS = document.getElementById("numTS");
		if(val.options[val.selectedIndex].text == "Что случилось?"){
			fields.push(["ss",0])
		}
		else {
			fields.push(["ss",1])
		}
		if(!fieldvalidators.text(FIO.value)) {
			fields.push(["FIO", 0]);
		} else {
			fields.push(["FIO", 1]);	
		}
		if(!fieldvalidators.number(SUM.value)) {
			fields.push(["sum", 0]);
		} else {
			fields.push(["sum", 1]);
		}
		if(!fieldvalidators.number(NUMPOST.value)) {
			fields.push(["numpost", 0]);
		} else {
			fields.push(["numpost", 1]);
		}
		if (!fieldvalidators.text(MODEL.value)){
			fields.push(["model", 0]);
		} else {
			fields.push(["model", 1]);
		}
		if (!fieldvalidators.date(DATA.value)) {
			fields.push(["date", 0]);
		} else {
			fields.push(["date", 1]);
		}
		if (!fieldvalidators.tsnum(NUMTS.value)) {
			fields.push(["numTS", 0]);
		} else {
			fields.push(["numTS", 1]);
		}

		return fields;

	};

	//DONE
	this.dannie = function() {
		var fields = [];
		var ADRESS = document.getElementById("adress");
		var PHONE = document.getElementById("phone");
		var EMAIL = document.getElementById("email");
		if(!fieldvalidators.email(EMAIL.value)) {
			fields.push(["email", 0]);
		} else {
			fields.push(["email", 1]);
		}
		if(!fieldvalidators.phone(PHONE.value)){
			fields.push(["phone", 0]);
		} else {
			fields.push(["phone", 1]);
		}
		if(!fieldvalidators.text(ADRESS.value)){
			fields.push(["adress", 0]);
		} else {
			fields.push(["adress", 1]);
		}
		return fields
	};


	//TODO: FINISH THIS
	this.speed = function(){ 
		var fields = [];
		var SPEEDDATE = document.getElementById("spiddate");
		var SPEEDTIME = document.getElementById("spidtime");
		var SPEEDPLACE = document.getElementById("spidplace");
		var SPEEDFROM = document.getElementById("spidfrom");
		var SPEEDTO = document.getElementById("spidto");
		var SPIDOSER = document.getElementById("spidoser");
		var SPIDONUM = document.getElementById("spidonum");

		if(!fieldvalidators.date(SPEEDDATE.value)){
			fields.push(["spiddate", 0])
		} else {
			fields.push(["spiddate", 1])
		}
		if(!fieldvalidators.time(SPEEDTIME.value)){
			fields.push(["spidtime", 0])
		} else {
			fields.push(["spidtime", 1])
		}
		if(!fieldvalidators.text(SPEEDPLACE.value)){
			fields.push(["spidplace", 0])
		} else {
			fields.push(["spidplace", 1])
		}
		if(!fieldvalidators.number(SPEEDFROM.value)){
			fields.push(["spidfrom", 0])
		} else {
			fields.push(["spidfrom", 1])
		}
		if(!fieldvalidators.number(SPEEDTO.value)){
			fields.push(["spidto", 0])
		} else {
			fields.push(["spidto", 1])
		}
		if(!fieldvalidators.number(SPIDOSER.value)){
			fields.push(["spidoser", 0])
		} else {
			fields.push(["spidoser", 1])
		}
		if(!fieldvalidators.number(SPIDONUM.value)){
			fields.push(["spidonum", 0])
		} else {
			fields.push(["spidonum", 1])
		}
		return fields;

	};


	//DONE
	this.znak = function(){
		var fields = [];
		var DATE = document.getElementById("znakdate");
		var TIME = document.getElementById("znaktime");
		var PLACE = document.getElementById("znakplace");

		if(!fieldvalidators.date(DATE.value)) {
			fields.push(["znakdate", 0])
		} else {
			fields.push(["znakdate", 1])
		}
		if(!fieldvalidators.time(TIME.value)){
			fields.push(["znaktime", 0])
		} else {
			fields.push(["znaktime", 1])
		}
		if(!fieldvalidators.text(PLACE.value)){
			fields.push(["znakplace", 0])
		} else {
			fields.push(["znakplace", 1])
		}
		return fields
	};

	//DONE
	this.geo = function(){
		var fields = [];
		var ID = document.getElementById("parkingid");
		var PADDR = document.getElementById('parkingaddr');
		var PDATE = document.getElementById("parkingdd");
		var PTIME = document.getElementById("parkingtt");
		var PFACT = document.getElementById("parkingwid");

		if(!fieldvalidators.number(ID.value)){
			fields.push(["parkingid", 0])
		} else {
			fields.push(["parkingid", 1])
		}
		if(!fieldvalidators.text(PADDR.value)){
			fields.push(["parkingaddr", 0])
		} else {
			fields.push(["parkingaddr", 1])
		}
		if(!fieldvalidators.date(PDATE.value)){
			fields.push(["parkingdd", 0])
		} else {
			fields.push(["parkingdd", 1])
		}
		if(!fieldvalidators.time(PTIME.value)){
			fields.push(["parkingtt", 0])
		} else {
			fields.push(["parkingtt", 1])
		}
		if(!fieldvalidators.number(PFACT.value)){
			fields.push(["parkingwid", 0])
		} else {
			fields.push(["parkingwid", 1])
		}
		return fields
	};

	//DONE
	this.raspoznanie = function(){
		var fields = [];
		var NUM = document.getElementById("photonomer");
		var PLACE = document.getElementById("mestodvizh");
		var SPEED = document.getElementById("speed");
		var OGR = document.getElementById("ogranich");
		var VMARK = document.getElementById('vinmodel');
		var VNUM = document.getElementById("vinnum");

		if(!fieldvalidators.tsnum(NUM.value)){
			fields.push(["photonomer", 0])
		} else {
			fields.push(["photonomer", 1])
		}
		if(!fieldvalidators.text(PLACE.value)){
			fields.push(["mestodvizh", 0])
		} else {
			fields.push(["mestodvizh", 1])
		}
		if(!fieldvalidators.speed(SPEED.value)){
			fields.push(["speed", 0])
		} else {
			fields.push(["speed", 1])
		}
		if(!fieldvalidators.speed(OGR.value)){
			fields.push(["ogranich", 0])
		} else {
			fields.push(["ogranich", 1])
		}
		if(!fieldvalidators.text(VMARK.value)){
			fields.push(["vinmodel", 0])
		} else {
			fields.push(["vinmodel", 1])
		}
		if(!fieldvalidators.tsnum(VNUM.value)){
			fields.push(["vinnum", 0])
		} else {
			fields.push(["vinnum", 1])
		}

		return fields
	};


	//DONE
	this.vremya = function(){
		let fields = [];
		let time = document.getElementById('time');
		let leavetime = document.getElementById('leavetime');
		let dopl = document.getElementById('dateoplata');
		let tfrom = document.getElementById('from');
		let tto = document.getElementById('to');
		let zone = document.getElementById('zone');
		if(!fieldvalidators.time(time.value)){
			fields.push(["time", 0])
		} else {
			fields.push(["time", 1])
		}
		if(!fieldvalidators.time(leavetime.value)){
			fields.push(["leavetime", 0])
		} else {
			fields.push(["leavetime", 1])
		}
		if(!fieldvalidators.date(dopl.value)){
			fields.push(["dateoplata", 0])
		} else {
			fields.push(["dateoplata", 1])
		}
		if(!fieldvalidators.time(tfrom.value)){
			fields.push(["from", 0])
		} else {
			fields.push(["from", 1])
		}
		if(!fieldvalidators.time(tto.value)){
			fields.push(["to", 0])
		} else {
			fields.push(["to", 1])
		}
		if(!fieldvalidators.text(zone.value)){
			fields.push(["zone", 0])
		} else {
			fields.push(["zone", 1])
		}
		return fields
	}


	//DONE
	this.rezident = function(){
		let fields = [];
		let reestr = document.getElementById("reestr");
		let rayon = document.getElementById("rayon");
		let padress = document.getElementById('parkadress');
		let pdate = document.getElementById('parkdate');

		if(!fieldvalidators.number(reestr.value)){
			fields.push(["reestr", 0])
		} else {
			fields.push(["reestr", 1])
		}
		if(!fieldvalidators.text(rayon.value)){
			fields.push(["rayon", 0])
		} else {
			fields.push(["rayon", 1])
		}
		if(!fieldvalidators.text(padress.value)){
			fields.push(["padress", 0])
		} else {
			fields.push(["padress", 1])
		}
		if(!fieldvalidators.date(pdate.value)){
			fields.push(["pdate", 0])
		} else {
			fields.push(["pdate", 1])
		}

		return fields
	}

	//DONE
	this.parking = function(){
		let fields = [];
		let oshnum = document.getElementById("oshnum");
		let paydate = document.getElementById("paydate");
		let sposob = document.getElementById("sposob")
		if(sposob.options[sposob.selectedIndex].text == "Как производилась оплата?"){
			fields.push(["sposob", 0])
		} else {
			fields.push(["sposob", 1])
		}
		if(!fieldvalidators.tsnum(oshnum.value)){
			fields.push(["oshnum", 0])
		} else {
			fields.push(["oshnum", 1])
		}
		if(!fieldvalidators.date(paydate.value)){
			fields.push(["paydate", 0])
		} else {
			fields.push(["paydate", 1])
		}

		return fields

	}


}); 



let fieldvalidators = new (function(){

	this.tsnum = function(num){
		var re = /[а-яa-z]\d{3}[а-яa-z]{2}\d{2,3}/;
		return re.test(num)
	}


	this.speed = function(speed){
		var re = /(\d{1,3})/;
		return re.test(speed)
	}

	this.number = function(num){
		return (!isNaN(num)) && (num >= 0) && (num != "")
	};

	this.email = function(email){
		var emailre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailre.test(email)
	};

	this.phone = function(phone){
		var reg =/^[\+]?[0-9]{1}[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{2}[\-]?[0-9]{2}$/;
		return reg.test(phone)
	};

	this.text = function(text) {
		return (text != "") && (text.length >= 3) && (isNaN(text))
	};
	this.date = function(date){ 
		var reg = /^(\d\d?)\.(\d\d?)\.(\d{4})$/;
		return reg.test(date)
	};
	this.time = function(time){ 
		var reg = /([0-2]{1}[0-9]{1})\:([0-5]{1}[0-9]{1})/;
		return reg.test(time);
	};


});


let warningdisplay = new(function(){
	let html = "";

	this.generate = function(warns) {
		if(warns.length>0){
			warns.forEach(function(elem){
			
			})
		}
	}





});