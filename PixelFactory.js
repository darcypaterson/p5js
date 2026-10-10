 function Cell(x, y, type) { 
  this.x = x;
  this.y = y;

  // Store original position
  this.baseX = x;
  this.baseY = y;

  this.type = type;
  this.c = color(random(255), random(255), random(255));

  this.display = function () {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 5, 5);
  };
}

function PixelFactoryLogo(startX, startY, noiseOffset) {

    this.cells = [];

    const pattern = [
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZXXXZXZXZZZXZXXXZXZZZXXXZXXXZXXXZXXXZXXXZXXXZXZXZ",
        "ZXZXZXZZXZXZZXZZZXZZZXZZZXZXZXZXZZXZZXZXZXZXZXZXZ",
        "ZXXXZXZZZXZZZXXXZXZZZXXXZXXXZXZZZZXZZXZXZXXXZXXXZ",
        "ZXZZZXZZXZXZZXZZZXZZZXZZZXZXZXZXZZXZZXZXZXXZZZXZZ",
        "ZXZZZXZXZZZXZXXXZXXXZXZZZXZXZXXXZZXZZXXXZXZXZZXZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
    ];

    const colors = {
        X: color(30, 30, 30),
        Z: color(230, 230, 230),
    };

    for (let row = 0; row < pattern.length; row++) {
        for (let col = 0; col < pattern[row].length; col++) {
            
            let cell = new Cell(
            startX + col * 5,
            startY + row * 5,
            pattern[row][col]
        );

            cell.c = colors[pattern[row][col]];
            this.cells.push(cell);
            
        }
    }
    
    this.update = function () {

    for (let i = 0; i < this.cells.length; i++) {

    //   let xOffset = map(
    //     noise(noiseOffset + i * 100 + frameCount * 0.01),
    //     0,
    //     1,
    //     -1,
    //     1
    //   );

    //   let yOffset = map(
    //     noise(noiseOffset + i * 100 + frameCount * 0.01),
    //     0,
    //     1,
    //     -1,
    //     1
    //   );

    //   this.cells[i].x = this.cells[i].baseX + xOffset;
    //   this.cells[i].y = this.cells[i].baseY + yOffset;

      if (this.cells[i].type === "X") {

        let a = map(
          noise(noiseOffset + frameCount * 0.05 + i),
          0,
          1,
          30,
          180
        );

        this.cells[i].c = color(a, a, a, 255);
      }

      if (this.cells[i].type === "Z") {

        let b = map(
          noise(noiseOffset + frameCount * 0.05 + i),
          0,
          1,
          200,
          250
        );

        this.cells[i].c = color(b, b, b, 255);
      }

    //   if (this.cells[i].type === "W") {

    //     let w = map(
    //       noise(noiseOffset + frameCount * 0.05 + i),
    //       0,
    //       1,
    //       180,
    //       255
    //     );

    //     this.cells[i].c = color(w, w, w, 255);
    //   }
    }
  };
  
  this.display = function () {

    for (let cell of this.cells) {
      cell.display();
    }
  };


}

let cells = [];

function setup() {
  createCanvas(640, 800);

  pixel = new PixelFactoryLogo(120, 150, 0);

}

function draw() {

    background("#f3f3f3");
    push();
    pixel.update();
    pixel.display();
    pop();


}

