let frameed = new (function(){
	//DONE
	this.parking = function(){
		var frame = document.getElementById("docframe");
				$("#oshnum").focus(function(){
					$(".sposobd").removeClass("selected");
					$(".sposobd").css("color", "#707070");
					$(".line").css("display", "none");
					$(".inblock").css("display", "none");

				})
				$("#oshnum").keyup(function(){
					var pr = document.getElementsByClassName("parking")[0];
					var felem = pr.getElementsByClassName("wrongnumd")[0];
					var block = pr.getElementsByClassName("inblock")[0];
					if($("#oshnum").val() != ""){
						block.innerHTML = $("#oshnum").val();
					}
					block.style.display= "block";
					felem.style.color = "#8ad668";
					felem.innerHTML = "a000aa000";
					drawLine(felem, block, $(".line"))
					felem.classList.add("selected");
				})
				$("#oshnum").blur(function(){
					var pr = document.getElementsByClassName("parking")[0];
					var felem = pr.getElementsByClassName("wrongnumd")[0];
					var block = pr.getElementsByClassName("inblock")[0];
					if(block.innerHTML != ""){
						felem.innerHTML = $("#oshnum").val();
					}
					else {
						felem.innerHTML = "$OSHNUM";
					}
					$(".line").css("display", "none");
					felem.style.color = "#000";
					block.style.display= "none";
					felem.classList.remove("selected");
				})
				$("#paydate").focus(function(){
					$(".sposobd").removeClass("selected");
					$(".sposobd").css("color", "#707070");
					$(".line").css("display", "none");
					$(".inblock").css("display", "none");

				})
				$("#paydate").keyup(function(){
					var pr = document.getElementsByClassName("parking")[0];
					var felem = pr.getElementsByClassName("padydated")[0];
					var block = pr.getElementsByClassName("inblock")[0];
					block.style.display= "block";
					if($("#paydate").val() != ""){
						block.innerHTML = $("#paydate").val();
					}
					else {
						felem.innerHTML = "$PAYDATE";
						block.innerHTML = "&nbsp;"
					}
					felem.style.color = "#8ad668";
					felem.innerHTML = "12.10.2010";
					drawLine(felem, block, $(".line"))
					felem.classList.add("selected");
				})
				$("#paydate").blur(function(){
					var pr = document.getElementsByClassName("parking")[0];
					var felem = pr.getElementsByClassName("padydated")[0];
					var block = pr.getElementsByClassName("inblock")[0];
					if(block.innerHTML != ""){
						felem.innerHTML = $("#paydate").val();
					}
					else {
						felem.innerHTML = "$PAYDATE";
					}
					$(".line").css("display", "none");
					felem.style.color = "#000";
					block.style.display= "none";
					felem.classList.remove("selected");
				})
				$(".select-options-2 li").click(function(){
					var pr = document.getElementsByClassName("parking")[0];
					var felem = pr.getElementsByClassName("sposobd")[0];
					var block = pr.getElementsByClassName("inblock")[0];
					block.style.display= "block";
					block.innerHTML = $(this).html();
					felem.innerHTML = $(this).html();
					drawLine(felem, block, $(".line"))
					felem.classList.add("selected");
					felem.style.color = "#8ad668"
				//	$(".line").toggle(250);
				})
				$(document).click(function(){
					$(".sposobd").removeClass("selected");
					$(".sposobd").css("color", "#707070");
					$(".line").css("display", "none");
					$(".inblock").css("display", "none");
				})


				
		
	}
	//DONE
	this.dannie = function(){
		$("#street").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#street").val() != ""){
				block.innerHTML = $("#street").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "qweqweqweqweqeqwqw";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#street").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = "г." + $("#city").val() + ", ул." + $("#street").val() + ", д." + $("#domnum").val();
			}
			else {
				felem.innerHTML = "$ADRESS";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
		$("#domnum").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#domnum").val() != ""){
				block.innerHTML = $("#domnum").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "qweqweqweqweqeqwqw";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#domnum").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = "г." + $("#city").val() + ", ул." + $("#street").val() + ", д." + $("#domnum").val();
			}
			else {
				felem.innerHTML = "$ADRESS";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
			$("#city").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#city").val() != ""){
				block.innerHTML = $("#city").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "qweqweqweqweqeqwqw";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#city").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = "г." + $("#city").val() + ", ул." + $("#street").val() + ", д." + $("#domnum").val();
			}
			else {
				felem.innerHTML = "$ADRESS";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
			$("#flat").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#flat").val() != ""){
				block.innerHTML = $("#flat").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "qweqweqweqweqeqwqw";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#flat").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("adressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = "г." + $("#city").val() + ", ул." + $("#street").val() + ", д." + $("#domnum").val();
			}
			else {
				felem.innerHTML = "$ADRESS";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#phone").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("phoned")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#phone").val() != ""){
				block.innerHTML = $("#phone").val();
			}
			var block = document.getElementsByClassName("inblock")[0];
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "+7(999)999-99-99";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#phone").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("phoned")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#phone").val();
			}
			else {
				felem.innerHTML = "$PHONE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#email").keyup(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("emaild")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#email").val() != ""){
				block.innerHTML = $("#email").val();
			}
			var block = document.getElementsByClassName("inblock")[0];
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#email").blur(function(){
			var pr = document.getElementsByClassName("dannie")[0];
			var felem = pr.getElementsByClassName("emaild")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#email").val();
			}
			else {
				felem.innerHTML = "$EMAIL";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

	}

	//DONE
	this.rezident = function(){
		$("#reestr").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("reestrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#reestr").val() != ""){
				block.innerHTML = $("#reestr").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#reestr").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("reestrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#reestr").val();
			}
			else {
				felem.innerHTML = "$REESTR";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#rayon").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("rayond")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#rayon").val() != ""){
				block.innerHTML = $("#rayon").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#rayon").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("rayond")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#rayon").val();
			}
			else {
				felem.innerHTML = "$RAYON";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkadress").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkadressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkadress").val() != ""){
				block.innerHTML = $("#parkadress").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkadress").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkadressd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkadress").val();
			}
			else {
				felem.innerHTML = "$PARKADRESS";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkdate").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkdated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkdate").val() != ""){
				block.innerHTML = $("#parkdate").val();
			}
			felem.innerHTML = "12.12.2010";
			felem.style.color = "#8ad668";
			block.style.display= "block";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkdate").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkdated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkdate").val();
			}
			else {
				felem.innerHTML = "$PARKDATE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkfr").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkfrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkfr").val() != ""){
				block.innerHTML = $("#parkfr").val();
			}
			felem.innerHTML = "22:22";
			felem.style.color = "#8ad668";
			block.style.display= "block";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkfr").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parkfrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkfr").val();
			}
			else {
				felem.innerHTML = "$PARKFR";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkto").keyup(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parktod")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkto").val() != ""){
				block.innerHTML = $("#parkto").val();
			}
			felem.innerHTML = "22:22";
			felem.style.color = "#8ad668";
			block.style.display= "block";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkto").blur(function(){
			var pr = document.getElementsByClassName("rezident")[0];
			var felem = pr.getElementsByClassName("parktod")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkto").val();
			}
			else {
				felem.innerHTML = "$PARKTO";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
	}

	//DONE
	this.vremya = function(){
		$("#time").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("timed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#time").val() != ""){
				block.innerHTML = $("#time").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "24:59";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#time").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("timed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#time").val();
			}
			else {
				felem.innerHTML = "$TIME";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#leavetime").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("leavetimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#leavetime").val() != ""){
				block.innerHTML = $("#leavetime").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "24:59";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#leavetime").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("leavetimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#time").val();
			}
			else {
				felem.innerHTML = "$LEAVETIME";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#dateoplata").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("dataoplatad")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#dateoplata").val() != ""){
				block.innerHTML = $("#dateoplata").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "12.12.2010";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#dateoplata").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("dataoplatad")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#dateoplata").val();
			}
			else {
				felem.innerHTML = "$DATEOPLATA";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#from").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("fromd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#from").val() != ""){
				block.innerHTML = $("#from").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "23:59";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#from").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("fromd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#from").val();
			}
			else {
				felem.innerHTML = "$FROM";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})


		$("#to").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("tod")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#to").val() != ""){
				block.innerHTML = $("#to").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "23:59";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#to").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("tod")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#to").val();
			}
			else {
				felem.innerHTML = "$TO";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#zone").keyup(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("zoned")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#to").val() != ""){
				block.innerHTML = $("#zone").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#zone").blur(function(){
			var pr = document.getElementsByClassName("vremya")[0];
			var felem = pr.getElementsByClassName("zoned")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#zone").val();
			}
			else {
				felem.innerHTML = "$ZONE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})


	}
	//DONE
	this.znak = function(){
		$("#znakdate").keyup(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znakdated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#znakdate").val() != ""){
				block.innerHTML = $("#znakdate").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "12.12.2010";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})

		$("#znakdate").blur(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znakdated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#znakdate").val();
			}
			else {
				felem.innerHTML = "$ZNAKDATE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#znaktime").keyup(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znaktimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#znaktime").val() != ""){
				block.innerHTML = $("#znaktime").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "23:59";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})

		$("#znaktime").blur(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znaktimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#znaktime").val();
			}
			else {
				felem.innerHTML = "$ZNAKTIME";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#znakplace").keyup(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znakplaced")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#znaktime").val() != ""){
				block.innerHTML = $("#znakplace").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})

		$("#znakplace").blur(function(){
			var pr = document.getElementsByClassName("znak")[0];
			var felem = pr.getElementsByClassName("znakplaced")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#znakplace").val();
			}
			else {
				felem.innerHTML = "$ZNAKPLACE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

	}

	//DONE
	this.raspoznanie = function(){

		$("#mestodvizh").keyup(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("mestodvizhd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#mestodvizh").val() != ""){
				block.innerHTML = $("#mestodvizh").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#mestodvizh").blur(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("mestodvizhd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#mestodvizh").val();
			}
			else {
				felem.innerHTML = "$MESTODVIZH";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#speed").keyup(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("speedd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#speed").val() != ""){
				block.innerHTML = $("#speed").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "123";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#speed").blur(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("speedd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#speed").val();
			}
			else {
				felem.innerHTML = "$SPEED";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#ogranich").keyup(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("ogranichd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#ogranich").val() != ""){
				block.innerHTML = $("#ogranich").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "123";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#ogranich").blur(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("ogranichd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#ogranich").val();
			}
			else {
				felem.innerHTML = "$OGRANICH";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
		$("#vinnum").keyup(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("vinnumd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#vinnum").val() != ""){
				block.innerHTML = $("#vinnum").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "a222aa222";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#vinnum").blur(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("vinnumd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#vinnum").val();
			}
			else {
				felem.innerHTML = "$VINNUM";
			}

			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})
		$("#vinmodel").keyup(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("vinmodeld")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#vinmodel").val() != ""){
				block.innerHTML = $("#vinmodel").val();
			}
			block.style.display= "block";
			felem.innerHTML = "1111111111";
			felem.style.color = "#8ad668";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#vinmodel").blur(function(){
			var pr = document.getElementsByClassName("raspoznanie")[0];
			var felem = pr.getElementsByClassName("vinmodeld")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#vinmodel").val();
			}
			else {
				felem.innerHTML = "$VINMODEL";
			}

			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

	}
	//DONE
	this.geo = function(){

		$("#parkingid").keyup(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingidd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkingid").val() != ""){
				block.innerHTML = $("#parkingid").val();
			}
			block.style.display= "block";
			felem.innerHTML = "1111111111";
			felem.style.color = "#8ad668";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkingid").blur(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingidd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#photonomer").val();
			}
			else {
				felem.innerHTML = "$PARKINGID";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkingaddr").keyup(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingaddrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkingaddr").val() != ""){
				block.innerHTML = $("#parkingaddr").val();
			}
			felem.innerHTML = "1111111111";
			block.style.display= "block";
			felem.style.color = "#8ad668";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkingaddr").blur(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingaddrd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkingaddr").val();
			}
			else {
				felem.innerHTML = "$PARKINGADDR";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkingdd").keyup(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingddd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkingdd").val() != ""){
				block.innerHTML = $("#parkingdd").val();
			}
			block.style.display= "block";
			felem.innerHTML = "12.10.2010";
			felem.style.color = "#8ad668";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkingdd").blur(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingddd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkingdd").val();
			}
			else {
				felem.innerHTML = "$PARKINGDD";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkingtt").keyup(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingttd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkingtt").val() != ""){
				block.innerHTML = $("#parkingtt").val();
			}
			block.style.display= "block";
			felem.innerHTML = "23:59";
			felem.style.color = "#8ad668";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkingtt").blur(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingttd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkingtt").val();
			}
			else {
				felem.innerHTML = "$PARKINGTT";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#parkingwid").keyup(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingwidd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#parkingwid").val() != ""){
				block.innerHTML = $("#parkingwid").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#parkingwid").blur(function(){
			var pr = document.getElementsByClassName("geo")[0];
			var felem = pr.getElementsByClassName("parkingwiddd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#parkingwid").val();
			}
			else {
				felem.innerHTML = "$PARKINGWID";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

	}

	//TODO: SPEED {FORM FIRST}

	this.spid = function() {
		$("#spiddate").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spiddated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spiddate").val() != ""){
				block.innerHTML = $("#spiddate").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "22.22.2012";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spiddate").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spiddated")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spiddate").val();
			}
			else {
				felem.innerHTML = "$SPIDDATE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#spidtime").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidtimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spidtime").val() != ""){
				block.innerHTML = $("#spidtime").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "22:22";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spidtime").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidtimed")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spidtime").val();
			}
			else {
				felem.innerHTML = "$SPIDTIME";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#spidplace").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidplaced")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spidplace").val() != ""){
				block.innerHTML = $("#spidplace").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "11111111111111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spidplace").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidplaced")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spidplace").val();
			}
			else {
				felem.innerHTML = "$SPIDPLACE";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

		$("#spidft").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidfromd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spidft").val() != ""){
				block.innerHTML = $("#spidft").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "123";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spidft").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidfromd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spidft").val();
			}
			else {
				felem.innerHTML = "$SPIDFROM";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})



		$("#spidosago").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidoserd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spidoser").val() != ""){
				block.innerHTML = $("#spidosago").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "1231231111";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spidosago").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidoserd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spidosago").val();
			}
			else {
				felem.innerHTML = "$SPIDOSER";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})


		$("#spiduprav").keyup(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidupravd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if($("#spiduprav").val() != ""){
				block.innerHTML = $("#spiduprav").val();
			}
			block.style.display= "block";
			felem.style.color = "#8ad668";
			felem.innerHTML = "123123222222222222222222";
			drawLine(felem, block, $(".line"))
			felem.classList.add("selected");
		})
		$("#spiduprav").blur(function(){
			var pr = document.getElementsByClassName("spid")[0];
			var felem = pr.getElementsByClassName("spidupravd")[0];
			var block = pr.getElementsByClassName("inblock")[0];
			if(block.innerHTML != ""){
				felem.innerHTML = $("#spiduprav").val();
			}
			else {
				felem.innerHTML = "$SPIDUPRAV";
			}
			$(".line").css("display", "none");
			felem.style.color = "#000";
			block.style.display= "none";
			felem.classList.remove("selected");
		})

	}


})
								

function lineDistance(x, y, x0, y0){
    return Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));
};

function drawLine(blockf, blockd, line) {
	var d = document.body.getBoundingClientRect();
  var pointA = blockf.getBoundingClientRect();// a.left + iframe.a.left
  var pointB = blockd.getBoundingClientRect();
  var topA = pointA.top - d.top; 
  var topB = pointB.bottom - d.top - 3;
  var angle = Math.atan2((pointB.top + pointB.height) - pointA.top-8, pointB.left - (pointA.left + pointA.width)) * 180 / Math.PI;
  var distance = lineDistance(pointA.left+pointA.width, pointA.top, pointB.left, pointB.top+pointB.height);
  
  // Set Angle
  $(line).css("display", "block");
  $(line).css('transform', 'rotate(' + (angle+1) + 'deg)');

  // Set Width
  $(line).css('width', (distance+8) + 'px');
                  
  // Set Position
  $(line).css('position', 'absolute');
 //if(pointB.left < pointA.left + pointA.width) {
  //$(line).offset({top: topA-45, left: pointB.left});
  //} else {
    $(line).offset({top: topB, left: pointA.left + pointA.width-2});
 // }
}
