import Board from "./Board";
import Player from "./Player";


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
            let player = new Player(name=`Player ${i}`, colour=hex, id=i);
        }
        return players;
    }
}
