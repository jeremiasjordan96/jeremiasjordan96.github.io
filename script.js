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

function right (rof) {
  if (rof) {
    return "true";
  }
  else {
    return "false";
  }
}

function checknull (bla) {
  if (typeof(bla) != "string") {
    return "";
  }
  else {
    return bla;
  }
}

function quizpruefen () {

  // rof = ((Quizinput == "Blau" || Quizinput == "blau" || Quizinput == "Blaureiher" || Quizinput == "blaureiher") && Quizinput != "");
  // console.log(right(rof));
  // console.log("Antwort war" + right(rof)) ;

  Quizinput = document.getElementById("reiherinput").value;
  if ((Quizinput == "Blau" || Quizinput == "blau" || Quizinput == "Blaureiher" || Quizinput == "blaureiher") && Quizinput != ""){
    document.getElementById("reiherinput").style.color = "green";
    document.getElementById("quizmsg").textContent = "Falsch, er heißt Arthur Georg Friedrich. Ne Spaß, war natürlich richtig. Dann hast du mal wieder einen Kuchen gut falls du gewettet hast"
  }
  else {
    document.getElementById("reiherinput").style.color = "red";
    document.getElementById("quizmsg").textContent = "Falsch, er heißt Arthur Georg Friedrich. Ne Spaß, aber leider heißt er Blaureiher."
  }

  var qparams = "?wette=" + checknull(document.querySelector('input[name="wetten"]:checked').value) + "&antwort=" + Quizinput;

  const formsend = new XMLHttpRequest();

  formsend.open('GET', 'https://photooftheday.jeremiasjordan.de/quiz.php' + qparams);
  formsend.send();

  formsend.addEventListener('load', function (event) {
    if (formsend.responseText == 1) {
      //document.getElementById("checksend").textContent = "Success";
    }
    else if (formsend.responseText == 2 &&   ((Quizinput == "Blau" || Quizinput == "blau" || Quizinput == "Blaureiher" || Quizinput == "blaureiher") && Quizinput != "")) {
      document.getElementById("checksend").textContent = "Sieht so aus als hättest du schon geantwortet, aber dann hast du halt noch einen Kuchen gut ;) Außer du bist ein indischer Bot, dann natürlich nicht";
    }
  });

  
  
  
}

/*function alert1 () {

alert('Jo passt');

}*/
