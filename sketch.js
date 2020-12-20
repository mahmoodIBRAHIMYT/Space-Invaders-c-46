var arrowimg,playerimg,Enemyimg ,bgimg;
var player,edges,EnemyG,WeaponG,score =0;

function preload(){
  arrowimg =loadImage("fb (2).png") 
 Enemyimg = loadImage("a1.png") 
  bgimg=loadImage("bg1.jpg")
  playerimg =loadAnimation("astrounat-removebg-preview (2).png","astrounat-removebg-preview (3).png","astrounat-removebg-preview (4).png","astrounat-removebg-preview (5).png")
}
function setup() {
  createCanvas(windowWidth,windowHeight); 
  background= createSprite(width/2,height/2,width,height);
  background.addImage(bgimg) 
 background.scale =0.75;

  edges=createEdgeSprites();
  player=createSprite(70,height-30,70,70)
  player.addAnimation("player",playerimg);
  player.velocityX =3; 
  EnemyG=new Group();
  WeaponG=new Group();
  
  
}

function draw() {
 // background("black")
 /*
  background.velocityX = -3;
  if(background.x<900){
    background.x=background.width/2;
  } 
  console.log(background.x)
  console.log(background.width)
  */
 
  player.bounceOff(edges);
  if(keyDown("space")){
    Weapon();
  } 
  for(var i =0;i<EnemyG.length;i++){
    if(EnemyG.get(i).isTouching(WeaponG)){
      EnemyG.get(i).destroy();
      score= score+1
    }
  } 
   for(var i =0;i<EnemyG.length;i++){
    if(EnemyG.get(i).isTouching(player)){
      player.destroy();
    }
  } 
  Enemy();
  drawSprites();
  fill("red");
   text("SCORE: "+score ,width/2,30);

  
     if(EnemyG.isTouching(player)){
        gameState = END;
} 
function Enemy(){
  if(frameCount %20 === 0){
    var enemy =createSprite(width/2,-5,20,20);
    enemy.addImage(Enemyimg) 
     enemy.scale = 0.5;
    enemy.x =Math.round(random(0,width))
    enemy.velocityY = 5; 
    EnemyG.add(enemy); 
    
  }
}
function Weapon(){
 if(frameCount %10 === 0){
  var weapon = createSprite(70,320,5,20);
   weapon.addImage(arrowimg)
  weapon.x = player.x+20; 
   weapon.y = player.y; 
   weapon.scale = 1.0;
  weapon.velocityY = -10; 
   WeaponG.add(weapon); 
}
}  
  
}