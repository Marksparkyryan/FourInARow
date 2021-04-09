import Space from "./Space";


class Board {
    constructor(rows=6, columns=7) {
        this.rows = rows;
        this.columns = columns;
        this.spaces = this.createSpaces();
    }

    /**
     * Generates 2D array of spaces
     * @param {number} num - Number of spaces on board 
     * @returns 
     */
    createSpaces() {
        let spaces = [];
        for (let x = 0; x < this.columns; x++) {
            let column = [];
            for (let y = 0; y < this.columns; y++) {
                let space = new Space(x, y)
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }
}
