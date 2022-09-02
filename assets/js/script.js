const canvas = document.getElementById("canvas");
const playerSprite = document.getElementById("playerSprite");
const slimeSprite = document.getElementById("slimeSprite");

const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

let enemies = [];
let enemyIndex = -1;
let player_x = 250;
let player_y = 250;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;
let attack = 0;

function updatePlayer(){
    ctx.drawImage(playerSprite, 7, 13, 50, 50, player_x, player_y, 100, 100);

    // border constraints for player
    if (player_y < 540){
        player_y += vyd;
    }
    if (player_y > -20){
        player_y += vyu;
    }
    if (player_x > -20){
        player_x += vxl;
    }
    if (player_x < 550){ 
        player_x += vxr;
    }

    // attack animation
    if (attack == 1){ 
        ctx.drawImage(playerSprite, 52, 108, 50, 50, player_x, player_y, 100, 100);
    
        for (let i = 0; i < enemies.length; i++){
            enemies[i].hitEnemy();
        }
  
        setTimeout(function(){
            attack=0; 
        }, 125);
    } 
}

class Enemy {
    constructor(id, enemy_x, enemy_y, enemyHealth){
        this.id = id;
        this.enemy_x = enemy_x;
        this.enemy_y = enemy_y;
        this.enemyHealth = enemyHealth;
    }
    updateEnemy(){

        ctx.drawImage(slimeSprite, 0, 0, 35, 35, this.enemy_x, this.enemy_y, 80, 80);
        
        // logic that moves enemy towards player
        if (this.enemy_x < player_x){
            this.enemy_x++;
        }
        if (this.enemy_x > player_x){
            this.enemy_x--;
        }
        if (this.enemy_y < player_y){
            this.enemy_y++;
        }
        if (this.enemy_y > player_y){
            this.enemy_y--;
        }
        if ((player_x - 20) < this.enemy_x && (player_x + 20) > this.enemy_x && 
            (player_y - 20) < this.enemy_y && (player_y + 20) > this.enemy_y) {
            // gameOver();
        }
    }
    hitEnemy(){

        if ((player_x - 50) < this.enemy_x && (player_x + 50) > this.enemy_x && 
            (player_y - 50) < this.enemy_y && (player_y + 50) > this.enemy_y) {

            this.enemyHealth = this.enemyHealth - 33.5;
            
            if (this.enemy_x < player_x){
                this.enemy_x = this.enemy_x - 30;
            }
            if (this.enemy_x > player_x){
                this.enemy_x = this.enemy_x + 30;
            }
            if (this.enemy_y < player_y){
                this.enemy_y = this.enemy_y - 30;
            }
            if (this.enemy_y > player_y){
                this.enemy_y = this.enemy_y + 30;
            }

            this.checkDead();
        }
    }
    checkDead(){
        
        if (this.enemyHealth <= 0){
            console.log("slime dead");
            console.log(this.id);
            enemies.splice(this.id, 1);
        }
        
    }
}



function createEnemy(){

    enemyIndex++;
    var enemy = new Enemy(enemyIndex, 0, 0, 100)
    enemies.push(enemy)

}

function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    updatePlayer();

    if (enemies.length != 0) {
        for (let i = 0; i < enemies.length; i++){
            enemies[i].updateEnemy();
        }
    }

    requestAnimationFrame(update)
}


const interval = setInterval(function() {
    createEnemy();
  }, 2000);
 

update();

