function verificarTime() {

    var continuarPerguntando = true;

    while (continuarPerguntando) (

    var respostaTime = prompt("Qual o melhor time?");

    if (respostaTime.toLowerCase() == "athlético pr") {

    alert("Isso mesmo! 0 Athlético PR é o melhor time!");

    continuarPerguntando = false; // Sai do loop após a respost

    } else {

    alert("Não é isso! Tente novamente.");

    }

// Chamada da função para iniciar o processo
 verificarTime();
}