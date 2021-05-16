const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector("h3");
const background = document.querySelector(".background");
const button = document.querySelector("button");



function setGradient() {
    background.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
    css.textContent = background.style.background + ";";
}



const randomNumber = () => {
    return Math.floor(Math.random() * 255)
}


function randomGradient() {
    background.style.background = "linear-gradient(to right, rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")," + "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + "))";
    css.textContent = background.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);