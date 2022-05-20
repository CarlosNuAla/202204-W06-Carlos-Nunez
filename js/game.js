import { createArray } from './newArray.js';
import { deleteCanvas } from './deleteCanvas.js';

let canvas;
let ctx;
const fps = 30;

const canvasX = 750;
const canvasY = 750;
let tileX, tileY;

let board;
const lines = 200;
const columns = 200;

const black = '#000000';
const green = '#0aaf04';

const Agent = function (x, y, status) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.statusZone = this.status;
    this.neighbour = [];

    this.addNeighbours = function () {
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
    this.paint = function () {
        let colour;
        if (this.status === 1) {
            colour = green;
        } else {
            colour = black;
        }
        ctx.fillStyle = colour;
        ctx.fillRect(this.x * tileX, this.y * tileY, tileX, tileY);
    };
    this.newCycle = function () {
        let add = 0;
        for (let i = 0; i < this.neighbour.length; i++) {
            add += this.neighbour[i].status;
        }
        this.statusZone = this.status;

        if (add < 2 || add > 3) {
            this.statusZone = 0;
        }
        if (add === 3) {
            this.statusZone = 1;
        }
    };
    this.mutation = function () {
        this.status = this.statusZone;
    };
};

const initializeBoard = (obj) => {
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

initialize();
function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.widht = canvasX;
    canvas.height = canvasY;

    tileX = Math.floor(canvasX / lines);
    tileY = Math.floor(canvasY / columns);

    board = createArray(lines, columns);

    initializeBoard(board);

    setInterval(function () {
        principal();
    }, 1500 / fps);
}

function principal() {
    deleteCanvas(canvas);
    drawBoard(board);
}

function drawBoard(obj) {
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            obj[i][j].paint();
        }
    }
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            obj[i][j].newCycle();
        }
    }
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            obj[i][j].mutation();
        }
    }
}
