let docview = new (function(){
this.doc = function() {
    var sluch = localStorage.getItem("dtype");
    switch(parseInt(sluch.trim())){
        case 1: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        var rod = document.getElementsByClassName("parking")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("parking_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;

                        });
                    }
                }
            }
            rawFile.send(null);
            break;
        case 2: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc2/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];

                        var rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("prodazha_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;

                        });
                    }
                }
            }
            rawFile.send(null);
            break;
        case 3: 
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc3/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];

                        var rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("nesobs_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;

                        });
                    }
                }
            }
            rawFile.send(null);
            break;
        case 4:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc4/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("rezident")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("resident_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;

                        });
                    }
                }
            }
            rawFile.send(null);
            break;  
          case 5:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc5/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("vremya")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("vremya_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;

                        });
                    }
                }
            }
            rawFile.send(null);
            break; 
        case 6:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc6/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("raspoznanie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("raspoznanie_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;
                        });
                    }
                }
            }
            rawFile.send(null);
            break;   
        case 7:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc7/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("geo")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("geo_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;
                        });
                    }
                }
            }
            rawFile.send(null);
            break;       
        case 8:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc8/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("znak")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("znak_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;
                        });
                    }
                }
            }
            rawFile.send(null);
            break;       
        case 9:
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "doc9/index2.html", true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        allText = allText.split("<body>")[1];
                        allText = allText.split("</body>")[0];
                        var elems = [];
                        
                        var rod = document.getElementsByClassName("spid")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("dannie")[0];
                        elems.push(rod.getElementsByClassName('docview')[0]);
                        rod = document.getElementsByClassName("spid_doc")[0];
                        elems.push(rod.getElementsByClassName("docview")[0]);
                        elems.forEach((e)=>{
                            e.innerHTML = allText;
                        });
                    }
                }
            }
            rawFile.send(null);
            break;       
        default:
            break;    

    }

}
 })