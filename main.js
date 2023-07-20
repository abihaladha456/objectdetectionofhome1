img="";
function preload(){
    img=loadImage("bottle.png");
}
function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
}
function draw(){
    image(img , 0 , 0 , 640 , 420);
    fill("#030bfc");
    text("Bottle" , 45 , 75);
    noFill();
    stroke("#030bfc");
    rect(30 , 60 , 450 , 350);
}
