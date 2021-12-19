
var gameState = 0;

var BG_main;

var hitman,Hitman;

var Start,start;

function setup() {

	createCanvas(300, 200);

	start = createSprite(width/2,height/2,70,20);
	start.setCollider("rectangle",0,0,start.width * 4,start.height * 4);
	start.addImage("start",Start);
	start.scale = 0.3
	start.debug = true;

	Hitman = createSprite(width/2,height/2,40,20);
	Hitman.addImage("hit",hitman);
	Hitman.scale = 0.09;
  
}

function preload()
{
	BG_main = loadImage("VFX/BG_start.png");

	Start = loadImage("VFX/start.png");

	hitman = loadImage("VFX/hitman.png");
}


function draw() {

	if(gameState === 0){
  background(BG_main);

  Hitman.visible = false;
	}

	if(mousePressedOver(start)){
		gameState = 1;
	}

	if(gameState === 1){
		background(0);
		start.visible = false;
        Hitman.visible = true;
	}
  
  drawSprites();
 
}



