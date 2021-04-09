import Space from "./Space";


class Board {
    constructor(rows=6, columns=7) {
        this.rows = rows;
        this.columns = columns;
        this.spaces = this.createSpaces(this.rows, this.columns);
    }

    /**
     * 
     * @param {number} num - Number of spaces on board 
     * @returns 
     */
    createSpaces(x, y) {
        let spaces = [];
        let totalSpaces = x * y;
        for (let i = 0; i < totalSpaces; i++) {
            let space = new Space(x, y);
            this.spaces.push(space);
        }
        return spaces;
    }
}
