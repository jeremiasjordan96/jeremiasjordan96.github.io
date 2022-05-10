var input = document.getElementById("suche");
input.focus();
input.select();
input.addEventListener("keydown", eventforward);

var infopanel = document.getElementById("infop");
var infocircle = document.getElementById("infocircle");
var infocontent = document.getElementById("infoc");
var i;
document.cookie = "Du=Das Beste, was mir je passiert ist; path=/";


const infoContentReq = new XMLHttpRequest();

infoContentReq.open('GET', 'https://photooftheday.jeremiasjordan.de/info.php', true);
infoContentReq.send();
infoContentReq.onload = function () {
  if (infoContentReq.responseText != 'false') {
    document.getElementById('infopara').innerHTML = infoContentReq.responseText;
  }
  else {
   var ip = document.getElementById('ip');
   ip.remove();
  }
}

/*

//This function isn't necessary anymore because it is now realized in CSS

function toggleinfopanel () {

    var infostyle = infopanel.className;
    if (infostyle == "infopanelinactive") {
        infopanel.className = "infopanelactive";
    }
    else {
        infopanel.className = "infopanelinactive";
    }
};

*/
var siteswitch = document.getElementById("toggleswitch");
siteswitch.checked = false; 
var logo = document.getElementById("lgo");
var tbarli = document.querySelectorAll(".toolbar li");
var herz = document.getElementById("herzicon");

function setBackground(){
  var bgurl = "https://photooftheday.jeremiasjordan.de/output.php";
  var contenttype;
  var xhttp = new XMLHttpRequest();
  xhttp.open('HEAD', bgurl);
  xhttp.onreadystatechange = function () {
    if (this.readyState == this.DONE) {
        contenttype = this.getResponseHeader("Content-Type");
    }
  
  if (contenttype == "image/jpeg"){
    document.body.style = "background-image: url('https://photooftheday.jeremiasjordan.de/output.php'); background-size: cover; background-position: center top;";
  }
  else if(contenttype == "video/mp4"){
    document.getElementById("bgvideo") = "https://photooftheday.jeremiasjordan.de/output.php";
  }
};  
}

function love() {
  setBackground();
  logo.style.backgroundImage = "url('https://i.ibb.co/hX3bKRd/Asset-1.png')";    
  for (i=0; i<tbarli.length; i++) {
    tbarli[i].style.color = "#ffffff";
  }
  var tween = KUTE.to('#kreispfad', { path: '#herzpfad', duration: 500 }).start();
  document.getElementById("ip").style.visibility = "visible";
  var req = new XMLHttpRequest;
  req.open('GET', 'https://photooftheday.jeremiasjordan.de/siteswitch.php?set=1');
  req.send();
}

function unlove () {
  document.body.style.background = 'none';
  var tbarli = document.querySelectorAll(".toolbar li");
  for (i=0; i<tbarli.length; i++) {
    tbarli[i].style.color = "#737373";
  }
  var tween = KUTE.to('#kreispfad', { path: '#kreispfad2', duration: 500 }).start();
  document.getElementById("lgo").style.backgroundImage = "url('https://i.ibb.co/2hmgd3k/gheartnewnew.png')";
  document.getElementById("ip").style.visibility = "hidden";
  var req = new XMLHttpRequest;
  req.open('GET', 'https://photooftheday.jeremiasjordan.de/siteswitch.php?set=0');
  req.send();
}

function bereit(set) {
  herz.style.color = "#CA0E0E";
  if(set){
    var req = new XMLHttpRequest;
    req.open('GET', 'https://photooftheday.jeremiasjordan.de/loveswitch.php?set=1');
    req.send();
    console.log("bereit set");
  }
  else {
    console.log("bereit color changed");
  }
}

function nichtbereit(set){
  herz.style.color = "#ffffff";
  if(set){
    var req = new XMLHttpRequest;
    req.open('GET', 'https://photooftheday.jeremiasjordan.de/loveswitch.php?set=0');
    req.send();
    console.log("nicht bereit set");
  }
  else {
    console.log("nicht bereit color changed");
  }
}

function checklovestatus(){
  var req = new XMLHttpRequest;
  req.open('GET', 'https://photooftheday.jeremiasjordan.de/siteswitch.php');
  req.send();
  req.onload = function() {
    if(req.responseText == 0){
      unlove();
      siteswitch.checked = false;
      console.log("unlove");
    }
    else {
      love();
      siteswitch.checked = true;
      console.log("love");
    }
  }
}

function checkbereit(first, second, wahr){
  console.log("checkbereit aufgerufen");
  const req = new XMLHttpRequest;
  req.open('GET', 'https://photooftheday.jeremiasjordan.de/loveswitch.php');
  req.send();
  req.onload = function() {
    if (req.responseText == 1) {
      first(wahr);
      console.log("erstes ausgeführt");
    } else {
      second(wahr);
      console.log("zweites ausgeführt");
    }
  }
}


function initialbereitcheck (){
  console.log("initial check");
  checkbereit(bereit, nichtbereit,false);
}


checklovestatus();
initialbereitcheck();


siteswitch.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    love();
    var tween = KUTE.to('#kreispfad', { path: '#herzpfad', duration: 500 }).start();
  } else {
    console.log("Checkbox is not checked..");
    var tween = KUTE.to('#kreispfad', { path: '#kreispfad2', duration: 500 }).start();
    unlove();
  }
});

function herzberuehrt () {
  checkbereit(nichtbereit, bereit, true);
  alert(unescape("Du%20hast%20mein%20Herz%20ber%FChrt"));
}
