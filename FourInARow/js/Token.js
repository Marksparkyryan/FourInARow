

class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    /**
     * HTML representation of the token
     */
    drawHTMLToken() {
        const tokenContainer = document.createElement('div');
        const gameBoardUnderlay = document.getElementById('game-board-underlay');
        gameBoardUnderlay.appendChild(tokenContainer);
        tokenContainer.setAttribute("id", this.id);
        tokenContainer.setAttribute("class", "token");
        tokenContainer.style.backgroundColor = this.owner.colour;
    }

    /**
     * Getter for HTML Token
     */
    get HTMLToken() {
        return document.getElementById(this.id)
    }
}
