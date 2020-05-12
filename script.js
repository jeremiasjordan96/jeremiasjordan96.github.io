var Counter = 1;
var UInput;

/*
// hat sich nicht bewährt
var txtRequest = new XMLHttpRequest();

txtRequest.open('GET', 'http://photooftheday.jeremiasjordan.de/counter/counter.txt', true);
txtRequest.onerror = function() {
  console.log('There was an error!');
};

txtRequest.send();
var externalCounter = txtRequest.responseText;

var infoRequest = new XMLHttpRequest();

infoRequest.open('GET', 'http://photooftheday.jeremiasjordan.de/info/' + '24' + '.txt', true);

infoRequest.addEventListener('load', function(event) {
  if (request.status >= 200 && request.status < 300) {
     console.log(infoRequest.responseText);
  } else {
     console.warn(infoRequest.statusText, infoRequest.responseText);
  }
});


*/

/* function simpleRe () {

  document.getElementById("sbutton").textContent = "Success!";
  window.location.replace("google.com");

}; */

function eventforward (e) {

  if (e.keyCode === 13) {

    e.preventDefault();
    document.getElementById('sbutton').click();

  };


}

function GoogleFwd () {

  UInput = document.getElementById("suche").value;
  UInput.split(' ').join('+');
  window.location = ("https://www.google.com/search?q="+UInput);
  //window.location.replace("https://google.com");

};



function changeValue () {

  switch(Counter){

    case 1:
    document.getElementById("Loveswitch").textContent = "liebe";
    Counter ++;
    break;

    case 2:
    document.getElementById("Loveswitch").textContent = "dich";
    Counter ++;
    break;

    case 3:
    document.getElementById("Loveswitch").textContent = "Ich";
    Counter = 1;
    break;

  };

};

function herzberuehrt () {

alert(unescape("Du%20hast%20mein%20Herz%20ber%FChrt"));


}

/*function alert1 () {

alert('Jo passt');

}*/
