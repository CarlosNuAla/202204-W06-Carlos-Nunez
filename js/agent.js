export let agent = (x, y, status) => {
    this.x = x;
    this.y = y;
    this.status = status;
    this.statusZone = this.status;
    this.neighbour = [];

    this.addNeighbours = function (board, lines, columns) {
        let xNeig;
        let yNeig;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                xNeig = (this.x + j + columns) % columns;
                yNeig = (this.y + i + lines) % lines;

                if (i != 0 || j != 0) {
                    this.neighbour.push(board[yNeig][xNeig]);
                }
            }
        }
    };
};