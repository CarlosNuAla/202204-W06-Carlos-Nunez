export function createArray(line, column) {
    const obj = new Array(line);
    for (let i = 0; i < column; i++) {
        obj[i] = new Array(column);
    }
    return obj;
}