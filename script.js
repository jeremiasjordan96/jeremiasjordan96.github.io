var Counter = 1;
var UInput;

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

/*function alert1 () {

alert('Jo passt');

}*/
