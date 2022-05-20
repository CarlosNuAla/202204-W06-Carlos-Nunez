export const initializeBoard = (obj, lines, columns, Agent) => {
    let status;
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            status = Math.floor(Math.random() * 2);
            obj[i][j] = new Agent(j, i, status);
        }
    }
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            obj[i][j].addNeighbours();
        }
    }
};
