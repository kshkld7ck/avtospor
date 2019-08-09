let masks = new (function(){
	var masks = [];

	this.resetMasks = function(){
		masks.forEach((e)=>{
			e.masked.reset();
		})
	}

	this.sdate = function(elem){
		var mask = 0;
		var maskOptions = {

		mask: Date,
		min: new Date(2017, 0, 1),
		max: new Date(2020, 0, 1),
		lazy: false

		};
		masks.push(new IMask(elem, maskOptions));
	}

	this.hdate = function(elem){
		var mask = 0;
		var maskOptions = {

		mask: Date,
		min: new Date(2017, 0, 1),
		max: new Date(2020, 0, 1),
		lazy: true

		};
		masks.push(new IMask(elem, maskOptions));
	}


	this.sphone = function(elem){

		var optphone = {
				mask: '+{7}(000)000-00-00',
				lazy: false,
				placeholderChar: "_"
		};
		masks.push(new IMask(elem, optphone));
	}

	this.hphone = function(elem){
		var optphone = {
			mask: '+{7}(000)000-00-00',
			lazy: true
		};
		masks.push(new IMask(elem, optphone));
	}


	this.snumber = function(elem){

			var maskOptions2 = {
			  mask: 'a000aa00[0]',
			  lazy: false
			};
			masks.push(new IMask(elem, maskOptions2));
	}

	this.hnumber = function(elem){
			var maskOptions2 = {
			  mask: 'a000aa00[0]',
			  lazy: true
			};
			masks.push(new IMask(elem, maskOptions2));
	}

	this.stime = function(elem){
		masks.push(new IMask(
						  elem,
						  {
						    mask: '#*{:}%*',
						    definitions: {
						    	'#': /[0-2]/,
						    	'*': /[0-9]/,
						    	"%": /[0-5]/,
						    },
						    lazy: false
						  }));
	}

	this.htime = function(elem){
		masks.push(new IMask(
						  elem,
						  {
						    mask: '#*{:}%*',
						    definitions: {
						    	'#': /[0-2]/,
						    	'*': /[0-9]/,
						    	"%": /[0-5]/,
						    },
						    lazy: true

						  }));
	}

	this.srange = function(elem){
		var maskOptions2 = {
			  mask: '00{-}00',
			  lazy: false
			};
			masks.push(new IMask(elem, maskOptions2));
	}

	this.hrange = function(elem){
		var maskOptions2 = {
			  mask: '00{-}00',
			  lazy: true
			};
			masks.push(new IMask(elem, maskOptions2));
	}



})