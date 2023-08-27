let img;

function preload(){
  img = loadImage('last copy.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background("#00ACF5");

  //월드를 움직이도록 드래그
  orbitControl();

  normalMaterial();

  
  translate(0,0,-50);
  for(let i=0; i<100; i++){
    translate (0,0,i);
    push();
    texture(img);
    plane(i*5);
    pop();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

