class Form{
    constructor(){

        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
        this.title=createElement('h1');

    }
    display(){
        
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(375,0);

        
        this.input.position(400,160);

       
        this.button.position(400,200);

        

        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();

         player.name=this.input.value();

            playerCount+=1;
            player.update();
            player.index=playerCount;
            console.log("Inside Form : "+player.index)
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(525,300);

        });

        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
}