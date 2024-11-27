var img;
var img2;
var img3
var img4
var img5
var img6 


function preload() {
  img= loadImage("itachi.gif");
  img2= loadImage("kurapika.gif");
  img3= loadImage("mello.gif");
  img4= loadImage("mello2.gif");
  img5= loadImage("shinji.gif");
  img6= loadImage("howl.gif");
  img7= loadImage("risotto.gif");
  pressed = false

}
function setup() {
  imgScalar = 3072/1728;
  imgSize = 400;
  img2Scalar = 4096/2731;
  img2Size = 100;
  img3Scalar = 4096/2731;
  img3Size = 50;
  createCanvas(windowWidth, windowHeight);
background(random(0,225),random(0,225),random(0,225));
  push();
  image(img,random(0,windowWidth-10),random(0,windowHeight-10),random(100,108,),random(10,72))
  pop();

  push();
  image(img2,random(0,windowWidth-10),random(0,windowHeight-20),random(100,108,),random(10,60))
  pop();

  push();
  image(img3,random(0,windowWidth-100),random(0,windowHeight-150),random(100,108,),random(100,720))
  pop();

  push();

  image(img4,random(0,windowWidth-100),random(0,windowHeight-50),random(100,100,),random(100,720))
  pop();

  push();
  image(img5,random(0,windowWidth-100),random(0,windowHeight-50),random(100,108,),random(100,20))
  pop();

  push();
  image(img6,random(0,windowWidth-100),random(0,windowHeight-100),random(100,1080,),random(100,720))
  pop();

  push();
  image(img7,random(0,windowWidth-100),random(0,windowHeight-100),random(400,400,),random(100,600))
  pop();


}

function draw() {

}
