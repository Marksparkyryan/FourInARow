

let game = new Game();
const startButton = document.getElementById('begin-game');
const playArea = document.getElementById('play-area')

startButton.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    playArea.style.opacity = '1';
    game.startGame();
});
