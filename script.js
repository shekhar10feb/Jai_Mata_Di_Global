var myVar = setInterval(myTimer, 6000);

function myTimer() {
    document.querySelector(".IntroPlate").innerHTML = "Mutationes!!";
    document.querySelector(".IntroPlate").style.fontWeight = "bolder";
    document.querySelector(".IntroPlate").style.fontSize = "23px";
    document.querySelector(".IntroPlate").style.display = "flex";
    document.querySelector(".IntroPlate").style.justifyContent = "center";
    document.querySelector(".IntroPlate").style.alignItems = "center";
    document.querySelector(".IntroPlate").style.fontFamily = "cursive";
    document.querySelector(".IntroPlate").style.padding = "12px 12px 12px 12px";
}

var myVar1 = setInterval(myTimer1, 10000);

function myTimer1() {
    document.querySelector(".IntroPlate").style.visibility = "hidden";
    document.querySelector("#IntroTriangle").style.visibility = "hidden";

}

var myVar3 = setInterval(myTimer3, 11000);

function myTimer3() {
    document.querySelector(".stars").style.visibility = "visible";
}

var myVar5 = setInterval(myTimer5, 12000);

function myTimer5() {
    document.querySelector(".stars1").style.fontSize = "70%";
    document.querySelector(".stars2").style.fontSize = "80%";
}


var myVar4 = setInterval(myTimer4, 13000);

function myTimer4() {
    document.querySelector(".stars").style.visibility = "hidden";

}

var myVar2 = setInterval(myTimer2, 14000);

function myTimer2() {
    document.querySelector(".room").style.backgroundColor = "rgb(12, 104, 190)";
    document.querySelector(".focus").style.visibility = "hidden";
    document.querySelector(".maniram").style.backgroundColor = "transparent";
    document.querySelector(".maniram").style.borderRadius = "0";
    document.querySelector(".twitterId").style.visibility = "visible";
    document.querySelector("#durgaji").src = "images/mataji.png";
}