/* eslint-disable no-unused-vars */
let canvas;
let ctx;
const fps = 30;

const canvasX = 500;
const canvasY = 500;
let tileX, tileY;

let tablero;
const filas = 100;
const columnas = 100;

const white = '#FFFFFF';
const black = '#000000';

function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2D');

    canvas.widht = canvasX;
    canvas.height = canvasY;

    tileX = Math.floor(canvasX / filas);
    tileY = Math.floor(canvasY / columnas);

    setInterval(function () {
        principal();
    }, 3000 / fps);
}

function principal() {
    console.log('fotograma');
}
