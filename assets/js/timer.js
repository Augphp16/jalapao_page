// Define a data para a contagem regressiva (exemplo: 1 de janeiro de 2025)
const countdownDate = new Date("April 22, 2025 00:00:00").getTime();

// Atualiza a contagem a cada segundo
const x = setInterval(function () {

    // Obtém a data e hora atuais
    const now = new Date().getTime();

    // Calcula a diferença entre a data de contagem e a data atual
    const distance = countdownDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores calculados
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // Se a contagem terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Tempo Esgotado!";
    }
}, 1000);