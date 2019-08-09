function positionTheDot() {

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  console.log(x);
  if (x > 1320){
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var path = document.getElementById("mpath");
  var pathLen = path.getTotalLength();
  
  var pt = path.getPointAtLength(scrollPercentage * pathLen);


// TODO: Rotation!!!!!

  var ptnext = path.getPointAtLength((scrollPercentage+0.05) * pathLen);
  var ptnext2 = path.getPointAtLength((scrollPercentage+0.07) * pathLen);

  var tg = (ptnext.x-pt.x)/(ptnext.y-pt.y);
  var tg2 = (ptnext2.x-pt.x)/(ptnext2.y-pt.y);

  var angle = Math.atan(tg)*180/3.14;
  var angle2 = Math.atan(tg2)*180/3.14;

  var dot = document.getElementById("cc");
  //console.log(angle2-angle);
 // if (angle > 0 && (angle2 - angle) > 7 ) {
    dot.setAttribute("transform", "translate("+ pt.x + " " + pt.y+50 + ") rotate(" + -angle + ")"); 
 // }
 // else {
 //   dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y+50 + ") ");
 // }

  dot.style.transition = "all 0.7s";
}
};
  
