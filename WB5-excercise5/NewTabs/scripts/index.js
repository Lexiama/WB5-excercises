
"use strict";

window.onload = function () {
    const googleBtn = document.getElementById("googleBtn")
    const w3schoolsBtn = document.getElementById("w3schoolsBtn")
    const imagesBtn = document.getElementById ("imagesBtn")

    googleBtn.onclick = googleBtnClick;
    w3schoolsBtn.onClick = w3schoolsBtnClick;
    imagesBtn.onClick = imagesBtnClick;

};



function googleBtnClick (){
    console.log("google")
    window.open(" https://www.google.com")

};

function w3schoolsBtnClick (){
    console.log("w3c")
    window.open("https://www.w3schools.com")

};


function imagesBtnClick (){
    console.log("images")
    window.open("images.html")


};


