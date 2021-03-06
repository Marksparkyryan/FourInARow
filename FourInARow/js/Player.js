

class Player {
 constructor(name, id, colour, active=false) {
    this.name = name;
    this.id = id;
    this.colour = colour;
    this.active = active;
    this.tokens = this.createTokens(21);
 }

/**
 * Creates token objects for player
 * @param {number} num - Number of tokens to be created 
 * @returns {Array} - Array of created tokens 
 */
 createTokens(num) {
    let tokens = [];
    for (let i = 0; i < num; i++) {
        let token = new Token(this, i);
        tokens.push(token);
    }
    return tokens;
 }

 get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
 }

 get activeToken() {
    return this.unusedTokens[0];
 }

}


