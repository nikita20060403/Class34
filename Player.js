class Player{
    constructor(){

        this.index=null;
        this.distance=0;
        this.name=null;

    }
    getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })

    }

    updateCount(count){
        database.ref('/').update({
            'PlayerCount':count
        })
    }

    update(){
        console.log("Inside update :"+this.index);
        var playerIndex="Players/Player"+playerCount;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    
    static getPlayerInfo(){
        var playerInfoRef=database.ref('Players');
        playerInfoRef.on("value",function(data){
            allPlayers=data.val();
        })
    }
                                       
}