let packManMidoree = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; i++){
    packManMidoree[i] = new packMan(random(0, width - 5*17), random(0, height - 5*17), 5);
  }
}

function draw() {
  background(225, 255, 0);
  strokeWeight(2);
  stroke(random(255), random(255), random(255));

  for (let i = 0; i < packManMidoree.length; i++){
    packManMidoree[i].update();
    packManMidoree[i].display();
  }
}

function mousePressed() {}

class packMan {
  constructor(x, y, s) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);

    this.pixelMidoree = s;
    // this.acc.mult(this.pixelMidoree);

    frameRate(random(50));
  }

  update() {

    this.dice = int(random(4));

    // this.acc = createVector(random(-0.2, 0.2), random(-0.2, 0.2));
    if(this.dice == 0 && this.pos.x > 0){
      this.vel.x += this.pixelMidoree;
    } else if ( this. dice == 1 && this.pos.y > 0){
      this.vel.y += this.pixelMidoree;
    } else if ( this.dice == 2 && this.pos.x < width - (this.pixelMidoree*17)){
     this.vel.x -= this.pixelMidoree;
    } else if ( this.dice == 3 && this.pos.y < height - (this.pixelMidoree*17)){
     this.vel.y -= this.pixelMidoree;
    }

    this.vel.limit(this.pixelMidoree);

    this.vel.add(this.acc);
    this.pos.add(this.vel);


  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    line(this.pixelMidoree * 7, this.pixelMidoree * 1, this.pixelMidoree * 11, this.pixelMidoree * 1)
    line(this.pixelMidoree * 11, this.pixelMidoree * 1, this.pixelMidoree * 11, this.pixelMidoree * 2)
    line(this.pixelMidoree * 11, this.pixelMidoree * 2, this.pixelMidoree * 13, this.pixelMidoree * 2)
    line(this.pixelMidoree * 13, this.pixelMidoree * 2, this.pixelMidoree * 13, this.pixelMidoree * 3)
    line(this.pixelMidoree * 13, this.pixelMidoree * 3, this.pixelMidoree * 14, this.pixelMidoree * 3)
    line(this.pixelMidoree * 14, this.pixelMidoree * 3, this.pixelMidoree * 14, this.pixelMidoree * 4)
    line(this.pixelMidoree * 14, this.pixelMidoree * 4, this.pixelMidoree * 15, this.pixelMidoree * 4)
    line(this.pixelMidoree * 15, this.pixelMidoree * 4, this.pixelMidoree * 15, this.pixelMidoree * 5)
    line(this.pixelMidoree * 15, this.pixelMidoree * 5, this.pixelMidoree * 16, this.pixelMidoree * 5)
    line(this.pixelMidoree * 16, this.pixelMidoree * 5, this.pixelMidoree * 16, this.pixelMidoree * 8)
    line(this.pixelMidoree * 16, this.pixelMidoree * 8, this.pixelMidoree * 17, this.pixelMidoree * 8)
    line(this.pixelMidoree * 17, this.pixelMidoree * 8, this.pixelMidoree * 17, this.pixelMidoree * 14)
    line(this.pixelMidoree * 17, this.pixelMidoree * 14, this.pixelMidoree * 16, this.pixelMidoree * 14)
    line(this.pixelMidoree * 16, this.pixelMidoree * 14, this.pixelMidoree * 16, this.pixelMidoree * 15)
    line(this.pixelMidoree * 16, this.pixelMidoree * 15, this.pixelMidoree * 15, this.pixelMidoree * 15)
    line(this.pixelMidoree * 15, this.pixelMidoree * 15, this.pixelMidoree * 15, this.pixelMidoree * 16)
    line(this.pixelMidoree * 15, this.pixelMidoree * 16, this.pixelMidoree * 13, this.pixelMidoree * 16)
    line(this.pixelMidoree * 13, this.pixelMidoree * 16, this.pixelMidoree * 13, this.pixelMidoree * 15)
    line(this.pixelMidoree * 13, this.pixelMidoree * 15, this.pixelMidoree * 12, this.pixelMidoree * 15)
    line(this.pixelMidoree * 12, this.pixelMidoree * 15, this.pixelMidoree * 12, this.pixelMidoree * 14)
    line(this.pixelMidoree * 12, this.pixelMidoree * 14, this.pixelMidoree * 11, this.pixelMidoree * 14)
    line(this.pixelMidoree * 11, this.pixelMidoree * 14, this.pixelMidoree * 11, this.pixelMidoree * 15)
    line(this.pixelMidoree * 11, this.pixelMidoree * 15, this.pixelMidoree * 10, this.pixelMidoree * 15)
    line(this.pixelMidoree * 10, this.pixelMidoree * 15, this.pixelMidoree * 10, this.pixelMidoree * 16)
    line(this.pixelMidoree * 10, this.pixelMidoree * 16, this.pixelMidoree * 8, this.pixelMidoree * 16)
    line(this.pixelMidoree * 8, this.pixelMidoree * 16, this.pixelMidoree * 8, this.pixelMidoree * 15)
    line(this.pixelMidoree * 8, this.pixelMidoree * 15, this.pixelMidoree * 7, this.pixelMidoree * 15)
    line(this.pixelMidoree * 7, this.pixelMidoree * 15, this.pixelMidoree * 7, this.pixelMidoree * 14)
    line(this.pixelMidoree * 7, this.pixelMidoree * 14, this.pixelMidoree * 6, this.pixelMidoree * 14)
    line(this.pixelMidoree * 6, this.pixelMidoree * 14, this.pixelMidoree * 6, this.pixelMidoree * 15)
    line(this.pixelMidoree * 6, this.pixelMidoree * 15, this.pixelMidoree * 5, this.pixelMidoree * 15)
    line(this.pixelMidoree * 5, this.pixelMidoree * 15, this.pixelMidoree * 5, this.pixelMidoree * 16)
    line(this.pixelMidoree * 5, this.pixelMidoree * 16, this.pixelMidoree * 3, this.pixelMidoree * 16)
    line(this.pixelMidoree * 3, this.pixelMidoree * 16, this.pixelMidoree * 3, this.pixelMidoree * 15)
    line(this.pixelMidoree * 3, this.pixelMidoree * 15, this.pixelMidoree * 2, this.pixelMidoree * 15)
    line(this.pixelMidoree * 2, this.pixelMidoree * 15, this.pixelMidoree * 2, this.pixelMidoree * 14)
    line(this.pixelMidoree * 2, this.pixelMidoree * 14, this.pixelMidoree * 1, this.pixelMidoree * 14)
    line(this.pixelMidoree * 1, this.pixelMidoree * 14, this.pixelMidoree * 1, this.pixelMidoree * 8)
    line(this.pixelMidoree * 1, this.pixelMidoree * 8, this.pixelMidoree * 2, this.pixelMidoree * 8)
    line(this.pixelMidoree * 2, this.pixelMidoree * 8, this.pixelMidoree * 2, this.pixelMidoree * 5)
    line(this.pixelMidoree * 2, this.pixelMidoree * 5, this.pixelMidoree * 3, this.pixelMidoree * 5)
    line(this.pixelMidoree * 3, this.pixelMidoree * 5, this.pixelMidoree * 3, this.pixelMidoree * 4)
    line(this.pixelMidoree * 3, this.pixelMidoree * 4, this.pixelMidoree * 4, this.pixelMidoree * 4)
    line(this.pixelMidoree * 4, this.pixelMidoree * 4, this.pixelMidoree * 4, this.pixelMidoree * 3)
    line(this.pixelMidoree * 4, this.pixelMidoree * 3, this.pixelMidoree * 5, this.pixelMidoree * 3)
    line(this.pixelMidoree * 5, this.pixelMidoree * 3, this.pixelMidoree * 5, this.pixelMidoree * 2)
    line(this.pixelMidoree * 5, this.pixelMidoree * 2, this.pixelMidoree * 7, this.pixelMidoree * 2)
    line(this.pixelMidoree * 7, this.pixelMidoree * 2, this.pixelMidoree * 7, this.pixelMidoree * 1)

    line(this.pixelMidoree * 7, this.pixelMidoree * 2, this.pixelMidoree * 11, this.pixelMidoree * 2)
    line(this.pixelMidoree * 11, this.pixelMidoree * 2, this.pixelMidoree * 11, this.pixelMidoree * 3)
    line(this.pixelMidoree * 11, this.pixelMidoree * 3, this.pixelMidoree * 13, this.pixelMidoree * 3)
    line(this.pixelMidoree * 13, this.pixelMidoree * 3, this.pixelMidoree * 13, this.pixelMidoree * 4)
    line(this.pixelMidoree * 13, this.pixelMidoree * 4, this.pixelMidoree * 14, this.pixelMidoree * 4)
    line(this.pixelMidoree * 14, this.pixelMidoree * 4, this.pixelMidoree * 14, this.pixelMidoree * 5)
    line(this.pixelMidoree * 14, this.pixelMidoree * 5, this.pixelMidoree * 15, this.pixelMidoree * 5)
    line(this.pixelMidoree * 15, this.pixelMidoree * 5, this.pixelMidoree * 15, this.pixelMidoree * 8)
    line(this.pixelMidoree * 15, this.pixelMidoree * 8, this.pixelMidoree * 16, this.pixelMidoree * 8)
    line(this.pixelMidoree * 16, this.pixelMidoree * 8, this.pixelMidoree * 16, this.pixelMidoree * 14)
    line(this.pixelMidoree * 16, this.pixelMidoree * 14, this.pixelMidoree * 15, this.pixelMidoree * 14)
    line(this.pixelMidoree * 15, this.pixelMidoree * 14, this.pixelMidoree * 15, this.pixelMidoree * 15)
    line(this.pixelMidoree * 15, this.pixelMidoree * 15, this.pixelMidoree * 13, this.pixelMidoree * 15)
    line(this.pixelMidoree * 13, this.pixelMidoree * 15, this.pixelMidoree * 13, this.pixelMidoree * 14)
    line(this.pixelMidoree * 13, this.pixelMidoree * 14, this.pixelMidoree * 12, this.pixelMidoree * 14)
    line(this.pixelMidoree * 12, this.pixelMidoree * 14, this.pixelMidoree * 12, this.pixelMidoree * 13)
    line(this.pixelMidoree * 12, this.pixelMidoree * 13, this.pixelMidoree * 11, this.pixelMidoree * 13)
    line(this.pixelMidoree * 11, this.pixelMidoree * 13, this.pixelMidoree * 11, this.pixelMidoree * 14)
    line(this.pixelMidoree * 11, this.pixelMidoree * 14, this.pixelMidoree * 10, this.pixelMidoree * 14)
    line(this.pixelMidoree * 10, this.pixelMidoree * 14, this.pixelMidoree * 10, this.pixelMidoree * 15)
    line(this.pixelMidoree * 10, this.pixelMidoree * 15, this.pixelMidoree * 8, this.pixelMidoree * 15)
    line(this.pixelMidoree * 8, this.pixelMidoree * 15, this.pixelMidoree * 8, this.pixelMidoree * 14)
    line(this.pixelMidoree * 8, this.pixelMidoree * 14, this.pixelMidoree * 7, this.pixelMidoree * 14)
    line(this.pixelMidoree * 7, this.pixelMidoree * 14, this.pixelMidoree * 7, this.pixelMidoree * 13)
    line(this.pixelMidoree * 7, this.pixelMidoree * 13, this.pixelMidoree * 6, this.pixelMidoree * 13)
    line(this.pixelMidoree * 6, this.pixelMidoree * 13, this.pixelMidoree * 6, this.pixelMidoree * 14)
    line(this.pixelMidoree * 6, this.pixelMidoree * 14, this.pixelMidoree * 5, this.pixelMidoree * 14)
    line(this.pixelMidoree * 5, this.pixelMidoree * 14, this.pixelMidoree * 5, this.pixelMidoree * 15)
    line(this.pixelMidoree * 5, this.pixelMidoree * 15, this.pixelMidoree * 3, this.pixelMidoree * 15)
    line(this.pixelMidoree * 3, this.pixelMidoree * 15, this.pixelMidoree * 3, this.pixelMidoree * 14)
    line(this.pixelMidoree * 3, this.pixelMidoree * 14, this.pixelMidoree * 2, this.pixelMidoree * 14)
    line(this.pixelMidoree * 2, this.pixelMidoree * 14, this.pixelMidoree * 2, this.pixelMidoree * 8)
    line(this.pixelMidoree * 2, this.pixelMidoree * 8, this.pixelMidoree * 3, this.pixelMidoree * 8)
    line(this.pixelMidoree * 3, this.pixelMidoree * 8, this.pixelMidoree * 3, this.pixelMidoree * 5)
    line(this.pixelMidoree * 3, this.pixelMidoree * 5, this.pixelMidoree * 4, this.pixelMidoree * 5)
    line(this.pixelMidoree * 4, this.pixelMidoree * 5, this.pixelMidoree * 4, this.pixelMidoree * 4)
    line(this.pixelMidoree * 4, this.pixelMidoree * 4, this.pixelMidoree * 5, this.pixelMidoree * 4)
    line(this.pixelMidoree * 5, this.pixelMidoree * 4, this.pixelMidoree * 5, this.pixelMidoree * 3)
    line(this.pixelMidoree * 5, this.pixelMidoree * 3, this.pixelMidoree * 7, this.pixelMidoree * 3)
    line(this.pixelMidoree * 7, this.pixelMidoree * 3, this.pixelMidoree * 7, this.pixelMidoree * 2)

    line(this.pixelMidoree * 6, this.pixelMidoree * 5, this.pixelMidoree * 8, this.pixelMidoree * 5)
    line(this.pixelMidoree * 8, this.pixelMidoree * 5, this.pixelMidoree * 8, this.pixelMidoree * 6)
    line(this.pixelMidoree * 8, this.pixelMidoree * 6, this.pixelMidoree * 9, this.pixelMidoree * 6)
    line(this.pixelMidoree * 9, this.pixelMidoree * 6, this.pixelMidoree * 9, this.pixelMidoree * 9)
    line(this.pixelMidoree * 9, this.pixelMidoree * 9, this.pixelMidoree * 8, this.pixelMidoree * 9)
    line(this.pixelMidoree * 8, this.pixelMidoree * 9, this.pixelMidoree * 8, this.pixelMidoree * 10)
    line(this.pixelMidoree * 8, this.pixelMidoree * 10, this.pixelMidoree * 6, this.pixelMidoree * 10)
    line(this.pixelMidoree * 6, this.pixelMidoree * 10, this.pixelMidoree * 6, this.pixelMidoree * 9)
    line(this.pixelMidoree * 6, this.pixelMidoree * 9, this.pixelMidoree * 5, this.pixelMidoree * 9)
    line(this.pixelMidoree * 5, this.pixelMidoree * 9, this.pixelMidoree * 5, this.pixelMidoree * 6)
    line(this.pixelMidoree * 5, this.pixelMidoree * 6, this.pixelMidoree * 6, this.pixelMidoree * 6)
    line(this.pixelMidoree * 6, this.pixelMidoree * 6, this.pixelMidoree * 6, this.pixelMidoree * 5)

    line(this.pixelMidoree * 7, this.pixelMidoree * 7, this.pixelMidoree * 9, this.pixelMidoree * 7)
    line(this.pixelMidoree * 7, this.pixelMidoree * 7, this.pixelMidoree * 7, this.pixelMidoree * 9)
    line(this.pixelMidoree * 7, this.pixelMidoree * 9, this.pixelMidoree * 8, this.pixelMidoree * 9)

    line(this.pixelMidoree * 12, this.pixelMidoree * 5, this.pixelMidoree * 14, this.pixelMidoree * 5)
    line(this.pixelMidoree * 14, this.pixelMidoree * 5, this.pixelMidoree * 14, this.pixelMidoree * 6)
    line(this.pixelMidoree * 14, this.pixelMidoree * 6, this.pixelMidoree * 15, this.pixelMidoree * 6)
    line(this.pixelMidoree * 15, this.pixelMidoree * 6, this.pixelMidoree * 15, this.pixelMidoree * 9)
    line(this.pixelMidoree * 15, this.pixelMidoree * 9, this.pixelMidoree * 14, this.pixelMidoree * 9)
    line(this.pixelMidoree * 14, this.pixelMidoree * 9, this.pixelMidoree * 14, this.pixelMidoree * 10)
    line(this.pixelMidoree * 14, this.pixelMidoree * 10, this.pixelMidoree * 12, this.pixelMidoree * 10)
    line(this.pixelMidoree * 12, this.pixelMidoree * 10, this.pixelMidoree * 12, this.pixelMidoree * 9)
    line(this.pixelMidoree * 12, this.pixelMidoree * 9, this.pixelMidoree * 11, this.pixelMidoree * 9)
    line(this.pixelMidoree * 11, this.pixelMidoree * 9, this.pixelMidoree * 11, this.pixelMidoree * 6)
    line(this.pixelMidoree * 11, this.pixelMidoree * 6, this.pixelMidoree * 12, this.pixelMidoree * 6)
    line(this.pixelMidoree * 12, this.pixelMidoree * 6, this.pixelMidoree * 12, this.pixelMidoree * 5)
    line(this.pixelMidoree * 13, this.pixelMidoree * 7, this.pixelMidoree * 15, this.pixelMidoree * 7)
    line(this.pixelMidoree * 13, this.pixelMidoree * 7, this.pixelMidoree * 13, this.pixelMidoree * 9)
    line(this.pixelMidoree * 13, this.pixelMidoree * 9, this.pixelMidoree * 14, this.pixelMidoree * 9)
    this.checkEdge();
    pop();
  }

  checkEdge(){
    if (this.pos.x >= width - (this.pixelMidoree*17)){
      this.vel.x -= this.pixelMidoree * 2;
    } else if ( this.pos.x <= 0 ){
      this.vel.x += this.pixelMidoree * 2;
    } else if ( this.pos.y <= 0 ){
      this.vel.y += this.pixelMidoree *2;
    } else if ( this.pos.x >= height - (this.pixelMidoree*17) ){
      this.vel.y -= this.pixelMidoree *2 ;
    }
  }
}
