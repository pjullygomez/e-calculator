let number = document.getElementById("number");
let operator = document.getElementsByClassName("operator");
let delBtn = document.getElementsByClassName("deletebtn");
let acBtn = document.getElementById("allclear")
let resultBtn = document.getElementsByClassName("result");
let screenResult = document.getElementById("screen")



function calculate(a) {
    screenResult.value += a;
}

function clr() {
    screenResult.value = (" ");
}

function total() {
    screenResult.value = eval(screenResult.value);
}

function cancel() {
    screenResult.value = screenResult.value.substr(0, screenResult.value.length - 1)
}