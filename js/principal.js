console.log("sucess load")

let titulo = document.querySelector(".titulo");

titulo.textContent = "banana";

/* let first = document.querySelector("#first"); */


let altura = first.querySelector(".info-altura").textContent;
let peso = first.querySelector(".info-peso").textContent;

let tdImc = first.querySelector(".info-imc");

let pesoValido = true;
let alturaValida = true;

if (peso < 0 || peso > 1000){
    console.log("Peso invalido!");
    pesoValido = false
    tdImc.textContent = "Peso invalido!";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura invalida!");
    alturaValida = false;
    tdImc.textContent = "Altura invalida!";
}

if (alturaValida && pesoValido){

    let imc = peso / (altura * altura);

    console.log(altura)
    console.log(peso)

    tdImc.textContent = imc;

}




