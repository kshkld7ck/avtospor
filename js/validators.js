let validator = new (function(){

	//DONE
	this.slide1 = function(){
		var fields = [];
		var val = document.getElementsByClassName("select-styled")[0];
		var FIO = document.getElementById("FIO");
		var SUM = document.getElementById("sum");
		var NUMPOST = document.getElementById("numpost");
		var MODEL = document.getElementById("model");
		var DATA = document.getElementById("date");
		var NUMTS = document.getElementById("numTS");
		if(val.innerHTML == "Что случилось?"){
			fields.push(["ss",0])
		}
		else {
			fields.push(["ss",1])
		}
		if(!fieldvalidators.text(FIO.value)) {
			fields.push(["FIO", 0, "введите свое <span>ФИО</span>"]);
		} else {
			fields.push(["FIO", 1]);	
		}
		if(!fieldvalidators.number(SUM.value)) {
			fields.push(["sum", 0, "введите корректную <span>сумму</span>"]);
		} else {
			fields.push(["sum", 1]);
		}
		if(NUMPOST.value == "" || NUMPOST.value.length <= 3) {
			fields.push(["numpost", 0, "введите данные в формате <span>1122233AA333</span>"]);
		} else {
			fields.push(["numpost", 1]);
		}
		if (!fieldvalidators.text(MODEL.value)){
			fields.push(["model", 0 , "введите <span>марку и модель</span> автомобиля"]);
		} else {
			fields.push(["model", 1]);
		}
		if (!fieldvalidators.date(DATA.value)) {
			fields.push(["date", 0, "введите дату в формате <span>12.10.2018</span>"]);
		} else {
			fields.push(["date", 1]);
		}
		if (!fieldvalidators.tsnum(NUMTS.value)) {
			fields.push(["numTS", 0, "введите номер ТС в формате <span>А111АА11(1)</span>"]);
		} else {
			fields.push(["numTS", 1]);
		}

		return fields;

	};

	//DONE
	this.dannie = function() {
		var fields = [];
		var STREET = document.getElementById("street");
		var HOME = document.getElementById("domnum");
		var PHONE = document.getElementById("phone");
		var EMAIL = document.getElementById("email");
		if(!fieldvalidators.email(EMAIL.value)) {
			fields.push(["email", 0, "введите email в формате <span>address@domain.ru</span>"]);
		} else {
			fields.push(["email", 1]);
		}
		if(!fieldvalidators.phone(PHONE.value)){
			fields.push(["phone", 0, "введите номер в формате <span>+7(000)000-00-00</span>"]);
		} else {
			fields.push(["phone", 1]);
		}
		if($(".adressblock").css("display") != "none" && ($("#city").val() == "" || !isNaN($("#city").val()))){
			fields.push(["city", 0], "введите название <span>города</span>");
		} else {
			fields.push(["city", 1]);
		}
		if($(".adressblock").css("display") != "none" && ($("#street").val() == "" || !isNaN($("#street").val()))){
			fields.push(["street", 0, "введите название <span>улицы</span>"]);
		} else {
			fields.push(["street", 1]);
		}
		if($(".adressblock").css("display") != "none" && ($("#domnum").val() == "")){
			fields.push(["domnum", 0, "введите номер <span>дома</span>"]);
		} else {
			fields.push(["domnum", 1]);
		}
		if($(".adressblock").css("display") != "none" && ($("#flat").val() == "" || isNaN($("#flat").val()))){
			fields.push(["flat", 0, "введите номер <span>квартиры/офиса</span>"]);
		} else {
			fields.push(["flat", 1]);
		}
		return fields
	};


	//TODO: FINISH THIS
	this.speed = function(){ 
		var fields = [];
		var SPEEDDATE = document.getElementById("spiddate");
		var SPEEDTIME = document.getElementById("spidtime");
		var SPEEDPLACE = document.getElementById("spidplace");
		var SPEEDFT = document.getElementById("spidft").value.split("-");
		var SPEEDOSAGO = document.getElementById("spidosago").value.split(" ");
		var SPIDUPRAV = document.getElementById("spiduprav");




		if(!fieldvalidators.date(SPEEDDATE.value)){
			fields.push(["spiddate", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["spiddate", 1])
		}
		if(!fieldvalidators.time(SPEEDTIME.value)){
			fields.push(["spidtime", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["spidtime", 1])
		}
		if(!fieldvalidators.text(SPEEDPLACE.value)){
			fields.push(["spidplace", 0, "введите корректный <span>адрес</span>"])
		} else {
			fields.push(["spidplace", 1])
		}

		if(SPEEDFT.length < 2 || !fieldvalidators.number(SPEEDFT[0])
			|| !fieldvalidators.number(SPEEDFT[1])){
			fields.push(["spidft", 0, "введите диапазон в формате <span>11-22</span>"])
		} else {
			fields.push(["spidft", 1])
		}

		if(SPEEDOSAGO.length < 2 || !fieldvalidators.text(SPEEDOSAGO[0]) 
			|| !fieldvalidators.number(SPEEDOSAGO[1])
			|| SPEEDOSAGO[1].length < 10
			|| SPEEDOSAGO[0].length < 3){
			fields.push(["spidosago", 0, "введите номер ОСАГО<span>(3 буквы и 10 цифр)</span>"])
		} else {
			fields.push(["spidosago", 1])
		}

		if(!fieldvalidators.text(SPIDUPRAV.value)){
			fields.push(["spiduprav", 0, "введите корректное <span>ФИО</span>"])
		} else {
			fields.push(["spiduprav", 1])
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
			fields.push(["znakdate", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["znakdate", 1])
		}
		if(!fieldvalidators.time(TIME.value)){
			fields.push(["znaktime", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["znaktime", 1])
		}
		if(!fieldvalidators.text(PLACE.value)){
			fields.push(["znakplace", 0, "введите корректный <span>адрес</span>"])
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
			fields.push(["parkingid", 0, "введите корректный <span>номер парковки</span>"])
		} else {
			fields.push(["parkingid", 1])
		}
		if(!fieldvalidators.text(PADDR.value)){
			fields.push(["parkingaddr", 0, "введите корректный <span>адрес</span>"])
		} else {
			fields.push(["parkingaddr", 1])
		}
		if(!fieldvalidators.date(PDATE.value)){
			fields.push(["parkingdd", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["parkingdd", 1])
		}
		if(!fieldvalidators.time(PTIME.value)){
			fields.push(["parkingtt", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["parkingtt", 1])
		}
		if(!fieldvalidators.number(PFACT.value)){
			fields.push(["parkingwid", 0, "введите корректный <span>номер парковки</span>"])
		} else {
			fields.push(["parkingwid", 1])
		}
		return fields
	};

	//DONE
	this.raspoznanie = function(){
		var fields = [];
		var PLACE = document.getElementById("mestodvizh");
		var SPEED = document.getElementById("speed");
		var OGR = document.getElementById("ogranich");
		var VMARK = document.getElementById('vinmodel');
		var VNUM = document.getElementById("vinnum");

		if(!fieldvalidators.text(PLACE.value)){
			fields.push(["mestodvizh", 0, "введите корректный <span>адрес</span>"])
		} else {
			fields.push(["mestodvizh", 1])
		}
		if(!fieldvalidators.speed(SPEED.value)){
			fields.push(["speed", 0, "введите корректную <span>скорость</span>"])
		} else {
			fields.push(["speed", 1])
		}
		if(!fieldvalidators.speed(OGR.value)){
			fields.push(["ogranich", 0, "введите корректную <span>скорость</span>"])
		} else {
			fields.push(["ogranich", 1])
		}
		if(!fieldvalidators.text(VMARK.value)){
			fields.push(["vinmodel", 0, "введите <span>марку и модель</span> автомобиля"])
		} else {
			fields.push(["vinmodel", 1])
		}
		if(!fieldvalidators.tsnum(VNUM.value)){
			fields.push(["vinnum", 0, "введите номер ТС в формате <span>А111АА11(1)</span>"])
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
			fields.push(["time", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["time", 1])
		}
		if(!fieldvalidators.time(leavetime.value)){
			fields.push(["leavetime", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["leavetime", 1])
		}
		if(!fieldvalidators.date(dopl.value)){
			fields.push(["dateoplata", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["dateoplata", 1])
		}
		if(!fieldvalidators.time(tfrom.value)){
			fields.push(["from", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["from", 1])
		}
		if(!fieldvalidators.time(tto.value)){
			fields.push(["to", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["to", 1])
		}
		if(!fieldvalidators.text(zone.value)){
			fields.push(["zone", 0, "введите корректный <span>адрес</span>"])
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
		let fr = document.getElementById('parkfr');
		let to = document.getElementById('parkto');

		if(!fieldvalidators.time(fr.value)){
			fields.push(["parkfr", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["parkfr", 1])
		}
		if(!fieldvalidators.time(to.value)){
			fields.push(["parkto", 0, "введите время в формате <span>11:11</span>"])
		} else {
			fields.push(["parkto", 1])
		}

		if(reestr.value == "" || reestr.value.length <= 3){
			fields.push(["reestr", 0, "введите корректный <span>номер записи в реестр</span>"])
		} else {
			fields.push(["reestr", 1])
		}
		if(!fieldvalidators.text(rayon.value)){
			fields.push(["rayon", 0, "введите корректный <span>район</span>"])
		} else {
			fields.push(["rayon", 1])
		}
		if(!fieldvalidators.text(padress.value)){
			fields.push(["parkadress", 0, "введите корректный <span>адрес</span>"])
		} else {
			fields.push(["parkadress", 1])
		}
		if(!fieldvalidators.date(pdate.value)){
			fields.push(["parkdate", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["parkdate", 1])
		}

		return fields
	}

	//DONE
	this.parking = function(){
		let fields = [];
		let oshnum = document.getElementById("oshnum");
		let paydate = document.getElementById("paydate");
		let sposob = document.getElementById("sposob");
		var val = document.getElementsByClassName("select-styled-2")[0];
		if(val.innerHTML == "Как производилась оплата?"){
			fields.push(["ss2", 0])
		} else {
			fields.push(["ss2", 1])
		}
		if(!fieldvalidators.tsnum(oshnum.value)){
			fields.push(["oshnum", 0, "введите номер ТС в формате <span>А111АА11(1)</span>"])
		} else {
			fields.push(["oshnum", 1])
		}
		if(!fieldvalidators.date(paydate.value)){
			fields.push(["paydate", 0, "введите дату в формате <span>12.08.2018</span>"])
		} else {
			fields.push(["paydate", 1])
		}

		return fields

	}


}); 



let fieldvalidators = new (function(){

	this.tsnum = function(num){
		var re = /[а-яa-zА-ЯA-Z]\d{3}[а-яa-zA-ZА-Я]{2}\d{2,3}/;
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
		return reg.test(date) && (date.length>2)
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