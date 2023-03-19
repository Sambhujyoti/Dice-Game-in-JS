var randomNumber1 = (Math.floor(Math.random()* 6)) +1;
var randomNumber2 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomNumber2);

var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomNumber4 = "images/dice" + randomNumber3 + ".png";

document.querySelector(".img2").setAttribute("src", randomNumber4);

if (randomNumber1 > randomNumber3) {
    document.querySelector("h1").textContent = "Sannidhi Won! 😎";
} else if (randomNumber3 > randomNumber1) {
    document.querySelector("h1").textContent = "Papa Won!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}