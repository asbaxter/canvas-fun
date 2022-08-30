const canvas = document.getElementById("canvas");
const playerSprite = document.getElementById("playerSprite");
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

function updatePlayer(){
    ctx.drawImage(playerSprite, 0, 5, 50, 50, x, y, 100, 100);
    if (attack == 1){ 
        console.log("attack") 
        ctx.drawImage(playerSprite, 45, 100, 50, 50, x, y, 100, 100);
    } 
}
function updateEnemy(){
    
}

function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    x += vxl;
    x += vxr;
    y += vyu;
    y += vyd;

    updatePlayer()

    requestAnimationFrame(update)
}
update();