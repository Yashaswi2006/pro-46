var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10;
var obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20;
var obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30;
var obs31,obs32,obs33,obs34,obs35,obs36,obs37,obs38,obs39,obs40;
var obs41,obs42,obs43;
function preload() {


}

function setup() {
  
createCanvas(1200,600);

  obs1 = createSprite(600,1,1200,20);
  obs1.shapeColor="Black";

  obs2 = createSprite(1200,1,20,1200);
  obs2.shapeColor="Black";
  
  obs3 = createSprite(1,1,20,1200);
  obs3.shapeColor="Black";
  
  obs4 = createSprite(600,595,1200,20);
  obs4.shapeColor="Black";
  
  obs5 = createSprite(120,56,100,20);
  obs5.shapeColor="Black";
  
  obs6 = createSprite(80,120,20,120);
  obs6.shapeColor="Black";
  
  obs7 = createSprite(119,188,100,20);
  obs7.shapeColor="Black";
  
  obs8 = createSprite(70,260,200,20);
  obs8.shapeColor="Black";
  
  obs9 = createSprite(160,300,20,100);
  obs9.shapeColor="Black";
  
  obs10 = createSprite(70,350,200,20);
  obs10.shapeColor="Black";

  obs11 = createSprite(82,520,20,150);
  obs11.shapeColor="Black";

  obs12 = createSprite(300,57,100,20);
  obs12.shapeColor="Black";

  obs13 = createSprite(360,117,20,140);
  obs13.shapeColor="Black";

  obs14 = createSprite(235,305,20,100);
  obs14.shapeColor="Black";

  obs15 = createSprite(269,188,200,20);
  obs15.shapeColor="Black";

  obs16 = createSprite(200,433,100,20);
  obs16.shapeColor="Black";

  obs17 = createSprite(177,544,20,100);
  obs17.shapeColor="Black";

  obs18 = createSprite(456,109,20,200);
  obs18.shapeColor="Black";

  obs19 = createSprite(560,100,200,20);
  obs19.shapeColor="Black";

  obs20 = createSprite(352,290,100,20);
  obs20.shapeColor="Black";

  obs21 = createSprite(340,410,20,100);
  obs21.shapeColor="Black";

  obs22 = createSprite(286,529,100,20);
  obs22.shapeColor="Black";

  obs23 = createSprite(429,422,20,150);
  obs23.shapeColor="Black";

  obs24 = createSprite(520,357,180,20);
  obs24.shapeColor="Black";

  obs25 = createSprite(617,417,20,140);
  obs25.shapeColor="Black";

  obs26 = createSprite(577,485,100,20);
  obs26.shapeColor="Black";

  obs27 = createSprite(548,230,20,120);
  obs27.shapeColor="Black";

  obs28 = createSprite(697,510,20,150);
  obs28.shapeColor="Black";

  obs29 = createSprite(720,236,180,20);
  obs29.shapeColor="Black";

  obs30 = createSprite(750,228,20,200);
  obs30.shapeColor="Black";

  obs31 = createSprite(820,70,200,20);
  obs31.shapeColor="Black";

  obs32 = createSprite(847,395,200,20);
  obs32.shapeColor="Black";

  obs33 = createSprite(870,241,20,150);
  obs33.shapeColor="Black";

  obs34 = createSprite(808,450,20,100);
  obs34.shapeColor="Black";

  obs35 = createSprite(910,310,100,20);
  obs35.shapeColor="Black";

  obs36 = createSprite(1026,391,20,200);
  obs36.shapeColor="Black";

  obs37 = createSprite(969,481,100,20);
  obs37.shapeColor="Black";

  obs38 = createSprite(1114,537,20,100);
  obs38.shapeColor="Black";

  obs39 = createSprite(1050,217,150,20);
  obs39.shapeColor="Black";

  obs40 = createSprite(1115,313,20,180);
  obs40.shapeColor="Black";

  obs41 = createSprite(1050,75,100,20);
  obs41.shapeColor="Black";

  obs42 = createSprite(1100,115,20,100);
  obs42.shapeColor="Black";

  obs43 = createSprite(1000,145,20,20);
  obs43.shapeColor="Black";
}

function draw() {
  background("blue");
text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}