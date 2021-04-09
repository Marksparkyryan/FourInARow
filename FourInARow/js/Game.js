

class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers(2);
        this.ready = false;
    }

    /**
     * Creates player objects for the game
     * @param {number} num - Number of players 
     * @returns {Array} - An array of player objects
     */
    createPlayers(num) {
        let players = [];
        for (let i = 1; i <= num; i++) {
            let randomColour = Math.floor(Math.random()*16777215).toString(16);
            let hex = `#${randomColour}`;
            let player = new Player(`Player ${i}`, i, hex);
            players.push(player)
        }
        return players;
    }

    /**
     * Starts the game!
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.players[0].active = true;
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Getter for actie player
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }
}
