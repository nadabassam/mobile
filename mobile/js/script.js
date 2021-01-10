var circle = document.getElementById("circle");
var up = document.getElementById("Up");
var down = document.getElementById("down");


var rotateValue = circle.style.transform;
var roteteSum;


up.onclick = function () {
    roteteSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = roteteSum;
    rotateValue = roteteSum;
}


down.onclick = function () {
    roteteSum = rotateValue + "rotate(90deg)";
    circle.style.transform = roteteSum;
    rotateValue = roteteSum;
}
