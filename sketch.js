let time = 0;
let wave = [];
let slider;
let slider1;
let Div;
let button;
let boolean = 0;
let s = 4;
let v;
function sawtooth(){
  boolean = 1;
  button.mousePressed(Square)
}
function Square(){
  boolean = 0;
  button.mousePressed(sawtooth)

}

function setup() {
  createCanvas(1500, 400);
  button = createButton('toggle')
  button.mousePressed(sawtooth)
  slider = createSlider(1, 50, 1);
  slider.position(127,42)
  slider1 = createSlider(1, 100, 1);
  slider1.position(850, 340)
  slider2 = createSlider(0, 100, 25);
  Div = createDiv()
}

function draw() {
  let t = map(slider1.value(), 0, 100, 0.01, 1);
  Div.html(t)
  background(20);
  translate(200,200)


  let x = 0
  let y = 0

  for(let i=1; i <= slider.value(); i++){
    px = x;
    py = y;
    if(boolean == 1){
      s = 4;
      v = slider2.value()
      if (i % 2 != 0){
        n = -1 * i
      }else {
        n = i;
      }
    }else{
      n = (2 * i) - 1
      s = 2;
      v = slider2.value() + 70
    }
  let radius = v * (s /(n*PI));
  x += radius * cos(n* time);
  y += radius *  sin(n * time);


  stroke(255, 100)
  noFill()
  ellipse(px,py,radius * 2);
  stroke(255)
  line(px, py, x, y)
  fill(255,0,0);
  noStroke()
  //ellipse(x,y, 5)


}
  stroke(255)
  translate(220,0)
  stroke(100,100,0)
  line(x- 220, y, 0, wave[0])
  wave.unshift(y);
  beginShape();
  stroke(120,0,0)
  noFill()
  stroke(180,0,0)

  for (let i = 0;i < wave.length;i++){
  vertex(i,wave[i]);
}
  endShape();
  if (wave.length > 1100){
    wave.pop()
  }

  time += t;
}
