/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    const miReloj = document.getElementById("clock");
    console.log(miReloj);
    console.dir(miReloj);

    miReloj.innerText = "Hola hola!";






    const headers = document.getElementsByTagName("h1");
    console.dir(headers[0]);

}





function randInt(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function changeEmojiColor(elem) {
    const r = randInt(0,255);
    const g = randInt(0,255);
    const b = randInt(0,255);
    elem.style.fill = "rgb("+r+","+g+","+b+")";
}


function hoverDado(elem) {
    const r = randInt(0,255);
    const g = randInt(0,255);
    const b = randInt(0,255);
    elem.style.fill = "rgb("+r+","+g+","+b+")";
}

function hoverDadoOut(elem) {
    const r = randInt(0,255);
    const g = randInt(0,255);
    const b = randInt(0,255);
    elem.style.fill = "rgb("+r+","+g+","+b+")";
}

function cambiofondo(elem) {
    const mivector = document.getElementsByTagName("main");
    mivector[0].style.backgroundImage= "url('./assets/img/paisaje.jpg')";

    const head = document.getElementsByTagName("header");
    head[0].style.backgroundColor= "black";

    const titulo = document.getElementsByTagName("h1");
    titulo[0].style.color= "white";

    const footer = document.getElementsByTagName("footer");
    footer[0].style.backgroundColor= "black";

    const autor = document.getElementsByTagName("h2");
    autor[0].style.color= "white";

}


