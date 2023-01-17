var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
  this.changeWord = function(newWord) {
this.toRotate = newWord;
  }
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

var txt;
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      txt = new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
background(255, 255, 230);
noFill();
ellipse(mouseX, mouseY, 50, 50);
}

//passions webpage
document.getElementById('space2').addEventListener('onclick', flingSp);
document.getElementById('story').addEventListener('onclick', flingSt);
document.getElementById('education').addEventListener('onclick', flingEd);
// document.getElementById('equity').addEventListener('onclick', flingEq);

function flingSp() {
document.getElementById('space2').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('story').style.display = 'block';
txt.changeWord(["became a finalist"]);
document.getElementById('spacetxt').innerHTML = "In 2020, I participated in the YouthTech startup incubator organised by StartAD, and my team was 1 of 15 teams chosen out of 98 applicants. In 2021, I was 1 of 6 people nominated to participate in StartAD's Innovention program";
}

function flingSt() {
document.getElementById('story').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('education').style.display = 'block';
txt.changeWord(["received a scholarship"]);
document.getElementById('spacetxt').innerHTML = "In 2019, I was 1 of 150 students chosen out of 2000 applicants to participate in the Sutton Trust US programme. After participating, I successfully applied to New York University Abu Dhabi and was awarded a full scholarship. I graduate from NYUAD in 2023 with a major in Interactive Media and two minors in Creative Writing and Film and New Media";
}

function flingEd() {
document.getElementById('education').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('story').style.display = 'block';
txt.changeWord(["story"]);
// document.getElementById('spacetxt').innerHTML = "I believe in the idea that human beings should help each other in whatever way that we can. We are all privileged in some way, whether through our race, class, gender, sexuality and disability status. I am determined to help those who do not have the same privileges that I do";

document.getElementById('space2').style.top = '27%';
document.getElementById('space2').style.left = '10%';
document.getElementById('space2').style.width = '30%';
document.getElementById('space2').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('education').style.display = 'none';

document.getElementById('education').style.top = '27%';
document.getElementById('education').style.left = '10%';
document.getElementById('education').style.width = '30%';
document.getElementById('education').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('education').style.display = 'none';

document.getElementById('story').style.top = '27%';
document.getElementById('story').style.left = '10%';
document.getElementById('story').style.width = '30%';
document.getElementById('story').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('story').style.display = 'none';

txt.changeWord(["became a finalist"]);
document.getElementById('spacetxt').innerHTML = "In 2020, I participated in the YouthTech startup incubator organised by StartAD, and my team was 1 of 15 teams chosen out of 98 applicants. In 2021, I was 1 of 6 people nominated to participate in StartAD's Innovention program";

}

//loves webpage

document.getElementById('film').addEventListener('onclick', flingFi);
document.getElementById('baking').addEventListener('onclick', flingB);
document.getElementById('food').addEventListener('onclick', flingFo);

function flingFi() {
document.getElementById('film').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('baking').style.display = 'block';
txt.changeWord(["baking"]);
document.getElementById('spacetxt').innerHTML = "Long story short, I have a sweet tooth! I love all sweet, baked goods: banana bread, croissants, cheesecake, brownies. So what better way to fuel my obsession than learning to bake for myself? You name it! I'll bake it";
}

function flingB() {
document.getElementById('baking').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('food').style.display = 'block';
txt.changeWord(["food"]);
document.getElementById('spacetxt').innerHTML = "I am an absolute foodie! My favourite cuisines are Nigerian and East Asian. I cannot even choose a favourite dish. I love learning new recipes and visiting new restaurants with my friends";
}

function flingFo() {
document.getElementById('food').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('film').style.top = '27%';
document.getElementById('film').style.left = '10%';
document.getElementById('film').style.width = '30%';
document.getElementById('film').style.animation = '1s swing ease-in-out 0s infinite alternate';

document.getElementById('baking').style.top = '27%';
document.getElementById('baking').style.left = '10%';
document.getElementById('baking').style.width = '30%';
document.getElementById('baking').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('baking').style.display = 'none';

document.getElementById('food').style.top = '27%';
document.getElementById('food').style.left = '10%';
document.getElementById('food').style.width = '30%';
document.getElementById('food').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('food').style.display = 'none';

txt.changeWord(["film"]);
document.getElementById('spacetxt').innerHTML = "Watching movies and TVs shows are a part of my daily routine. Apart from their entertainment value, I gain inspiration from what I watch and use that knowledge for my personal film projects. From cartoons to sitcoms to reality TV. My favourite TV show is definitely The Office, and Love Island is my guilty pleasure (except I feel absolutely no guilt)";
}

//skills webpage

document.getElementById('design').addEventListener('onclick', flingD);
document.getElementById('coding').addEventListener('onclick', flingC);
document.getElementById('film2').addEventListener('onclick', flingFi2);

function flingD() {
document.getElementById('design').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('coding').style.display = 'block';
txt.changeWord(["programmer"]);
document.getElementById('spacetxt').innerHTML = "A large portion of my work focuses on creative coding, such as game development, web design (this website is coded from scratch!) and digital art. I have experience coding in HTML/ CSS, Javascript, Python, C#, Processing and C++. I also have experience using Arduino to program electronic hardware";
}

function flingC() {
document.getElementById('coding').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('film2').style.display = 'block';
txt.changeWord(["filmmaker"]);
document.getElementById('spacetxt').innerHTML = "I have much experience in filmmaking, from writing scripts to directing a shoot. I have intermediate knowledge of lighting and camera equipment, such as silks, scrims and gels. I have experience using professional film equipment such as the Blackmagic Ursa Mini, Blackmagic Pocket 4K and Canon Mirrorless cameras.  I am also skilled in video editing and colour grading using software such as Davinci Resolve and Adobe Premiere Pro";
}

function flingFi2() {
document.getElementById('film2').style.animation = '1s away ease-in-out 0s 1 forwards';
document.getElementById('design').style.top = '27%';
document.getElementById('design').style.left = '10%';
document.getElementById('design').style.width = '30%';
document.getElementById('design').style.animation = '1s swing ease-in-out 0s infinite alternate';

document.getElementById('coding').style.top = '27%';
document.getElementById('coding').style.left = '10%';
document.getElementById('coding').style.width = '30%';
document.getElementById('coding').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('coding').style.display = 'none';

document.getElementById('film2').style.top = '27%';
document.getElementById('film2').style.left = '10%';
document.getElementById('film2').style.width = '30%';
document.getElementById('film2').style.animation = '1s swing ease-in-out 0s infinite alternate';
document.getElementById('film2').style.display = 'none';

txt.changeWord(["game developer"]);
document.getElementById('spacetxt').innerHTML = "I am skilled in 3D modelling and have experience using Maya, ZBrush and Blender. I code in C# using Unity to develop 3D games and virtual reality experiences. I also use Adobe Suite and other platforms such as Procreate and Canva to aid in design";
}

document.getElementById('arrow1').addEventListener('onclick', nextProse);
document.getElementById('arrow2').addEventListener('onclick', nextProse2);
function nextProse(){
  document.getElementById('box').style.display = 'none';
  document.getElementById('box1').style.display = 'block';
  document.getElementById('arrow2').style.display = 'block';
  document.getElementById('arrow1').style.display = 'none';
}
function nextProse2(){
  document.getElementById('box1').style.display = 'none';
  document.getElementById('box').style.display = 'block';
  document.getElementById('arrow1').style.display = 'block';
  document.getElementById('arrow2').style.display = 'none';
}
