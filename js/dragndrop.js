function drawerror(err, input) {
        let inputrect = input.get(0).getBoundingClientRect();
        let top = inputrect.top + window.scrollY;
        let left = inputrect.left;
        console.log(top, left);
        $(".validblock").html(err);
        $(".validblock").css("display", "block");
        $(".validblock").offset({top: top-12, left: left+8});
}

$('.drop-area-2 p, #drop-area p').click(function() {
  console.log('ccccc')
  $(this).parent().find('input').click();
})

$("input").focus(function(){
  if($(this).attr("data-err") == "1"){
    drawerror($(this).attr("data-text"), $(this));
  }
})

$("input").blur(function(){
  $(".validblock").css("display", "none");
  $(this).attr("data-err", 0)
})

const mapper = {
    "1": 16,
    '2': 17,
    '3': 18
}

function decode(text, key) {
    var j=0;
    var str = new String();
    key = utf8_encode(key);
    text = window.atob(text);
    for (var i=0; i<text.length; i++) {
        var a = text.charCodeAt(i);
        var b = key.charCodeAt(j);
        var c = a - b;
        if (c < 0) c += 255;
        str += String.fromCharCode(c);
        if (j == key.length-1) j=0; else j++;
    }
    return utf8_decode(str);
}
function utf8_decode(text) {
    var str = new String();
    for (var i=0; i<text.length; i++) {
        if (text.charCodeAt(i) > 127) {
            str += String.fromCharCode(text.charCodeAt(i)+848);
        } else {
            str += text.charAt(i);
        }
    }
    return str;
}

$(".doc .docview").click(function(){
  let p = $(this).parent().parent().parent().parent();
  let classl = $(p).attr("class").split(" ")[3];
  console.log(classl);
  $("." + classl + " .doc-list p a")[0].click();
})




$(function(){
  if($.cookie("target")){
  //   $(".text-first").hide();
  //   $(".load-file").show();
  }
  else {
    if(window.location.hash){
      let hash = decode(window.location.hash.substring(1), "avtospor_amulex").split("|");
      console.log(hash);
      $.cookie("FIO", hash[1].split("_").join(" "));
      $.cookie("email", hash[0]);
      $.cookie("target", hash[2]);
      $(".text-first").hide();
      $(".").show();
    }
    else {
      $(".text-first").show();
      $(".load-file").hide();
    }
  }
});

// for spid doc


let dropAreaSpid = document.getElementById('drop-area-spid');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaSpid.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaSpid.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaSpid.addEventListener(eventName, unhighlight, false);
});

let FileListsSpid = [];

dropAreaSpid.addEventListener('drop', handleDropSpid, false)
function handleDropSpid(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesSpid(files)
}

function handleFilesSpid(files) {
  
  files = [...files];
  FileListsSpid.push(files);

  FileListsSpid.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsSpid.push([a]);
        });
        FileListsSpid.splice(i, 1);
      }
      if(e.length < 1){
        FileListsSpid.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileSpid(e,i)})
}


let indexesspid = 0;

function previewFileSpid(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbspid")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbspid-"+ indexesspid)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbspid);
    indexesspid++;
     $(".spid_doc #gallery").append(thumb);
  }
}

function removeThumbspid(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsSpid[elem_id] = null;
  e.target.remove();
}

function toEmailspid(e) {
    const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
    let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsSpid.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".spid_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove('disabled-btn');
                      })
                  })
                })
        })
     })


}

// SPID END

// ZNAK

let dropAreaZnak = document.getElementById('drop-area-znak');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaZnak.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaZnak.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaZnak.addEventListener(eventName, unhighlight, false);
});

let FileListsZnak = [];

dropAreaZnak.addEventListener('drop', handleDropZnak, false)
function handleDropZnak(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesZnak(files)
}

function handleFilesZnak(files) {
  
  files = [...files];
  FileListsZnak.push(files);

  FileListsZnak.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsZnak.push([a]);
        });
        FileListsZnak.splice(i, 1);
      }
      if(e.length < 1){
        FileListsZnak.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileZnak(e,i)})
}


let indexesznak = 0;

function previewFileZnak(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbznak")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbznak-"+ indexesznak)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbznak);
    indexesznak++;
    $(".znak_doc #gallery").append(thumb);
  }
}

function removeThumbznak(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsZnak[elem_id] = null;
  e.target.remove();
}

function toEmailznak(e) {
    const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsZnak.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".znak_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove('disabled-btn');
                      })
                  })
                })
        })
     })


}

// ZNAK END


// GEO
let dropAreaGeo = document.getElementById('drop-area-geo');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaGeo.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaGeo.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaGeo.addEventListener(eventName, unhighlight, false);
});

let FileListsGeo = [];

dropAreaGeo.addEventListener('drop', handleDropGeo, false)
function handleDropGeo(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesGeo(files)
}

function handleFilesGeo(files) {
  
  files = [...files];
  FileListsGeo.push(files);

  FileListsGeo.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsGeo.push([a]);
        });
        FileListsGeo.splice(i, 1);
      }
      if(e.length < 1){
        FileListsGeo.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileGeo(e,i)})
}


let indexesgeo = 0;

function previewFileGeo(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbgeo")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbgeo-"+ indexesgeo)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbgeo);
    indexesgeo++;
    $(".geo_doc #gallery").append(thumb);
  }
}

function removeThumbgeo(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsGeo[elem_id] = null;
  e.target.remove();
}

function toEmailgeo(e) {
      const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsGeo.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".geo_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove('disabled-btn');
                      })
                  })
                })
        })
     })


}
// GEO END

// RASPOZNANIE
let dropAreaRasp = document.getElementById('drop-area-rasp');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaRasp.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaRasp.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaRasp.addEventListener(eventName, unhighlight, false);
});

let FileListsRasp = [];

dropAreaRasp.addEventListener('drop', handleDropRasp, false)
function handleDropRasp(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesRasp(files)
}

function handleFilesRasp(files) {
  
  files = [...files];
  FileListsRasp.push(files);

  FileListsRasp.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsRasp.push([a]);
        });
        FileListsRasp.splice(i, 1);
      }
      if(e.length < 1){
        FileListsRasp.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileRasp(e,i)})
}


let indexesrasp = 0;

function previewFileRasp(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbrasp")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbrasp-"+ indexesrasp)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbrasp);
    indexesrasp++;
    $(".raspoznanie_doc #gallery").append(thumb);
  }
}

function removeThumbrasp(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsRasp[elem_id] = null;
  e.target.remove();
}

function toEmailrasp(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsRasp.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".raspoznanie_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove('disabled-btn');
                      })
                  })
                })
        })
     })


}

// RASPOZNANIE END

// REZIDENT
let dropAreaRez = document.getElementById('drop-area-rez');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaRez.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaRez.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaRez.addEventListener(eventName, unhighlight, false);
});

let FileListsRez = [];

dropAreaRez.addEventListener('drop', handleDropRez, false)
function handleDropRez(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesRez(files)
}

function handleFilesRez(files) {
  
  files = [...files];
  FileListsRez.push(files);

  FileListsRez.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsRez.push([a]);
        });
        FileListsRez.splice(i, 1);
      }
      if(e.length < 1){
        FileListsRez.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileRez(e,i)})
}


let indexesrez = 0;

function previewFileRez(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbrez")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbrez-"+ indexesrez)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbrez);
    indexesrez++;
    $(".resident_doc #gallery").append(thumb);
  }
}

function removeThumbrez(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsRez[elem_id] = null;
  e.target.remove();
}

function toEmailrez(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsRez.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".resident_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove('disabled-btn');
                      })
                  })
                })
        })
     })

}

// REZIDENT END

// VREMYA
let dropAreaPr = document.getElementById('drop-area-pr');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaPr.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaPr.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaPr.addEventListener(eventName, unhighlight, false);
});

let FileListsPr = [];

dropAreaPr.addEventListener('drop', handleDropPr, false)
function handleDropPr(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesPr(files)
}

function handleFilesPr(files) {
  
  files = [...files];
  FileListsPr.push(files);

  FileListsPr.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsPr.push([a]);
        });
        FileListsPr.splice(i, 1);
      }
      if(e.length < 1){
        FileListsPr.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFilePr(e,i)})
}


let indexespr = 0;

function previewFilePr(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbpr")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbpr-"+ indexespr)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbpr);
    indexespr++;
    $(".prodazha_doc #gallery").append(thumb);
  }
}

function removeThumbpr(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsPr[elem_id] = null;
  e.target.remove();
}

function toEmailpr(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
    let fd_task = new FormData();
    let files_s = [];
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsPr.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".prodazha_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove("disabled-btn");
                      })
                  })
                })
        })
     })



}

//Vremya end
//Prodazha 
let dropAreaVr = document.getElementById('drop-area-vr');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaVr.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaVr.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaVr.addEventListener(eventName, unhighlight, false);
});

let FileListsVr = [];

dropAreaVr.addEventListener('drop', handleDropVr, false)
function handleDropVr(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesVr(files)
}

function handleFilesVr(files) {
  
  files = [...files];
  FileListsVr.push(files);

  FileListsVr.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsVr.push([a]);
        });
        FileListsVr.splice(i, 1);
      }
      if(e.length < 1){
        FileListsVr.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFileVr(e,i)})
}


let indexesvr = 0;

function previewFileVr(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbvr")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbvr-"+ indexesvr)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbvr);
    indexesvr++;
    $(".vremya_doc #gallery").append(thumb);
  }
}

function removeThumbvr(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsVr[elem_id] = null;
  e.target.remove();
}

function toEmailvr(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsVr.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".vremya_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove("disabled-btn");
                      })
                  })
                })
        })
     })


}
// Vremya end
// Parking
let dropAreaPark = document.getElementById('drop-area-park');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreaPark.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
  dropAreaPark.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreaPark.addEventListener(eventName, unhighlight, false);
});

let FileListsPark = [];

dropAreaPark.addEventListener('drop', handleDropPark, false)
function handleDropPark(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFilesPark(files)
}

function handleFilesPark(files) {
  
  files = [...files];
  FileListsPark.push(files);

  FileListsPark.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileListsPark.push([a]);
        });
        FileListsPark.splice(i, 1);
      }
      if(e.length < 1){
        FileListsPark.splice(i, 1);
      }
    }
  });
  files.forEach((e, i)=>{previewFilePark(e,i)})
}


let indexespark = 0;

function previewFilePark(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumbpark")
    thumb.classList.add("thumb")
    thumb.classList.add("thumbpark-"+ indexespark)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumbpark);
    indexespark++;
    $(".parking_doc #gallery").append(thumb);
  }
}

function removeThumbpark(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileListsPark[elem_id] = null;
  e.target.remove();
}

function toEmailpark(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
        let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileListsPark.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $(".parking_doc .doc-on-send").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove("disabled-btn");
                      })
                  })
                })
        })
     })

}








let dropArea = document.getElementById('drop-area');


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  e.target.classList.add('dotted-dnd')
}
function unhighlight(e) {
  e.target.classList.remove('dotted-dnd')
}

let FileLists = []

dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFiles(files)
}

function handleFiles(files) {
  
  files = [...files];
  FileLists.push(files);

  FileLists.forEach((e, i)=>{
    if (e) {
      if(e.length > 1){
        e.forEach((a)=>{
          FileLists.push([a]);
        });
        FileLists.splice(i, 1);
      }
      if(e.length < 1){
        FileLists.splice(i, 1);
      }
    }
  });
  console.log(FileLists);
  files.forEach((e, i)=>{previewFile(e,i)})
}






function previewFile(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumb1")
    thumb.classList.add("thumb1-"+ indexes2)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumb);
    indexes2++;
    document.getElementById('gallery').appendChild(thumb)
  }
}









let indexes = 0;

function previewFile(file, index) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let thumb = document.createElement('span')
    thumb.classList.add("thumb")
    thumb.classList.add("thumb-"+ indexes)
    thumb.innerHTML = file.name;
    thumb.addEventListener("click", removeThumb);
    indexes++;
    document.getElementById('gallery').appendChild(thumb)
  }
}


function removeThumb(e) {
  let elem_id = e.target.className.split(" ")[1].split("-")[1];
  FileLists[elem_id] = null;
  e.target.remove();
}


function toEmail(e) {
        const target = e.target;
    target.classList.add("disabled-btn");
    const targets = {
      "1" : "madi02@mos.ru",
      "2" : "madi02@mos.ru",
      "3" : "madi02@mos.ru"
    }
    let url = "sendmail.php"
    let formData = new FormData();
        let fd_task = new FormData();
    let files_s = []
    let title = '', desc = 'Email: ', status, service = mapper[$.cookie("target")];
    FileLists.forEach((e)=>{
         formData.append("files[]", e[0]);
         fd_task.append("files[]", e[0]);
    })
    if($.cookie("target")) {
      formData.append("target", targets[$.cookie("target")]);
      if(parseInt(Object.keys(targets).find(key=> targets[key] === $.cookie('target'))) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    else {
      let targ = $(".targets input[name='traget_grp']:checked").val();
      formData.append("target", targets[targ]);
      title += targets[targ];
      if(parseInt(targ) == 3) {
          status = 31
      } else {
          status = 35
      }
    }
    if($.cookie("FIO")){
      formData.append("FIO", $.cookie("FIO"));
      title += $.cookie("FIO");
    }
    else {
      formData.append("FIO", "");
      title += "";
    }
    if($.cookie("Email")){
      formData.append("email", $.cookie("Email"));
      desc += $.cookie('Email');
    }
    else {
      formData.append("email", "no-reply@amulex.ru");
        desc += "no-reply@amulex.ru"
    }
    fetch('ajax.php?a=create_task', {
        method: "POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "&title=" + title + "&description=" + desc + "&status=" + status + "&serviceid=" + service
    }).then((res) => {
        res.json().then((rrr)=>{
            fetch('ajax.php?a=append_files&id=' + rrr['Task']['Id'], {
                  method: "POST",
                  body: fd_task
                }).then((f)=>{
                  f.json().then((aa)=>{
                      console.log(aa);
                      $("#onsend").show(300);
                      fetch(url, {
                            method: "POST",
                            body: formData,
                            contentType:false,
                            processData: false
                      }).then((o)=>{
                        target.classList.remove("disabled-btn")
                      })
                  })
                })
        })
     })


}


document.getElementById("sender").addEventListener("click", toEmail);

//document.getElementById("docsender").addEventListener("click", toEmail2);

$(".spid_doc #docsender").click(function(e) {toEmailspid(e)});

$(".znak_doc #docsender").click(function(e) {toEmailznak(e)});

$(".geo_doc #docsender").click(function(e) {toEmailgeo(e)});

$(".raspoznanie_doc #docsender").click(function(e) {toEmailrasp(e)});

$(".resident_doc #docsender").click(function(e) {toEmailrez(e)});

$(".vremya_doc #docsender").click(function(e) {toEmailvr(e)});

$(".prodazha_doc #docsender").click(function(e) {toEmailpr(e)});

$(".parking_doc #docsender").click(function(e) {toEmailpark(e)});