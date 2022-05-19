/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import { createArray } from './newArray.js';

let canvas;
let ctx;
const fps = 30;

const canvasX = 500;
const canvasY = 500;
let tileX, tileY;

let board;
const lines = 100;
const columns = 100;

const white = '#FFFFFF';
const black = '#000000';

let agent = function (x, y, status) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.statusZone = this.status;
    this.neighbour = [];

    this.addNeighbours = function () {
        let xNeig;
        let yNeig;
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

    setInterval(function () {
        principal();
    }, 3000 / fps);
}

function deleteCanvas() {
    canvas.widht = canvas.widht;
    canvas.height = canvas.height;
}

function principal() {
    deleteCanvas();
    console.log('fotograma');
}
