function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}


function votar() {
    
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidato = (valor1 * 10) + valor2;

    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
    }

    if(candidato == 02){
        document.getElementById("nome").innerHTML = "Achraf Hakimi";
        document.getElementById("pais").innerHTML = "Marrocos";
        document.querySelector('.jogador').src = 'img/hakimi.jpg';
        alert("Confirmado voto em Hakimi")
    }
    else if(candidato == 08){
        document.getElementById("nome").innerHTML = "Cody Gakpo";
        document.getElementById("pais").innerHTML = "Holanda";
        document.querySelector('.jogador').src = 'img/gakpo.jpg';
        alert("Confirmado voto em Gakpo")
    }
    else if(candidato == 09){
        document.getElementById("nome").innerHTML = "Richarlison";
        document.getElementById("pais").innerHTML = "Brasil";
        document.querySelector('.jogador').src = 'img/richarlison.jpg';
        alert("Confirmado voto em Richarlison")
    }
    else if(candidato == 10){
        document.getElementById("nome").innerHTML = "Luka Modrić";
        document.getElementById("pais").innerHTML = "Croácia";
        document.querySelector('.jogador').src = 'img/modric.jpg';
        alert("Confirmado voto em Modric")
    }
    else if(candidato == 13){
        document.getElementById("nome").innerHTML = "Enner Valencia";
        document.getElementById("pais").innerHTML = "Equador";
        document.querySelector('.jogador').src = 'img/enner.jpg';
        alert("Confirmado voto em Enner")
    }
    else if(candidato == 00){
        document.querySelector('.jogador').src = 'cinza.jpg';
    }
    else{
        alert("Esse número não é referente a um jogador, tente um número válido.");
        console.log(candidato + "teste");
    }
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function branco() {
    alert("Você votou em branco.");
}


function recarregarAPagina(){
    window.location.reload();
} 
