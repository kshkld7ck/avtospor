String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


let docs = new(function (){

this.getDoc = function(data){ 
    switch(data.type){
        case 1: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$WRONGNUM/g, data.wrongnum);
                        doc = doc.replace(/\$SPOSOB/g, data.sposob);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        doc = doc.replace(/\$PAYDATE/g, data.paydate);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc1");
                         [].forEach.call(linka, function (el) {
                            var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                         
                    }
                }
            }
            rawFile.send(null);
            break;

        case 2: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc2/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                          var linka = document.getElementsByClassName("doc2");
                         [].forEach.call(linka, function (el) {
                             var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';
                         })
                    }
                }
            }
            rawFile.send(null);
            break;

          case 3: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc3/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                          var linka = document.getElementsByClassName("doc3");
                         [].forEach.call(linka, function (el) {
                              var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';
                         })
                    }
                }
            }
            rawFile.send(null);
            break;

        case 4:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc4/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$PARKADRESS/g, data.parkadress);
                        doc = doc.replace(/\$PARKDATE/g, data.parkdate);
                        doc = doc.replace(/\$REESTR/g, data.reestr);
                        doc = doc.replace(/\$RAYON/g, data.rayon.capitalize());
                        doc = doc.replace(/\$PARKFR/g, data.parkfr);
                        doc = doc.replace(/\$PARKTO/g, data.parkto);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc4");
                         [].forEach.call(linka, function (el) {
                               var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';
                         })
                    }
                }
            }
            rawFile.send(null);
            break; 
  


  		case 5:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc5/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$FROM/g, data.from);
                        doc = doc.replace(/\$TO/g, data.to);
                        doc = doc.replace(/\$TIME/g, data.time);
                        doc = doc.replace(/\$LEAVETIME/g, data.leavetime);
                        doc = doc.replace(/\$DATAOPLATA/g, data.dateoplata);
                        doc = doc.replace(/\$MESTODVIZH/g, data.mestodvizh);
                        doc = doc.replace(/\$ZONE/g, data.zone);
                        //TODO: DIFF
                        var diff = 0;

                        var firstDate = data.to;
						var secondDate = data.leavetime;
			
						var getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
						var different = Math.abs(getDate(secondDate) - getDate(firstDate));

						var hours = Math.floor((different % 86400000) / 3600000);
						var minutes = Math.round(((different % 86400000) % 3600000) / 60000) + hours * 60;
						var result = minutes;

                        doc = doc.replace(/\$DIFF/g, result);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc5");
                         [].forEach.call(linka, function (el) {
                                var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                    }
                }
            }
            rawFile.send(null);
            break; 
        case 6:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc6/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$SPEED/g, data.speed);
                        doc = doc.replace(/\$OGRANICH/g, data.ogranich);
                        doc = doc.replace(/\$MESTODVIZH/g, data.mestodvizh);
                        doc = doc.replace(/\$VINMODEL/g, data.vinmodel);
                        doc = doc.replace(/\$VINNUM/g, data.vinnum);
                        doc = doc.replace(/\$ZONE/g, data.zone);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc6");
                         [].forEach.call(linka, function (el) {
                               var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                    }
                }
            }
            rawFile.send(null);
            break; 

           case 7:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc7/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$PARKINGID/g, data.parkingid);
                        doc = doc.replace(/\$PARKINGADDR/g, data.parkingaddr);
                        doc = doc.replace(/\$PARKINGWID/g, data.parkingwid);
                     	doc = doc.replace(/\$PARKINGDD/g, data.parkingdd);
                        doc = doc.replace(/\$PARKINGTT/g, data.parkingtt);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc7");
                         [].forEach.call(linka, function (el) {
                                var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                    }
                }
            }
            rawFile.send(null);
            break; 



          case 8:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc8/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$ZNAKDATE/g, data.znakdate);
                        doc = doc.replace(/\$ZNAKPLACE/g, data.znakplace);
                        doc = doc.replace(/\$ZNAKTIME/g, data.znaktime);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc8");
                         [].forEach.call(linka, function (el) {
                               var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                    }
                }
            }
            rawFile.send(null);
            break; 


        case 9:
           var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc9/index.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        var doc = allText.replace(/\$FIO/g, data.FIO);
                        if(data.adress == "") {
                             doc = doc.replace(/<p>Проживает по адресу:<br>\$ADRESS<\/p>/g, "");
                        }
                        if(data.return == 1){
                            doc = doc.replace(/\$TARGET/g, "почте");
                        }
                        else {
                           doc = doc.replace(/\$TARGET/g, "электронной почте"); 
                        }
                        doc = doc.replace(/\$DATE/g, data.date);
                        doc = doc.replace(/\$NUMBER/g, data.numpost);
                        doc = doc.replace(/\$MODEL/g, data.model);
                        doc = doc.replace(/\$SUM/g, data.sum+" рублей");
                        doc = doc.replace(/\$SPIDDATE/g, data.spiddate);
                        doc = doc.replace(/\$SPIDTIME/g, data.spidtime);
                        doc = doc.replace(/\$SPIDPLACE/g, data.spidplace);
                        doc = doc.replace(/\$SPIDFROM/g, data.spidft[0]);
                        doc = doc.replace(/\$SPIDTO/g, data.spidft[1]);
                        doc = doc.replace(/\$SPIDOSER/g, data.spidosago[0]);
                        doc = doc.replace(/\$SPIDUPRAV/g, data.spiduprav);
                        doc = doc.replace(/\$SPIDONUM/g, data.spidosago[1]);
                        doc = doc.replace(/\$NUMTS/g, data.numTS);
                        doc = doc.replace(/\$PHONE/g, data.phone);
                        doc = doc.replace(/\$ADRESS/g, data.adress);
                        doc = doc.replace(/\$EMAIL/g, data.email);
                        var textFile = null,
                        makeTextFile = function (text) {
                            var data = new Blob([text], {type: 'text/html'});
                            if (textFile !== null) {
                              window.URL.revokeObjectURL(textFile);
                            }

                            textFile = window.URL.createObjectURL(data);
                            return textFile;
                          };
                         var link = makeTextFile(doc);
                         data.doc = doc;
                         makePDF = function (text) {
                            var data = new Blob([text], {type: 'application/pdf'});
                            textFile = window.URL.createObjectURL(data);
                            alert(textFile);
                            return textFile;
                          };
                        var pdfl;
                        $.ajax({
                            type: "POST",
                            url: "topdf.php",
                            data: data,
                            success: function(data) {
                                //alert(data);
                                //var newWindow = window.open();
                                //newWindow.document.body.innerHTML = data;
                            }



                         });

                         var linka = document.getElementsByClassName("doc9");
                         [].forEach.call(linka, function (el) {
                              var p = data.FIO.split(" ")[0];
                            el.setAttribute('download', 'Жалоба_' + p + '.pdf');
                         //var ifr = document.getElementById("frdoc1");
                        //$(ifr).attr("src", "doc.pdf");
                            el.href = 'doc.pdf';

                         })
                    }
                }
            }
            rawFile.send(null);
            break; 

        default:
            break;






    }
}

});