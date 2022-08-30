const canvas = document.getElementById("canvas");
const playerSprite = document.getElementById("playerSprite");
const slimeSprite = document.getElementById("slimeSprite");

const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

let player_x = 250;
let player_y = 250;
let enemy_x = 0;
let enemy_y = 0;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;
let attack = 0;

let textX = canvas.width / 2;
let testY = canvas.height - 30;

function updatePlayer(){
    ctx.drawImage(playerSprite, 0, 5, 50, 50, player_x, player_y, 100, 100);

    // border constraints for player
    if (player_y < 520){
        player_y += vyd;
    }
    if (player_y > -30){
        player_y += vyu;
    }
    if (player_x > -30){
        player_x += vxl;
    }
    if (player_x < 530){ 
        player_x += vxr;
    }

    // attack animation
    if (attack == 1){ 
        ctx.drawImage(playerSprite, 45, 100, 50, 50, player_x, player_y, 100, 100);

        if ((player_x - 50) < enemy_x && (player_x + 50) > enemy_x && 
        (player_y - 50) < enemy_y && (player_y + 50) > enemy_y) {

            if (enemy_x < player_x){
                enemy_x = enemy_x - 30;
            }
            if (enemy_x > player_x){
                enemy_x = enemy_x + 30;
            }
            if (enemy_y < player_y){
                enemy_y = enemy_y - 30;
            }
            if (enemy_y > player_y){
                enemy_y = enemy_y + 30;
            }
        }
        
        setTimeout(function(){
            attack=0;
        }, 125);
    } 
}

function updateEnemy(){
    ctx.drawImage(slimeSprite, 0, 0, 35, 35, enemy_x, enemy_y, 80, 80);

    // logic that moves enemy towards player
    if (enemy_x < player_x){
        enemy_x++;
    }
    if (enemy_x > player_x){
        enemy_x--;
    }
    if (enemy_y < player_y){
        enemy_y++;
    }
    if (enemy_y > player_y){
        enemy_y--;
    }
    if ((player_x - 20) < enemy_x && (player_x + 20) > enemy_x && 
        (player_y - 20) < enemy_y && (player_y + 20) > enemy_y) {
        gameOver();
    }
}

function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)


    updatePlayer();
    updateEnemy();

    requestAnimationFrame(update)
}
update();

function gameOver(){
    console.log("Your Dead!!!")
    player_x = 250;
    player_y = 250;
    enemy_x = 0;
    enemy_y = 0;

}