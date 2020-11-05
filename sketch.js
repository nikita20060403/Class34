var gameState = 0;
var playerCount = 0;
var form, game, player;
var database;
var allPlayers;


function setup(){
    game=new Game();
    database=firebase.database();
    createCanvas(500,500);

   
    game.getState();
    game.start();
   
    
}

function draw(){

    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        game.play();
    }
  
}

