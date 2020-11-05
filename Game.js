class Game{
    constructor(){
        
    }
    getState(){
        var gameStateRef=database.ref('GameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            'GameState':state
        });
    }

    start(){
        if(gameState===0){
            player= new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var y_position=130;
            for(var plr in allPlayers){
                
                if(plr=== "Player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                y_position=y_position+20;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,y_position);
               


            }


        }
        if(keyIsDown(UP_ARROW)){
            player.distance+=50;
            player.update();
        }
    }
}