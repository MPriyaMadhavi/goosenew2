var serve = 0;
var story = 1;
var level1start = 2;
var level1play = 3;
var level1end = 4;
var level1win = 5;
var level2play = 6;
var gameState = 0;
var background, backgroundImg;
var background1, backgroundImg1;
var level1bg, level1bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var level1story, level1Img;
var level2story, level2Img;
var book, bookImg;
var youwin, youwinImg;
var gameover, gameoverImg;
var playagain, playagainImg;
var restart, restartImg;
var player, playerImg;
var youwinstory, youwinstoryImg;
var startButton, storyButton,playButton;
var security;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,
cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;

const accessCode1 = "ZOMBIE";
const accessCode2 = "VAMPIRE";
const accessCode3 = "SKELETON";
const accessCode4 = "DRACULA";
const accessCode5 = "WITCH";
const accessCode6 = "NUN"


function preload(){
backgroundImg = loadImage("images/background.png");
backgroundImg1 = loadImage("images/background.png");
level1bgImg = loadImage("images/level1_bg.jpg");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level 1 story.png");
level2Img = loadImage("images/level 2 story.png");
bookImg = loadImage("images/book.jpg");
youwinImg = loadImage("images/youwinbg.jpg");
gameoverImg = loadImage("images/gameover.png");
playagainImg = loadImage("images/playagain.png");
restartImg = loadImage("images/restart.png");
playerImg = loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png");
youwinstoryImg = loadImage("images/youwin_story.png");
sound1 = loadSound("sounds/halloween_sound1.mp3");
sound2 = loadSound("sounds/level1_sound2.mp3");
sofia=loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png")
}

function setup() {
createCanvas(1000,600);
sound1.play();


startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

homeButton=createSprite(750,60);
homeButton.addImage(homeImg)
homeButton.scale = 0.2;

playButton=createSprite(750,150);
playButton.addImage(playImg);
playButton.scale = 0.2;

cardboard1=createSprite(10,70,100,20);
cardboard1.shapeColor="brown";

cardboard2=createSprite(105,35,20,150);
cardboard2.shapeColor="brown";

cardboard3=createSprite(175,35,120,20);
cardboard3.shapeColor="brown";

cardboard4=createSprite(150,145,20,120);
cardboard4.shapeColor="brown";

cardboard5=createSprite(100,220,100,20);
cardboard5.shapeColor="brown";

cardboard6=createSprite(60,175,20,100);
cardboard6.shapeColor="brown";

cardboard7=createSprite(210,200,20,150);
cardboard7.shapeColor="brown";

cardboard8=createSprite(250,95,145,20);
cardboard8.shapeColor="brown";

cardboard9=createSprite(280,60,20,50);
cardboard9.shapeColor="brown";

cardboard10=createSprite(75,300,20,100);
cardboard10.shapeColor="brown";

cardboard11=createSprite(2,160,100,20);
cardboard11.shapeColor="brown";

cardboard12=createSprite(370,40,100,20);
cardboard12.shapeColor="brown";

cardboard13=createSprite(370,150,200,20);
cardboard13.shapeColor="brown";

cardboard14=createSprite(280,260,20,100);
cardboard14.shapeColor="brown";

cardboard15=createSprite(365,260,100,20);
cardboard15.shapeColor="brown";

cardboard16=createSprite(295,315,150,20);
cardboard16.shapeColor="brown";

cardboard17=createSprite(360,95,20,90);
cardboard17.shapeColor="brown";

cardboard18=createSprite(30,290,80,20);
cardboard18.shapeColor="brown";

cardboard19=createSprite(150,290,20,100);
cardboard19.shapeColor="brown";

cardboard20=createSprite(270,360,100,20);
cardboard20.shapeColor="brown";

cardboard21=createSprite(10,350,20,100);
cardboard21.shapeColor="brown";

cardboard22=createSprite(215,355,20,100);
cardboard22.shapeColor="brown";

startButton.visible = false;
storyButton.visible = false;
homeButton.visible = false;
playButton.visible = false;
security = new Security();
cardboardhide();

}

function draw() {

    if(gameState === serve)
    {
        background(backgroundImg);  
        startButton.visible = true;
        storyButton.visible = true;
        if(mousePressedOver(startButton))
            {
            gameState = level1start;
          
            }
        if(mousePressedOver(storyButton))
            {
            gameState = story;
    
            }    }
    else if (gameState === story)
    {
        background(infoSlideImg);
        storyButton.visible = false;
        startButton.visible=false;
        homeButton.visible = true;

    }
    else if (gameState === level1start)
    {
        background(level1Img);
        sound1.stop();
        sound2.play();
        startButton.visible = false;
        storyButton.visible = false;
        playButton.visible = true;
        homeButton.visible = true;
        if(mousePressedOver(playButton))
        {
            gameState = level1play;
        }

    }
    else if(gameState === level1play)
    {
        background(level1bgImg);
        playButton.visible = false;
        security.display();
        clues();
    }
    else if(gameState === level1win)
    {
        background(level2Img);
        sound2.stop();
        startButton.visible = false;
        storyButton.visible = false;
        playButton.visible = true;
        if(mousePressedOver(playButton))
        {
            gameState = level2play;
        }
    }
    else if(gameState === level1end)
    {
        background(playagainImg);
        sound2.stop();
        startButton.visible = false;
        storyButton.visible = false;
        playButton.visible = true;
        security.hide();
        if(mousePressedOver(playButton))
        {
            gameState = level1play;
            security = new Security();
            security.display()

        }
       
      
    }
    else if (gameState === level2play)
    {
        background(level1bgImg);
        play2();
    }
    if(mousePressedOver(homeButton))
    {
        gameState = serve;
        homeButton.visible = false;
        playButton.visible = false;
        security.hide();
        cardboardhide()
         }








drawSprites();
console.log(gameState)
}



function play2(){
    playButton.visible = false;
player=createSprite(200,100,50,50)
// player.addAnimation("pl",sofia)

    if(keyDown("right_arrow")){
        player.x = player.x +1;
        }
// maze code
cardboard1.visible = true;
cardboard2.visible = true;
cardboard3.visible = true;
cardboard4.visible = true;
cardboard5.visible = true;
cardboard6.visible = true;
cardboard7.visible = true;
cardboard8.visible = true;
cardboard9.visible = true;
cardboard10.visible = true;
cardboard11.visible = true;
cardboard12.visible = true;
cardboard13.visible = true;
cardboard14.visible = true;
cardboard15.visible = true;
cardboard16.visible = true;
cardboard17.visible = true;
cardboard18.visible = true;
cardboard19.visible = true;
cardboard20.visible = true;
cardboard21.visible = true;
cardboard22.visible = true;
}







function clues() {
    
fill("white")
textSize(15)
text("I E Z B O M", 100,50)
fill("lightblue")
text("Hint: It bites you then you are infected !!", 100,70)

fill("white")
textSize(15)
text("M P R E I V A", 700,150)
fill("lightblue")
text("Hint: Performs a particular task !!", 700,170)

fill("white")
textSize(15)
text("L E S E K O N T", 100,250)
fill("lightblue")
text("Hint: Stores all information !!", 100,270)

fill("white")
textSize(15)
text("RDCAALU", 700,150)
fill("lightblue")
text("Hint: It sucks blood !!", 700,170)

fill("white")
textSize(15)
text("THCIW", 700,150)
fill("lightblue")
text("Hint: It stays on the banyan tree at night !!", 700,170)

fill("white")
textSize(15)
text("M P R E I V A", 700,150)
fill("lightblue")
text("Hint: Performs a particular task !!", 700,170)


}

function cardboardhide()
{

    cardboard1.visible = false;
    cardboard2.visible = false;
    cardboard3.visible = false;
    cardboard4.visible = false;
    cardboard5.visible = false;
    cardboard6.visible = false;
    cardboard7.visible = false;
    cardboard8.visible = false;
    cardboard9.visible = false;
    cardboard10.visible = false;
    cardboard11.visible = false;
    cardboard12.visible = false;
    cardboard13.visible = false;
    cardboard14.visible = false;
    cardboard15.visible = false;
    cardboard16.visible = false;
    cardboard17.visible = false;
    cardboard18.visible = false;
    cardboard19.visible = false;
    cardboard20.visible = false;
    cardboard21.visible = false;
    cardboard22.visible = false;

}
// maths problem
// 4(10+15/5*4-2*2)=72
// (I want it to be continuously changing the values whenever I restart the game)

//riddles
// I am wrapped but I am not a gift, I am kept neatly in a chamber and archaeologists find me as a great tressure. What am I?
// Answer- Mummy
// The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is is?
// Answer- Coffin
//(Riddles can be same even when I restart the game)
