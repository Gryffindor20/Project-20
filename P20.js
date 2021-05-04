var bgImg;
var cat, catImg, catImg2;
var rat, ratImg, ratImg2;

function preload() {
     bgImg = loadImage("images/garden.png");
     catImg = loadAnimation("images/cat1.png");
     catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
     ratImg = loadAnimation("images/mouse1.png");
     ratImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800, 700);
    cat.addAnimation("cat1",catImg);
    cat.addAnimation("celebrate", catImg2);
    cat.scale = 0.2;

    rat = createSprite(100, 700);
    rat.addAnimation("rat1", ratImg);
    rat.scale = 0.17;
}

function draw() {
    background(bgImg);

    if (cat.x - rat.x < (cat.width - rat.width)/2)
    {
      rat.changeAnimation("rat1");
      cat.changeAnimation("cat1");
    }
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    rat.addAnimation("mouseTeasing", ratImg2);
    rat.changeAnimation("mouseTeasing");
    rat.frameDelay = 25;

    cat.x = cat.x - 20;
    cat.changeAnimation("celebrate");
  }

}
