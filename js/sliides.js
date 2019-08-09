function encode(text, key) {
    var j=0;
    var str = new String();
    key = utf8_encode(key);
    text = utf8_encode(text);
    for (var i=0; i<text.length; i++) {
        var a = text.charCodeAt(i);
        var b = key.charCodeAt(j);
        var c = a + b;
        if (c > 255) c -= 255;
        str += String.fromCharCode(c);
        if (j == key.length-1) j=0; else j++;
    }
    return window.btoa(str);
}

function utf8_encode(text) {
    var str = new String();
    for (var i=0; i<text.length; i++) {
        if (text.charCodeAt(i) > 255) {
            str += String.fromCharCode(text.charCodeAt(i)-848);
        } else {
            str += text.charAt(i);
        }
    }
    return str;
}




let slides = new (function(){
	var data;
	var link = document.getElementById("doc");

this.changeSlide = function(sl){
	
	data = {
		FIO: document.getElementById("FIO").value,
		model: document.getElementById("model").value,
		numTS: document.getElementById("numTS").value,
		sum: document.getElementById("sum").value,
		date: document.getElementById("date").value,
		numpost: document.getElementById("numpost").value
	};
	switch (sl){
		case "Неверно указан номер ТС в постановлении":
			$(".slide1").hide();
			$(".parking").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 1;
			data.cur = 2;
			data.prev = 1;
			break;
		case "Я продал этот автомобиль":
			$(".slide1").hide();
			$("#dannie").show();
			$(".one").removeClass("activeli");
			$(".three").addClass("activeli");
			data.type = 2;
			data.prev = 1;
			break;
		case "Это точно не мой автомобиль":
			$(".slide1").hide();
			$("#dannie").show();
			$(".one").removeClass("activeli");
			$(".three").addClass("activeli");
			data.type = 3;
			data.prev =1;
			break;
		case "Я парковался в месте жительства по парковочному разрешению резидента с 20 до 08":
			$(".slide1").hide();
			$(".rezident").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 4;
			data.cur = 2;
			data.prev = 1;
			break;
		case "Я выехал с платной парковки вовремя (в оплаченное время)":
			$(".slide1").hide();
			$(".vremya").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 5;
			data.prev = 1;
			break;
		case "На фотографии в постановлении номер не моей машины":
			$(".slide1").hide();
			$(".raspoznanie").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 6;
			data.prev = 1;
			break;
		case "Приложение неверно определило геолокацию и я оплатил другое парковочное место":
			$(".slide1").hide();
			$(".geo").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 7;
			data.prev = 1;
			break;
		case "Там не было знака «Стоянка запрещена»":
			$(".slide1").hide();
			$(".znak").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 8;
			data.prev = 1;
			break;
		case "За рулём был не я":
			$(".slide1").hide();
			$(".spid").show();
			$(".one").removeClass("activeli");
			$(".two").addClass("activeli");
			data.type = 9;
			data.prev = 1;
			break;
		default:
			break;
		}
	localStorage.removeItem("dtype");
	localStorage.setItem("dtype", data.type);
	docview.doc();
};

this.processtoDoc = function() {
	var val = validator.dannie();
	// TARGETS: 1 - AMPP, 2 - MADI, 3 - GIBDD
	let targets = {"1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 3, "7":1, "8":2, "9":3};
	// $.cookie("target", targets[""+data.type+""], {
	// 	expires: 30
	// });
	let fd = new FormData();
	fd.append("mail", document.getElementById("email").value);
	let upload_link = "http://advoservice.ru/avtospor#";
	let link_hash =  document.getElementById("email").value + "|" + data.FIO.split(" ").join("_") + "|" + targets[""+data.type+""] + "";
	console.log(link_hash);
	// upload_link += encode(link_hash, "avtospor_amulex");
	// console.log(upload_link);
	// fd.append();



	var fl = 1;
	val.forEach(function(el){
		if(el[1]==0){
			$("#" + el[0]).attr("data-err", 1);
			$("#" + el[0]).attr("data-text", el[2]);
			$("#" + el[0]).css("border", "1px solid #cc0000");
			$("#" + el[0]).css("trasition", "all 1s");
			$(".mbtn").css("background-color", "#cc0000");
			$(".points .activeli").addClass("reddot");
			fl=0;
		}
		else {
			$("#" + el[0]).attr("data-err", 0);
			$("#" + el[0]).css("border", "1px solid #707070");
		}
	})

	if(fl == 1){



		// fetch("mailend.php", {
		// method: "POST",
		// body: fd,
		// contentType: false,
		// processData: false
		// });
	
		$(".zag1 h1").html("Заявка заполнена");
		$(".points .activeli").removeClass("reddot");
		if ($(".left_ch input[type='checkbox']").prop("checked") == true){
			data.return = 1;
		}
		else {
			data.return = 2;
		}
		data.phone = document.getElementById("phone").value;
		if(document.getElementById("city").value != ""){
		data.adress = "г." + document.getElementById("city").value + ", ул." + document.getElementById("street").value + ", д." + document.getElementById("domnum").value + ", кв." + document.getElementById("flat").value;
		} else {
			data.adress = "";
		}
		data.email = document.getElementById("email").value;
		switch(data.type){
			case 1:
				data.wrongnum = document.getElementById("oshnum").value;
				data.paydate = document.getElementById("paydate").value;
				var sel = document.getElementById("sposob").value;
				switch(sel){
					case "sms":
					  data.sposob = "SMS";
					  break;
					case "park":
					  data.sposob = "паркомата";
					  break;
					case "app":
					  data.sposob = "приложения";
					  break;
					default:
					  break;
				};
				docs.getDoc(data);
				$(".parking").hide();
				$("#dannie").hide();
				$(".parking_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;
				break;
			case 2:
				docs.getDoc(data);
				$("#dannie").hide();
				$(".prodazha_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;
				break;
			case 3:
				docs.getDoc(data);
				$("#dannie").hide();
				$(".nesobs_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;
				break;
			case 4:
				data.reestr = document.getElementById("reestr").value;
				data.rayon = document.getElementById("rayon").value;
				data.parkadress = document.getElementById("parkadress").value;
				data.parkdate = document.getElementById("parkdate").value;
				data.parkfr = document.getElementById("parkfr").value;
				data.parkto = document.getElementById("parkto").value;
				docs.getDoc(data);
				$(".rezident").hide();
				$("#dannie").hide();
				$(".resident_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;break;
			case 5:
				data.from = document.getElementById("from").value;
				data.to = document.getElementById("to").value;
				data.time = document.getElementById("time").value;
				data.leavetime = document.getElementById("leavetime").value;
				data.dateoplata = document.getElementById("dateoplata").value;
				data.zone = document.getElementById("zone").value;
				docs.getDoc(data);
				$(".vremya").hide();
				$("#dannie").hide();
				$(".vremya_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;break;
			case 6:
				
					data.speed = document.getElementById("speed").value;
					data.ogranich = document.getElementById("ogranich").value;
					data.vinmodel = document.getElementById("vinmodel").value;
					data.vinnum = document.getElementById("vinnum").value;
					data.mestodvizh = document.getElementById("mestodvizh").value;
					docs.getDoc(data);
					$(".raspoznanie").hide();
					$("#dannie").hide();
					$(".raspoznanie_doc").show();
					$(".three").removeClass("activeli");
					$(".four").addClass("activeli");
					data.prev = 3;
				break;
			case 7:
				data.parkingid = document.getElementById("parkingid").value;
				data.parkingaddr = document.getElementById("parkingaddr").value;
				data.parkingwid = document.getElementById("parkingwid").value;
				data.parkingdd = document.getElementById("parkingdd").value;
				data.parkingtt = document.getElementById("parkingtt").value;
				docs.getDoc(data);
				$(".geo").hide();
				$("#dannie").hide();
				$(".geo_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;break;
			case 8:
				data.znakdate = document.getElementById("znakdate").value;
				data.znaktime = document.getElementById("znaktime").value;
				data.znakplace = document.getElementById("znakplace").value;
				docs.getDoc(data);
				$(".znak").hide();
				$("#dannie").hide();
				$(".znak_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;break;
			case 9:
				data.spiddate = document.getElementById("spiddate").value;
				data.spidtime = document.getElementById("spidtime").value;
				data.spidplace = document.getElementById("spidplace").value;
				data.spidft = document.getElementById("spidft").value.split("-");
				data.spidosago = document.getElementById("spidosago").value.split(" ");
				data.spiduprav = document.getElementById("spiduprav").value;
				docs.getDoc(data);
				$(".spid").hide();
				$("#dannie").hide();
				$(".spid_doc").show();
				$(".three").removeClass("activeli");
				$(".four").addClass("activeli");
				data.prev = 3;break;
			default:
				break;

			};
			

			setTimeout(sendToMail, 1000);

			function sendToMail() {
				$.ajax({
					type: "POST", //Метод отправки
					url: "mail.php",
					data: {
						phone: $('#phone').val(),
						mail: $('#email').val()
					},
	
					success: function(res) {
						console.log(res)
						

//
$.ajax({
	type: "POST", //Метод отправки
	url: "mail.php",
	data: {
		name: $('#FIO').val(),
		phone: $('#phone').val(),
		mail: 'nalog@amulex.ru',
		mailto: 'nalog@amulex.ru'
	},

	success: function(res) {
		console.log(res)
		console.log($('#FIO').val())
		
	}
})
						//
					}
				})
			}
		$(".mbtn").css("background-color", "#8ad668");
		}
	
	};

this.backSlide = function(btn){
	$(".points .activeli").removeClass("reddot");
	$(".mbtn").css("background-color", "#8ad668");
	switch(data.type){
		case 1:
			$(btn).parent().parent().parent().parent().hide();
			
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					
					data.prev = 0;
					break;
				case 2:
					$(".parking").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 4:
			$(btn).parent().parent().parent().parent().hide();
			
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".rezident").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}	
			break;
		case 5:
			$(btn).parent().parent().parent().parent().hide();
		
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".vremya").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 6:
			$(btn).parent().parent().parent().parent().hide();
		
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".raspoznanie").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 7:
			$(btn).parent().parent().parent().parent().hide();
		
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".geo").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 8:
			$(btn).parent().parent().parent().parent().hide();

			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".znak").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 9:
			$(btn).parent().parent().parent().parent().hide();
	
			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".two").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".spid").show();
					$(".three").removeClass("activeli");
					$(".two").addClass("activeli");
					data.prev = 1;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}
			break;
		case 2:
			$(btn).parent().parent().parent().parent().hide();

			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".three").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".slide1").show();
					$(".three").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}	
			break;
			case 3:
			$(btn).parent().parent().parent().parent().hide();

			switch(data.prev){
				case 1:
					$(".slide1").show();
					$(".three").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 2:
					$(".slide1").show();
					$(".three").removeClass("activeli");
					$(".one").addClass("activeli");
					data.prev = 0;
					break;
				case 3:
					$("#dannie").show();
					$(".four").removeClass("activeli");
					$(".three").addClass("activeli");
					data.prev = 2;
					break;
				default:
					break;
			}	
			break;
		default:
			break;
	}
};

this.processtodata = function(btn){
		var elem = $(btn).parent().parent().parent().parent().get(0);
		var cls = elem.classList[2];
		var res;
		switch(cls){
			case "znak":
				res = validator.znak();
				break;
			case "geo":
				res= validator.geo();
				break;
			case "raspoznanie":
				res = validator.raspoznanie();
				break;
			case "vremya":
				res = validator.vremya();
				break;
			case "rezident":
				res = validator.rezident();
				break;
			case "spid":
				res = validator.speed();
				break;
			case "parking":
				res = validator.parking();
				break;
			default:
				res = true;
				break;
		}
		console.log(res);
		var fl = 1;
		res.forEach(function(el){
			if(el[1]==0){
				$("#" + el[0]).attr("data-err", 1);
				$("#" + el[0]).attr("data-text", el[2]);
				$("#" + el[0]).css("border", "1px solid #cc0000");
				$("#" + el[0]).css("trasition", "all 1s");
				$(".mbtn").css("background-color", "#cc0000");
				$(".points .activeli").addClass("reddot");

				fl=0;
			}
			else {
				$("#" + el[0]).attr("data-err", 0);
				$("#" + el[0]).css("border", "1px solid #707070");

			}

		})
		if (fl == 1){
				
				$(".points .activeli").removeClass("reddot");
				$(btn).parent().parent().parent().parent().hide();
				$("#dannie").show();
				$(".two").removeClass("activeli");
				$(".three").addClass("activeli");
				data.prev = 2;
				$(".mbtn").css("background-color", "#8ad668");

		}


}






});