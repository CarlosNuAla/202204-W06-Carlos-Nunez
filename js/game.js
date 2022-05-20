/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import { createArray } from './newArray.js';
import { initializeBoard } from './iniBoard.js';

let canvas;
let ctx;
const fps = 30;

const canvasX = 500;
const canvasY = 500;
let tileX, tileY;

let board;
const lines = 100;
const columns = 100;

const black = '#000000';
const green = '#0aaf04';

const Agent = function (x, y, status) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.statusZone = this.status;
    this.neighbour = [];

    this.addNeighbours = (board, lines, columns) => {
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

initialize();
function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2D');

    canvas.widht = canvasX;
    canvas.height = canvasY;

    tileX = Math.floor(canvasX / lines);
    tileY = Math.floor(canvasY / columns);

    board = createArray(lines, columns);

    initializeBoard(board);

    setInterval(function () {
        principal();
    }, 5000 / fps);
}

function deleteCanvas() {
    canvas.widht = canvas.widht;
    canvas.height = canvas.height;
}

function principal() {
    deleteCanvas();
    console.log('fotograma');
}
