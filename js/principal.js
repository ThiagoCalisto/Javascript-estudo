console.log("sucess load")

let titulo = document.querySelector(".titulo");

titulo.textContent = "banana";

/* let first = document.querySelector("#first"); */


let altura = first.querySelector(".info-altura").textContent;
let peso = first.querySelector(".info-peso").textContent;

let tdImc = first.querySelector(".info-imc");


let imc = peso / (altura * altura);



console.log(altura)
console.log(peso)

tdImc.textContent = imc;

