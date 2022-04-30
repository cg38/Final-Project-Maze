//Cesar Guzman

var hit = false;

let conX = [];
let conY = [];
let conSize = [];
let speed = 0.5;
let numFlake = 500;

let selEasy = false;
let selMed = false;
let selHard = false;

let sel = 0;

let easyText = "Easy Difficulty";
let medText = "Medium Difficulty";
let hardText = "Hard Difficulty";

let dm;
let angle = 0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < numFlake; i++) {
    conX[i] = random(0, width);
    conY[i] = random(0, height);
    conSize[i] = random(1, 5);
  }

  //circle size
  x = 20;
  y = 10;
  r = 18.5;
}

function draw() {
  background(0);

  if (selEasy == false && selMed == false && selHard == false) {
    drawGameSelectScreen();
  } else if (selEasy) {
    EasyMaze();
  } else if (selMed) {
    Medmaze();
  } else if (selHard) {
    HardMaze();
  }

}

function drawGameSelectScreen() {
  strokeWeight(3);

  
 
  // Draw Title
  fill(255);
  textSize(10)
text("Use Arrows Keys",60,50)
  text("Enter to Select",60,70)
  textSize(45);
  textAlign(CENTER);
  //Title name
  text("Maze", width / 2, height / 6);

  textSize(35);

  let easyC = color(255);
  let medC = color(255);
  let hardC = color(255);

  if (sel == 0) {
    strokeWeight(3);
    //building
  fill("#795548");
  square(100, 200, 200);
  
  fill("#616161");
    rect(125,100,45,100)
  //roof
  triangle(100, 200, 200, 75, 300, 200);

  //window
  fill("white");
  square(125, 220, 55);
  square(215, 220, 55);
  
  fill('black')
circle(153, 250, 20);
  circle(240, 250, 20);
  
  //curtain
  fill("#D5DBDB");
  square(125,  195, 55);
  square(215,  195, 55);

     //door
  rect(172, 300, 55, 100);

 line(180, 350, 220, 350)
  
  fill("#A04000");
  rect(200, 300, 55, 100);
 
    stroke(0);
    
    easyC = color('#388E3C');
    medC = color(255);
    hardC = color(255);
    
  } else if (sel == 1) {
    
    fill('#D4E157')
     dm = height - 10; 
   let d2 = 10 + (sin(angle + PI / 2) * dm) / 2 + dm/ 2;
      ellipse(width / 2, height / 2, d2, d2)
     angle += 0.02; 
    
    strokeWeight(3);
    easyC = color(255);
    medC = color('yellow');
    hardC = color(255);
    
    
  } else if (sel == 2) {
    strokeWeight(3);
    
    easyC = color(255);
    medC = color(255);
    hardC = color("red");
    
    strokeWeight(1);
    stroke("#D84315");
  line(50, 75, 50, 150);
  line(100, 0, 100, 50);
  line(150, 50, 175, 50);
  line(100, 100, 150, 100);
  line(150, 150, 200, 150);
  line(100, 200, 265, 200);
  line(0, 250, 100, 250);
  line(100, 300, 225, 300);
  line(0, 350, 50, 350);
  line(250, 150, 300, 150);
  line(250, 100, 200, 100);
  line(250, 50, 200, 50);
  line(350, 50, 400, 50);
  line(350, 100, 300, 100);
  line(350, 150, 400, 150);
  line(325, 250, 375, 250);
  line(370, 325, 400, 325);
  stroke(0);
    
  }

  fill(easyC);
  text(easyText, width / 2, height / 2);
  fill(medC);
  text(medText, width / 2, 50 + height / 2);
  fill(hardC);
  text(hardText, width / 2, 100 + height / 2);

  if (keyCode == ENTER) {
    if (sel == 0) {
      selEasy = true;
    }
    if (sel == 1) {
      selMed = true;
    }
    if (sel == 2) {
      selHard = true;
    }
  }
  
}

function EasyMaze() {
  //easy maze

  background(220);
   background('#0097A7 ');
  //x1,y1,x2,y2
strokeWeight(3)
  line(50, 0, 50, 250);
  hit1a = collideLineCircle(50, 0, 50, 250, x, y, r);

  line(0, 280, 50, 280);
  hit2a = collideLineCircle(0, 280, 50, 280, x, y, r);

  line(35, 300, 35, 400);
  hit3a = collideLineCircle(35, 300, 35, 400, x, y, r);

  line(100, 300, 100, 50);
  hit4a = collideLineCircle(100, 300, 100, 50, x, y, r);
  line(100, 50, 250, 50);
  hit5a = collideLineCircle(100, 50, 250, 50, x, y, r);
  line(250, 50, 250, 325);
  hit6a = collideLineCircle(250, 50, 250, 325, x, y, r);
  line(250, 150, 175, 150);
  hit7a = collideLineCircle(250, 150, 175, 150, x, y, r);
  line(250, 250, 175, 250);
  hit8a = collideLineCircle(250, 250, 175, 250, x, y, r);
  line(250, 325, 175, 325);
  hit9a = collideLineCircle(250, 325, 175, 325, x, y, r);
  line(175, 325, 175, 370);
  hit10a = collideLineCircle(175, 325, 175, 370, x, y, r);
  line(175, 370, 300, 370);
  hit11a = collideLineCircle(175, 370, 300, 370, x, y, r);
  line(300, 370, 300, 300);
  hit12a = collideLineCircle(300, 370, 300, 300, x, y, r);

  line(75, 350, 135, 350);
  hit13a = collideLineCircle(75, 350, 135, 350, x, y, r);
  line(135, 100, 200, 100);
  hit14a = collideLineCircle(135, 100, 200, 100, x, y, r);
  line(135, 400, 135, 100);
  hit15a = collideLineCircle(135, 400, 135, 100, x, y, r);
  line(135, 200, 200, 200);
  hit16a = collideLineCircle(135, 200, 200, 200, x, y, r);
  line(135, 300, 200, 300);
  hit17a = collideLineCircle(135, 300, 200, 300, x, y, r);

  line(325, 400, 325, 50);
  hit18a = collideLineCircle(325, 400, 325, 50, x, y, r);
  line(300, 50, 325, 50);
  hit19a = collideLineCircle(300, 50, 325, 50, x, y, r);
  line(300, 275, 360, 275);
  hit20a = collideLineCircle(300, 275, 360, 275, x, y, r);
  line(250, 275, 275, 275);
  hit21a = collideLineCircle(250, 275, 275, 275, x, y, r);

  line(250, 250, 300, 250);
  hit22a = collideLineCircle(250, 275, 275, 275, x, y, r);
  line(300, 250, 300, 100);
  hit23a = collideLineCircle(300, 250, 300, 100, x, y, r);
  line(300, 100, 275, 100);
  hit24a = collideLineCircle(300, 100, 275, 100, x, y, r);
  line(275, 100, 275, 0);
  hit25a = collideLineCircle(275, 100, 275, 0, x, y, r);
  line(250, 200, 275, 200);
  hit26a = collideLineCircle(250, 200, 275, 200, x, y, r);

  line(360, 400, 360, 25);
  hit27a = collideLineCircle(360, 400, 360, 25, x, y, r);

  //end
  line(390, 390, 400, 390);
  hit28a = collideLineCircle(390, 390, 400, 390, x, y, r);
  //outside
  stroke('#AED581')
  line(0,0,400,0)
  hit29a = collideLineCircle(0,0,400,0, x, y, r);
  line(0,0,0,400)
  hit30a = collideLineCircle(0,0,0,400, x, y, r);
  line(400,0,400,400)
  hit31a = collideLineCircle(400,0,400,400, x, y, r);
  line(0,400,400,400)
  hit32a = collideLineCircle(0,400,400,400, x, y, r);
  
   fill('white')
  noStroke()
  stroke('black')
  textSize(12)
   text('Start',15,15)
  text('End',388,393)
 
fill('#388E3C ')
  ellipse(x, y, r);

  if (keyIsPressed && keyCode == UP_ARROW) {
    y = y - 2;
  } else if (keyIsPressed && keyCode == DOWN_ARROW) {
    y = y + 2;
  }
  if (keyIsPressed && keyCode == LEFT_ARROW) {
    x = x - 2;
  } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
    x = x + 2;
  }

  if (
    hit1a ||
    hit2a ||
    hit3a ||
    hit4a ||
    hit5a ||
    hit6a ||
    hit7a ||
    hit8a ||
    hit9a ||
    hit10a ||
    hit11a ||
    hit12a ||
    hit13a ||
    hit14a ||
    hit15a ||
    hit16a ||
    hit17a ||
    hit18a ||
    hit19a ||
    hit20a ||
    hit21a ||
    hit22a ||
    hit23a ||
    hit24a ||
    hit25a ||
    hit26a ||
    hit27a||
    hit29a||
    hit30a||
    hit31a||
    hit32a
  ) {
    textSize(80);
    textAlign(CENTER, CENTER);
    text("YOU LOSE", 200, 75);
    
     fill("#1F618D ");

    ellipse(200, height / 2, width / 2);

    curve(150, 350, 150, 250, 250, 250, 250, 350); //mouth
    line(210, 180, 250, 179); //right eye

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    fill("black");
    ellipse(160, 185, 10, 10);
    
    

    fill("#85C1E9 ");
    curve(250, -100, 250, 190, 250, 190, 15, 55);

    sleep(1000).then(function () {
      x = 20;
      y = 10;
    });
    function sleep(millisecondsDuration) {
      return new Promise((resolve) => {
        setTimeout(resolve, millisecondsDuration);
      });
    }
  }
  if (hit28a) {
    fill("yellow");
    ellipse(200, height / 2, width / 2);

    fill("white");
    arc(200, 230, 85, 60, 0, PI);

    fill("white");
    rect(158, 230, 84, 5);

    fill("red");
    curve(150, 350, 168, 250, 230, 250, 250, 350);
    line(168, 250, 230, 250);

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    ellipse(235, 180, 40, 40);

    fill("black");
    ellipse(159, 181, 10, 10);
    ellipse(234, 181, 10, 10);
    textSize(80);
    textAlign(CENTER, CENTER);
    fill("#00FF00");
    stroke(random(330));
    text("YOU WIN", 200, 75);
    for (let i = 0; i < numFlake; i++) {
      stroke(random(270, 0), 180, 270);
      fill(255, 0, 0);
      circle(conX[i] + sin(conX[i]) * 10, conY[i], conSize[i]);
      conY[i] = conY[i] + speed;
      conX[i] = conX[i] + 0.05;

      if (conY[i] > height) {
        conY[i] = 0;
      }
      if (conX[i] > width) {
        conX[i] = 0;
      }
    }
  }
}

function Medmaze() {
  //Med Maze

  background(220);
   background("#D84315 ");
strokeWeight(3)

  //x1,y1,x2,y2
  line(0, 50, 130, 50);
  hit1 = collideLineCircle(0, 50, 130, 50, x, y, r);
  line(175, 0, 175, 125);
  hit2 = collideLineCircle(175, 0, 175, 125, x, y, r);
  line(0, 220, 100, 220);
  hit3 = collideLineCircle(0, 220, 100, 220, x, y, r);

  line(100, 100, 155, 100);
  hit4 = collideLineCircle(100, 100, 155, 100, x, y, r);
  line(155, 100, 155, 150);
  hit5 = collideLineCircle(155, 100, 155, 150, x, y, r);
  line(155, 150, 200, 150);
  hit6 = collideLineCircle(155, 150, 200, 150, x, y, r);
  line(200, 150, 200, 50);
  hit7 = collideLineCircle(200, 150, 200, 50, x, y, r);

  line(0, 150, 125, 150);
  hit8 = collideLineCircle(0, 150, 125, 150, x, y, r);
  line(125, 150, 125, 200);
  hit9 = collideLineCircle(25, 150, 125, 200, x, y, r);

  line(100, 350, 100, 315);
  hit10 = collideLineCircle(100, 350, 100, 315, x, y, r);
  line(100, 350, 50, 350);
  hit11 = collideLineCircle(100, 350, 50, 350, x, y, r);
  line(50, 350, 50, 270);
  hit12 = collideLineCircle(50, 350, 50, 270, x, y, r);
  line(50, 270, 150, 270);
  hit13 = collideLineCircle(50, 270, 150, 270, x, y, r);
  line(150, 270, 150, 200);
  hit14 = collideLineCircle(150, 270, 150, 200, x, y, r);
  line(150, 200, 225, 200);
  hit15 = collideLineCircle(150, 200, 225, 200, x, y, r);
  line(225, 200, 225, 25);
  hit16 = collideLineCircle(225, 200, 225, 25, x, y, r);
  line(225, 25, 350, 25);
  hit17 = collideLineCircle(225, 25, 350, 25, x, y, r);
  line(350, 25, 350, 125);
  hit18 = collideLineCircle(350, 25, 350, 125, x, y, r);
  line(350, 125, 325, 125);
  hit19 = collideLineCircle(350, 125, 325, 125, x, y, r);

  line(400, 150, 300, 150);
  hit20 = collideLineCircle(400, 150, 300, 150, x, y, r);
  line(300, 150, 300, 75);
  hit21 = collideLineCircle(300, 150, 300, 75, x, y, r);
  line(300, 75, 250, 75);
  hit22 = collideLineCircle(300, 75, 250, 75, x, y, r);
  line(250, 75, 250, 300);
  hit23 = collideLineCircle(250, 75, 250, 300, x, y, r);

  line(125, 400, 125, 290);
  hit24 = collideLineCircle(125, 400, 125, 290, x, y, r);
  line(75, 290, 175, 290);
  hit25 = collideLineCircle(75, 290, 175, 290, x, y, r);
  line(175, 290, 175, 225);
  hit26 = collideLineCircle(175, 290, 175, 225, x, y, r);
  line(175, 225, 225, 225);
  hit27 = collideLineCircle(175, 225, 225, 225, x, y, r);
  line(225, 225, 225, 325);
  hit28 = collideLineCircle(225, 225, 225, 325, x, y, r);
  line(225, 325, 200, 325);
  hit29 = collideLineCircle(225, 325, 200, 325, x, y, r);

  line(300, 400, 300, 375);
  hit30 = collideLineCircle(300, 400, 300, 375, x, y, r);
  line(300, 375, 175, 375);
  hit31 = collideLineCircle(300, 375, 175, 375, x, y, r);
  line(175, 375, 175, 350);
  hit32 = collideLineCircle(175, 375, 175, 350, x, y, r);
  line(175, 350, 275, 350);
  hit33 = collideLineCircle(175, 350, 275, 350, x, y, r);
  line(275, 350, 275, 100);
  hit34 = collideLineCircle(275, 350, 275, 100, x, y, r);
  line(275, 200, 350, 200);
  hit35 = collideLineCircle(275, 200, 350, 200, x, y, r);
  line(350, 200, 350, 300);
  hit36 = collideLineCircle(350, 200, 350, 300, x, y, r);
  line(350, 300, 320, 300);
  hit37 = collideLineCircle(350, 300, 320, 300, x, y, r);
  line(320, 300, 320, 250);
  hit38 = collideLineCircle(320, 300, 320, 250, x, y, r);

  line(300, 250, 300, 350);
  hit39 = collideLineCircle(300, 250, 300, 350, x, y, r);
  line(300, 350, 400, 350);
  hit40 = collideLineCircle(300, 350, 400, 350, x, y, r);

  //end
  line(390, 390, 400, 390);
  hit41 = collideLineCircle(390, 390, 400, 390, x, y, r);
   //outside
  stroke('yellow')
  line(0,0,400,0)
  hit42 = collideLineCircle(0,0,400,0, x, y, r);
  line(0,0,0,400)
  hit43 = collideLineCircle(0,0,0,400, x, y, r);
  line(400,0,400,400)
  hit44 = collideLineCircle(400,0,400,400, x, y, r);
  line(0,400,400,400)
  hit45 = collideLineCircle(0,400,400,400, x, y, r);
  
  fill('white')
  noStroke()
  stroke('black')
  textSize(12)
   text('Start',15,15)
  text('End',388,393)
 fill('yellow')
  
  ellipse(x, y, r);

  if (keyIsPressed && keyCode == UP_ARROW) {
    y = y - 2;
  } else if (keyIsPressed && keyCode == DOWN_ARROW) {
    y = y + 2;
  }
  if (keyIsPressed && keyCode == LEFT_ARROW) {
    x = x - 2;
  } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
    x = x + 2;
  }

  if (
    hit1 ||
    hit2 ||
    hit3 ||
    hit4 ||
    hit5 ||
    hit6 ||
    hit7 ||
    hit8 ||
    hit9 ||
    hit10 ||
    hit11 ||
    hit12 ||
    hit13 ||
    hit14 ||
    hit15 ||
    hit16 ||
    hit17 ||
    hit18 ||
    hit19 ||
    hit20 ||
    hit21 ||
    hit22 ||
    hit23 ||
    hit24 ||
    hit25 ||
    hit26 ||
    hit27 ||
    hit28 ||
    hit29 ||
    hit30 ||
    hit31 ||
    hit32 ||
    hit33 ||
    hit34 ||
    hit35 ||
    hit36 ||
    hit37 ||
    hit38 ||
    hit39 ||
    hit40||
    hit42||
    hit43||
    hit44||
    hit45
  ) {
    textSize(80);
    textAlign(CENTER, CENTER);
    text("YOU LOSE", 200, 75);
    
     fill("#1F618D ");

    ellipse(200, height / 2, width / 2);

    curve(150, 350, 150, 250, 250, 250, 250, 350); //mouth
    line(210, 180, 250, 179); //right eye

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    fill("black");
    ellipse(160, 185, 10, 10);

    fill("#85C1E9 ");
    curve(250, -100, 250, 190, 250, 190, 15, 55);


    sleep(1000).then(function () {
      x = 20;
      y = 10;
    });
    function sleep(millisecondsDuration) {
      return new Promise((resolve) => {
        setTimeout(resolve, millisecondsDuration);
      });
    }
  }
  if (hit41) {
    fill("yellow");
    ellipse(200, height / 2, width / 2);

    fill("white");
    arc(200, 230, 85, 60, 0, PI);

    fill("white");
    rect(158, 230, 84, 5);

    fill("red");
    curve(150, 350, 168, 250, 230, 250, 250, 350);
    line(168, 250, 230, 250);

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    ellipse(235, 180, 40, 40);

    fill("black");
    ellipse(159, 181, 10, 10);
    ellipse(234, 181, 10, 10);
    textSize(80);
    textAlign(CENTER, CENTER);
    fill("#00FF00");
    stroke(random(330));
    text("YOU WIN", 200, 75);
    for (let i = 0; i < numFlake; i++) {
      stroke(random(270, 0), 180, 270);
      fill(255, 0, 0);
      circle(conX[i] + sin(conX[i]) * 10, conY[i], conSize[i]);
      conY[i] = conY[i] + speed;
      conX[i] = conX[i] + 0.05;

      if (conY[i] > height) {
        conY[i] = 0;
      }
      if (conX[i] > width) {
        conX[i] = 0;
      }
    }
  }
}
function HardMaze() {
  background(220);
  
   background("#546E7A ");
  strokeWeight(2)
  //x1,y1,x2,y2
  stroke("black");
  line(50, 0, 50, 75);
  hit1b = collideLineCircle(50, 0, 50, 75, x, y, r);
 stroke("#C62828");
  line(0, 150, 150, 150);
  hit2b = collideLineCircle(0, 150, 150, 150, x, y, r);
   stroke("#1E88E5");
  line(100, 150, 100, 50);
  hit3b = collideLineCircle(100, 150, 100, 50, x, y, r);
   stroke("black");
  line(100, 50, 150, 50);
  hit4b = collideLineCircle(100, 50, 150, 50, x, y, r);
  
 stroke("black");
  line(200, 0, 200, 300);
  hit5b = collideLineCircle(200, 0, 200, 300, x, y, r);
   stroke("#C62828");
  line(175, 50, 200, 50);
  hit6b = collideLineCircle(175, 50, 200, 50, x, y, r);
   stroke("#1E88E5");
  line(200, 100, 150, 100);
  hit7b = collideLineCircle(200, 100, 150, 100, x, y, r);
   stroke("black");
  line(200, 150, 250, 150);
  hit8b = collideLineCircle(200, 150, 250, 150, x, y, r);
  stroke('#C62828')
  line(200, 250, 100, 250);
  hit9b = collideLineCircle(200, 250, 100, 250, x, y, r);
   stroke("#1E88E5");

  line(0, 300, 100, 300);
  hit10b = collideLineCircle(0, 300, 100, 300, x, y, r);
   stroke("black");
  line(0, 200, 100, 200);
  hit11b = collideLineCircle(0, 200, 100, 200, x, y, r);
   stroke("#C62828");
  line(50, 350, 250, 350);
  hit12b = collideLineCircle(50, 350, 250, 350, x, y, r);
   stroke("#1E88E5");
  line(250, 350, 250, 400);
  hit13b = collideLineCircle(250, 350, 250, 400, x, y, r);
   stroke("black");
  line(225, 350, 225, 200);
  hit14b = collideLineCircle(225, 350, 225, 200, x, y, r);
   stroke("#C62828");

  line(300, 400, 300, 50);
  hit15b = collideLineCircle(300, 400, 300, 50, x, y, r);
   stroke("#1E88E5");
  line(350, 50, 250, 50);
  hit16b = collideLineCircle(350, 50, 250, 50, x, y, r);
   stroke("black");
  line(250, 100, 300, 100);
  hit17b = collideLineCircle(250, 100, 300, 100, x, y, r);
   stroke("#C62828");
  line(300, 150, 350, 150);
  hit18b = collideLineCircle(300, 150, 350, 150, x, y, r);
   stroke("#1E88E5");
  line(350, 150, 350, 250);
  hit19b = collideLineCircle(350, 150, 350, 250, x, y, r);
   stroke("black");
  line(300, 200, 265, 200);
  hit20b = collideLineCircle(300, 200, 265, 200, x, y, r);
   stroke("#C62828");
  line(325, 250, 265, 250); //
  hit21b = collideLineCircle(325, 250, 265, 250, x, y, r);
   stroke("#1E88E5");
  line(265, 250, 265, 300);
  hit22b = collideLineCircle(265, 250, 265, 300, x, y, r);
   stroke("black");

  line(225, 325, 370, 325);
  hit24b = collideLineCircle(225, 325, 370, 325, x, y, r);
   stroke("#C62828");
  line(370, 325, 370, 400);
  hit25b = collideLineCircle(370, 325, 370, 400, x, y, r);
   stroke("#1E88E5");
  line(335, 325, 335, 400);
  hit26b = collideLineCircle(335, 325, 335, 400, x, y, r);
   stroke("black");

  line(375, 250, 400, 250);
  hit27b = collideLineCircle(375, 250, 400, 250, x, y, r);
   stroke("#C62828");
  line(350, 100, 400, 100);
  hit28b = collideLineCircle(350, 100, 400, 100, x, y, r);
   stroke("#1E88E5");
//end
  line(390, 390, 400, 390);
  hit23b = collideLineCircle(390, 390, 400, 390, x, y, r);
  
   //outside
  stroke('#B71C1C')
  line(0,0,400,0)
  hit29b = collideLineCircle(0,0,400,0, x, y, r);
  line(0,0,0,400)
  hit30b = collideLineCircle(0,0,0,400, x, y, r);
  line(400,0,400,400)
  hit31b = collideLineCircle(400,0,400,400, x, y, r);
  line(0,400,400,400)
  hit32b = collideLineCircle(0,400,400,400, x, y, r);
  
  //pass
  stroke("#1E88E5");
  line(50, 75, 50, 150);
   stroke("#C62828");
  line(100, 0, 100, 50);
   stroke("#1E88E5");
  line(150, 50, 175, 50);
   stroke("black");
  line(100, 100, 150, 100);
   stroke("#1E88E5");
  line(150, 150, 200, 150);
   stroke("#1E88E5");
  line(100, 200, 265, 200);
   stroke("black");
  line(0, 250, 100, 250);
   stroke("#C62828");
  line(100, 300, 225, 300);
   stroke("#1E88E5");
  line(0, 350, 50, 350);
   stroke("#C62828");
  line(250, 150, 300, 150);
   stroke("#C62828");
  line(250, 100, 200, 100);
   stroke("#1E88E5");
  line(250, 50, 200, 50);
   stroke("black");
  line(350, 50, 400, 50);
   stroke("black");
  line(350, 100, 300, 100);
   stroke("#1E88E5");
  line(350, 150, 400, 150);
   stroke("black");
  line(325, 250, 375, 250);
   stroke("#C62828");
  line(370, 325, 400, 325);
  
  
  fill('white')
  noStroke()
  stroke('black')
  textSize(12)
   text('Start',15,15)
  text('End',388,393)
 
  text('End',350,393)
  text('End',315,393)
  
fill('red')
  ellipse(x, y, r);

  if (keyIsPressed && keyCode == UP_ARROW) {
    y = y - 2;
  } else if (keyIsPressed && keyCode == DOWN_ARROW) {
    y = y + 2;
  }
  if (keyIsPressed && keyCode == LEFT_ARROW) {
    x = x - 2;
  } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
    x = x + 2;
  }

  if (
    hit1b ||
    hit2b ||
    hit3b ||
    hit4b ||
    hit5b ||
    hit6b ||
    hit7b ||
    hit8b ||
    hit9b ||
    hit10b ||
    hit11b ||
    hit12b ||
    hit13b ||
    hit14b ||
    hit15b ||
    hit16b ||
    hit17b ||
    hit18b ||
    hit19b ||
    hit20b ||
    hit21b ||
    hit22b ||
    hit24b ||
    hit25b ||
    hit26b ||
    hit27b ||
    hit28b||
    hit29b||
    hit30b||
    hit31b||
    hit32b
  ) {
    textSize(80);
    textAlign(CENTER, CENTER);
    text("YOU LOSE", 200, 75);
    textSize(20)
    fill('#2ECC71')
    text("Correct Way Has Already Been Shown",200,350)
    
     fill("#1F618D ");

    ellipse(200, height / 2, width / 2);

    curve(150, 350, 150, 250, 250, 250, 250, 350); //mouth
    line(210, 180, 250, 179); //right eye

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    fill("black");
    ellipse(160, 185, 10, 10);

    fill("#85C1E9 ");
    curve(250, -100, 250, 190, 250, 190, 15, 55);

    sleep(1000).then(function () {
      x = 20;
      y = 10;
    });
  }

  if (hit23b) {
    fill("yellow");
    ellipse(200, height / 2, width / 2);

    fill("white");
    arc(200, 230, 85, 60, 0, PI);

    fill("white");
    rect(158, 230, 84, 5);

    fill("red");
    curve(150, 350, 168, 250, 230, 250, 250, 350);
    line(168, 250, 230, 250);

    fill("white");
    ellipse(160, 180, 40, 40); //left eye

    ellipse(235, 180, 40, 40);

    fill("black");
    ellipse(159, 181, 10, 10);
    ellipse(234, 181, 10, 10);
    textSize(80);
    textAlign(CENTER, CENTER);
    fill("#00FF00");
    stroke(random(330));
    text("YOU WIN", 200, 75);
    for (let i = 0; i < numFlake; i++) {
      stroke(random(270, 0), 180, 270);
      fill(255, 0, 0);
      circle(conX[i] + sin(conX[i]) * 10, conY[i], conSize[i]);
      conY[i] = conY[i] + speed;
      conX[i] = conX[i] + 0.05;

      if (conY[i] > height) {
        conY[i] = 0;
      }
      if (conX[i] > width) {
        conX[i] = 0;
      }
    }
  }

  
  //time to restart to beginning
  function sleep(millisecondsDuration) {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecondsDuration);
    });
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    sel = sel - 1;
  } else if (keyCode == DOWN_ARROW) {
    sel = sel + 1;
  }

  if (sel < 0) {
    sel = 0;
  }

  if (sel > 2) {
    sel = 2;
  }
}
