function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목");
  title.position(20, 0);

  canvas = createCanvas(400, 400);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50);
}

var sketch = function(p) {
  var metaballs;
  var options = {
    cCount: 10,
    p: p,
    cellSize: 10
  };
  p.setup = function() {
    p.createCanvas(600, 600);
    metaballs = new Metaball(options);
    //p.noLoop();
  };
  p.draw = function() {
    p.background('gray');
    metaballs.draw();
  };
};
new p5(sketch);
function Metaball(options) {
  this.p = options.p;
  this.cellSize = options.cellSize || 10;
  this.circles = options.circles || (function(count) {
    var circles = [];
    var options = {
      p: this.p
    };
    for (var i = 0; i < count; i++) {
      var c = new Circle(options);
      circles.push(c);
    }
    return circles;
  }.bind(this))(options.cCount || 10);
  this.threshold = options.threshold || 1.0;
}
Metaball.prototype.draw = function() {
  this.recalculate();
  this.drawCell();
  this.drawCircle();
}
Metaball.prototype.drawCircle = function (){
  for (var i = 0; i < this.circles.length; i++) {
    this.circles[i].draw();
  }
}
Metaball.prototype.drawCell = function (){
  for (var i = 0; i < this.samples.length; i++) {
    for (var j = 0; j < this.samples[i].length; j++) {
      var sample = this.samples[i][j];

      var x = j * this.cellSize;
      var y = i * this.cellSize;
      this.thresholdedSamples[i][j] ? this.p.fill(0) : this.p.fill(255);
      this.p.noStroke();
      this.p.rect(x - 2, y - 2, this.cellSize, this.cellSize);
    }
  }
}
Metaball.prototype.recalculate = function (){
  this.samples = sample({
    minX: 0,
    maxX: this.p.width,
    stepX: this.cellSize,
    minY: 0,
    maxY: this.p.height,
    stepY: this.cellSize,
    fn: function(x, y) {
      return metaball(x, y, this.circles);
    }.bind(this)
  });
  this.thresholdedSamples = threshold(this.samples, this.threshold);
}

function Circle(options) {
  this.position = options.position ? options.position.get() : new p5.Vector(Math.random() * 200, Math.random() * 200);
  this.radius = options.radius || 20 + Math.random() * 30;
  this.p = options.p;
  this.velocity = options.velocity ? options.velocity.get() : new p5.Vector((Math.random() - 0.5) * 2 , (Math.random() - 0.5) * 2 );
  this.acceleration = options.acceleration ? options.acceleration.get() : new p5.Vector((Math.random() - 0.5) * 0.1 , (Math.random() - 0.5) * 0.1 );
  this.reflect = options.reflect || true;
}

Circle.prototype.update = function (){
  //this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  if(this.reflect){
    if(this.position.x + this.velocity.x < 0 || this.position.x + this.velocity.x > this.p.width){
      this.velocity.x *= -1;
    }
    if(this.position.y + this.velocity.y < 0 || this.position.y + this.velocity.y > this.p.height){
      this.velocity.y *= -1;
    }
  }

  this.position.add(this.velocity);
}

Circle.prototype.draw = function (){
  this.update();
  this.p.noFill();
  this.p.stroke(255);
  this.p.ellipse(this.position.x, this.position.y, this.radius, this.radius);
}

var sample = function (options){
  var minX = options.minX;
  var maxX = options.maxX;
  var stepX = options.stepX;

  var minY = options.minY;
  var maxY = options.maxY;
  var stepY = options.stepY;

  var fn = options.fn;

  var numRows = Math.ceil(maxY / stepY);
  var numCols = Math.ceil(maxX / stepX);

  var samples = [];

  for (var row = 0; row <= numRows; row++) {
    var y = row * stepY;
    samples.push([]);
    for (var col = 0; col <= numCols; col++) {
      var x = col * stepX;
      samples[row].push(fn(x, y));
    }
  };

  return samples;
}

var metaball = function(x, y, circles) {
  var sum = 0;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var dx = x - c.position.x;
    var dy = y - c.position.y;

    var d2 = dx * dx + dy * dy;
    sum += c.radius * c.radius / d2;
  }
  return sum;
};

var threshold = function(grid, value) {
  var ret = [];

  for (var i = 0; i < grid.length; i++) {
    ret.push([]);
    for (var j = 0; j < grid[i].length; j++) {
      ret[i].push(grid[i][j] > value);
    }
  }

  return ret;
};
