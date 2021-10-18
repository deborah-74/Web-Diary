var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};






const particles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  b = new Ball();
a = new Ball();
  c = new Ball();
d = new Ball();
  e = new Ball();
f = new Ball();
  g = new Ball();
h = new Ball();
}

function draw() {
  background(255, 255, 230);
  noFill();

  b.update();
  b.display();
  a.update();
  a.display();
  c.update();
  c.display();
  d.update();
  d.display();
  e.update();
  e.display();
  f.update();
  f.display();
  g.update();
  g.display();
  h.update();
  h.display();

let dist1 = dist(b.position.x, b.position.y, a.position.x, a.position.y);

if(dist1 < windowWidth) {
  stroke(0);
}
else {
  noStroke();
}

  line(b.position.x, b.position.y, a.position.x, a.position.y);
  line(b.position.x, b.position.y, c.position.x, c.position.y);
  line(b.position.x, b.position.y, d.position.x, d.position.y);
  line(b.position.x, b.position.y, e.position.x, e.position.y);
  line(b.position.x, b.position.y, f.position.x, f.position.y);
  line(b.position.x, b.position.y, g.position.x, g.position.y);
  line(b.position.x, b.position.y, h.position.x, h.position.y);

  line(a.position.x, a.position.y, b.position.x, b.position.y);
line(a.position.x, a.position.y, c.position.x, c.position.y);
line(a.position.x, a.position.y, d.position.x, d.position.y);
line(a.position.x, a.position.y, e.position.x, e.position.y);
line(a.position.x, a.position.y, f.position.x, f.position.y);
line(a.position.x, a.position.y, g.position.x, g.position.y);
line(a.position.x, a.position.y, h.position.x, h.position.y);

line(c.position.x, c.position.y, a.position.x, a.position.y);
line(c.position.x, c.position.y, b.position.x, b.position.y);
line(c.position.x, c.position.y, d.position.x, d.position.y);
line(c.position.x, c.position.y, e.position.x, e.position.y);
line(c.position.x, c.position.y, f.position.x, f.position.y);
line(c.position.x, c.position.y, g.position.x, g.position.y);
line(c.position.x, c.position.y, h.position.x, h.position.y);

line(d.position.x, d.position.y, a.position.x, a.position.y);
line(d.position.x, d.position.y, c.position.x, c.position.y);
line(d.position.x, d.position.y, b.position.x, b.position.y);
line(d.position.x, d.position.y, e.position.x, e.position.y);
line(d.position.x, d.position.y, f.position.x, f.position.y);
line(d.position.x, d.position.y, g.position.x, g.position.y);
line(d.position.x, d.position.y, h.position.x, h.position.y);

line(e.position.x, e.position.y, a.position.x, a.position.y);
line(e.position.x, e.position.y, c.position.x, c.position.y);
line(e.position.x, e.position.y, d.position.x, d.position.y);
line(e.position.x, e.position.y, b.position.x, b.position.y);
line(e.position.x, e.position.y, f.position.x, f.position.y);
line(e.position.x, e.position.y, g.position.x, g.position.y);
line(e.position.x, e.position.y, h.position.x, h.position.y);

line(f.position.x, f.position.y, a.position.x, a.position.y);
line(f.position.x, f.position.y, c.position.x, c.position.y);
line(f.position.x, f.position.y, d.position.x, d.position.y);
line(f.position.x, f.position.y, e.position.x, e.position.y);
line(f.position.x, f.position.y, b.position.x, b.position.y);
line(f.position.x, f.position.y, g.position.x, g.position.y);
line(f.position.x, f.position.y, h.position.x, h.position.y);

line(g.position.x, g.position.y, a.position.x, a.position.y);
line(g.position.x, g.position.y, c.position.x, c.position.y);
line(g.position.x, g.position.y, d.position.x, d.position.y);
line(g.position.x, g.position.y, e.position.x, e.position.y);
line(g.position.x, g.position.y, f.position.x, f.position.y);
line(g.position.x, g.position.y, b.position.x, b.position.y);
line(g.position.x, g.position.y, h.position.x, h.position.y);

line(h.position.x, h.position.y, a.position.x, a.position.y);
line(h.position.x, h.position.y, c.position.x, c.position.y);
line(h.position.x, h.position.y, d.position.x, d.position.y);
line(h.position.x, h.position.y, e.position.x, e.position.y);
line(h.position.x, h.position.y, f.position.x, f.position.y);
line(h.position.x, h.position.y, g.position.x, g.position.y);
line(h.position.x, h.position.y, b.position.x, b.position.y);

  fill(255, 255, 230);
  noStroke();
    let distance = dist(b.position.x, b.position.y, a.position.x, a.position.y);

  rect(windowWidth/9, windowHeight/3.8, windowWidth/1.3, windowHeight/3.2);

  stroke(0);
  ellipse(mouseX, mouseY, 50, 50);
}

class Ball {
  constructor() {
    this.position = new createVector(random(25,100), random(25,100));
    this.velocity = new createVector(random(-5,5), random(-5,5));
  }

  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);

    if ((this.position.x > width-25) || (this.position.x < 25)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > (height)-75) || (this.position.y < 25)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    stroke(0);
    fill(0);
    ellipse(this.position.x, this.position.y, 20, 20);
  }

}





var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var div3 = document.getElementById('div3')
var div4 = document.getElementById('div4')
var div5 = document.getElementById('div5')
var div6 = document.getElementById('div6')

div1.addEventListener('mouseover', showDiv);
div2.addEventListener('mouseover', showDiv);
div3.addEventListener('mouseover', showDiv);
div4.addEventListener('mouseover', showDiv);
div5.addEventListener('mouseover', showDiv);
div6.addEventListener('mouseover', showDiv);

div1.addEventListener('mouseleave', hideDiv);
div2.addEventListener('mouseleave', hideDiv);
div3.addEventListener('mouseleave', hideDiv);
div4.addEventListener('mouseleave', hideDiv);
div5.addEventListener('mouseleave', hideDiv);
div6.addEventListener('mouseleave', hideDiv);

function showDiv(div) {
document.getElementById(div).style.background = '#ffcc99';
}

function hideDiv(div) {
document.getElementById(div).style.background = '#ffffe6';
}
