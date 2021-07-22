class Security {

    constructor(){
 
        this.access1 = createInput("Code1")
       
        this.button1 = createButton('Check');
       
        this.access2 = createInput("Code2")
       
        this.button2 = createButton('Check');
       
        this.access3 = createInput("Code3")
        
        this.button3 = createButton('Check');
        this.score =0;
       }
    hide() {
        security.button1.hide();
    this.access1.hide();
    this.button2.hide();
    this.access2.hide();
    this.button3.hide();
    this.access3.hide();  
    }

    display(){

        this.access1.position(100,90);
        this.access1.style('background', 'white');  
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    
        this.access2.position(700,190);
        this.access2.style('background', 'white');  
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
        this.access3.position(100,290);
        this.access3.style('background', 'white');  
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey'); 
  
        this.button1.mousePressed(() => {
            if(security.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.score++;
                console.log(this.score)
        //         textSize(20);
        // fill("white");
        // text("Score: " +this.score, 450, 50);
            }
        });

        this.button2.mousePressed(() => {
            if(security.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                this.score++;

                console.log(this.score)
               
            }
        });

        this.button3.mousePressed(() => {
            if(security.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                this.score++;
                console.log(this.score)
                textSize(20);
                fill("white");
                text("Score: " +this.score, 450, 50);
                if(this.score === 3) {
                    clear()
                   
                    fill("black")
                    textSize(40);
                    text("TREASURE UNLOCKED",250, 200);

                    gameState = level1win;
                }
                  else{
                    gameState = level1end;
                }
            }
        });
        
        
  
    }


 authenticate(actualCode,enteredCode){
    textSize(50);
    fill("black");
    // text(code,300,300)
    if(actualCode === enteredCode.toUpperCase()) 
        return true
    else
        return false
}


}
