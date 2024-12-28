// Efeito de confete que aparece ao carregar a página
window.onload = function () {
    setTimeout(function () {
        document.getElementById('confetti').style.display = 'block';
        // Gerando confetes aleatórios
        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement('div');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.animationDuration = `${Math.random() * 5 + 3}s`;
            confetti.style.animationTimingFunction = 'ease-out';
            document.getElementById('confetti').appendChild(confetti);
        }
    }, 500);
};

// Função para calcular o tempo desde 05/07/2024 às 20h
const startDate = new Date('2024-07-05T20:00:00');
const timerElement = document.getElementById('timer');

// Função que calcula e atualiza o tempo
function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Exibe o tempo no formato hh:mm:ss
    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Atualiza o contador de tempo a cada segundo
setInterval(updateTime, 1000);

// Alternando as fotos a cada 3 segundos
let currentPhoto = 0;
const photos = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'];

function changePhoto() {
    document.getElementById(photos[currentPhoto]).style.opacity = 0;
    currentPhoto = (currentPhoto + 1) % photos.length;
    document.getElementById(photos[currentPhoto]).style.opacity = 1;
}

setInterval(changePhoto, 3000); // Trocar foto a cada 3 segundos
