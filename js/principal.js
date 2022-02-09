console.log("sucess load")

let botaoadicionar = document.querySelector("#adicionar-paciente")

let titulo = document.querySelector(".titulo");

titulo.textContent = "FDP";

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
    paciente.style.backgroundColor = "lightcoral";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura invalida!");
    alturaValida = false;
    tdImc.textContent = "Altura invalida!";
    paciente.style.backgroundColor = "lightcoral";
}

if (alturaValida && pesoValido){

    let imc = peso / (altura * altura);

    console.log(altura)
    console.log(peso)

    tdImc.textContent = imc;
    tdImc.textContent = imc.toFixed(2);
}
}

console.log(botaoadicionar)

botaoadicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Jamo tunto")
})

titulo.addEventListener("click", mostrarMenssage)




function mostrarMenssage(){
     alert("ola eu fui clicado");
}



// =======

// let imc = peso / (altura * altura);



// console.log(altura)
// console.log(peso)

// tdImc.textContent = imc;
// >>>>>>> b76815d42b9529db9f9fd7f0ed31f7e15a1ee3ef

