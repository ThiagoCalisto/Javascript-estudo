console.log("sucess load")

let titulo = document.querySelector(".titulo");

titulo.textContent = "banana";

let pacientes = document.querySelectorAll(".paciente");

/* let first = document.querySelector("#first"); */


for(let i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

let altura = paciente.querySelector(".info-altura").textContent;
let peso = paciente.querySelector(".info-peso").textContent;

let tdImc = paciente.querySelector(".info-imc");

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
}



// =======

// let imc = peso / (altura * altura);



// console.log(altura)
// console.log(peso)

// tdImc.textContent = imc;
// >>>>>>> b76815d42b9529db9f9fd7f0ed31f7e15a1ee3ef

