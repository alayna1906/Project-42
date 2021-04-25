function setup() {
  createCanvas(400,400);
  angleMode(DEGREES); 
  

}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second(); 

  strokeWeight(8);
  noFill();

  stroke(300, 0, 0);
  let secondAngle = map(sc, 0, 59, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle); 

  stroke(0, 300, 0); 
  let minuteAngle = map(mn, 0, 59, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(0, 0, 300);
  let hourAngle = map(hr | 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

 push();
  rotate(secondAngle);
  stroke(300, 0, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(0, 300, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0, 0, 300);
  line(0, 0, 100, 0);
  pop();
  
  //fill(255);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 10, 200)

}