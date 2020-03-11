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
  createCanvas(900, 400);
  button = createButton('toggle(square/sawtooth)')
  button.size(160,50)
  button.position(170, 560)
  button.style('background-color', '#1B1D1D')
  button.style('color', '#ffffff')
  button.mousePressed(sawtooth)
  slider = createSlider(1, 25, 1);
  slider.position(200,450)
  slider1 = createSlider(1, 64, 1);
  slider1.position(200, 480)
  slider2 = createSlider(0, 80, 25);
  slider2.position(200,510)

  //Slider texts
  let txt1 = createDiv('Number of circles(n) : ')
  txt1.position(50, 452)
  txt1.style('color', '#ffffff')
  let txt2 = createDiv('Speed : ')
  txt2.position(141, 482)
  txt2.style('color', '#ffffff')
  let txt3 = createDiv('Size : ')
  txt3.position(151, 512)
  txt3.style('color', '#ffffff')



}

function draw() {
  let t = map(slider1.value(), 0, 100, 0.01, 1);
  background(20);
  translate(slider2.value() + 150,200)


  let x = 0
  let y = 0

  for(let i=1; i <= slider.value(); i++){
    px = x;
    py = y;
    if(boolean == 1){
      s = 4;
      v = slider2.value() + 40
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
  line(x- 220, y, slider2.value(), wave[0] )
  wave.unshift(y);
  beginShape();
  stroke(120,0,0)
  noFill()
  stroke(180,0,0)

  for (let i = 0;i < wave.length;i++){
  vertex(slider2.value() + i,wave[i]);
}
  endShape();
  if (wave.length > 1100){
    wave.pop()
  }

  time += t;
}
