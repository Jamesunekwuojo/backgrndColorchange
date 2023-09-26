const button = document.querySelector("button");
const body = document.querySelector("body");
body.style.backgroundColor = "yellow";
const colors= ["red", "blue", "orange", "purple"];
function changeB() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]


}
button.addEventListener('click', changeB);