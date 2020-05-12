var input = document.getElementById("suche");
input.focus();
input.select();
input.addEventListener("keydown", eventforward);

var infopanel = document.getElementById("infop");
var infocircle = document.getElementById("infocircle");
var infocontent = document.getElementById("infoc");
var i;


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

