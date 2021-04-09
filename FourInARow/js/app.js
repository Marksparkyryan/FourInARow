import Game from "./Game";


let game = new Game();
const startButton = document.getElementById('#begin-game');
const playArea = document.getElementById('play-area')

startButton.addEventListener('click', () => {
    this.style.display = 'none';
    playArea.style.opacity = '1';
});
