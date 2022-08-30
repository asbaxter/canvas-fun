const canvas = document.getElementById("canvas");
const playerSprite = document.getElementById("playerSprite");
const slimeSprite = document.getElementById("slimeSprite");

const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

let x = 250;
let y = 250;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;
let attack = 0;

let textX = canvas.width / 2;
let testY = canvas.height - 30;

function updatePlayer(){
    ctx.drawImage(playerSprite, 0, 5, 50, 50, x, y, 100, 100);

    if (attack == 1){ 
        ctx.drawImage(playerSprite, 45, 100, 50, 50, x, y, 100, 100);
    } 
}

function updateEnemy(){
    ctx.drawImage(slimeSprite, 0, 0, 35, 35, 0, 0, 80, 80);
}

function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;

    updatePlayer();
    updateEnemy();

    requestAnimationFrame(update)
}
update();