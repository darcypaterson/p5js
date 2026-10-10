function preload() {
    img = loadImage("img/sabastian-sawe-768x432.jpg")
}
function setup() {
  createCanvas(400, 500);
  background(color("#dddddd"));

}

function draw() {
 image(img, 0, 0);
   textFont("Helvetica");
   textStyle(BOLD);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill("#8828dc");
    text("Media & Fonts", width / 2, height / 2);
}





function MySquare(posX, posY, sqWidth, sqHeight, sqFill) {
    this.x = posX;
    this.y = posY;
    this.width = sqWidth;
    this.height = sqHeight;
    this.fill = sqFill;

    this.display = function() {
        fill(this.fill);
        rect(this.x, this.y, this.width, this.height, 10);
    }
    this.move = function() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }
}


// // Mouse Trail with Color Gradient - pretty cool.
// var num = 60;
// var x = [];
// var y = [];

// function setup() {
//     createCanvas(400, 500);
//     background("#dddddd");
//     noStroke();
//     for (let i = 0; i < num; i++) {
//         x[i] =0;
//         y[i] = 0;
//     }
// }

// function draw() {
//     background("#dddddd");
//     fill("#8828dc25");
//     // copy array values from back to front
//     for (let i = num - 1; i > 0; i--) {
//         x[i] = x[i - 1];
//         y[i] = y[i - 1];
//     }
//     x[0] = mouseX;
//     y[0] = mouseY;
//     for (let i = 0; i < num; i++) {
//         fill(i *4);
//         ellipse(x[i], y[i], 20, 20);
//     }
// }




// Gray Lines Vertical

// var gray = [];

// function setup() {
//   createCanvas(400, 500);
//   background("#dddddd");
//   stroke("black");
//   frameRate(10);
//   for (let i = 0; i < width; i++) {
//     gray[i] = random(0, 255);
//   }
// }

// function draw() {
//   background("#dddddd");
//   for (let i = 0; i < gray.length; i++) {
//     stroke(gray[i]);
//     line(i, 0, i, height);
//   }
// }






// Pac Man

// var x = [-20, 200];
// function setup() {
//   createCanvas(400, 500);
//   background("#dddddd");
//   stroke("black");
//   frameRate(10);
// }
// function draw() {
//   background("#dddddd");
//   fill("#8828dc25");
//   x[0] += 0.5;
//   x[1] -= 0.5;
//   arc(x[0], 30, 40, 40, 0.52, 5.76);
//   arc(x[1], 90, 40, 40, 0.52, 5.76);
// }


