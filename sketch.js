var ball,paddle,edges;
var ballImage,paddleImage;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,10,10);
  paddle = createSprite(350,200,10,90);
  /* assign the images to the sprites */
  ball.addImage("ball",ballImage);
  ball.scale = 0.3;
  paddle.addImage("paddle",paddleImage);
  paddle.scale = 0.8;
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(154,255,222);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.bounceOff(edges);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
   ball.bounceOff(paddle,randomVelocity);
  /* Prevent the paddle from going out of the edges */ 
  
  paddle.velocityY = 0;
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -7;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 7;
  }
  drawSprites();
  
}

function randomVelocity(){
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = random(5,9);
}

