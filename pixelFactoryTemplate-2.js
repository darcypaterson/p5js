let angle = 0;
speed = 0.0125;
let offset = 50;
let scalar = 50;

function Cylinder(x, y, radius, fillColor, strokeColor, strokeW ) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fillColor = fillColor;
  this.strokeColor = strokeColor;
  this.strokeW = strokeW;

  // this.y = this.y * 4;

  // let amount = 2;

  this.display = function() {
    fill(this.fillColor);
    stroke(this.strokeColor);
    strokeWeight(this.strokeW);

      // this.x = this.x + radius;

      ellipse(this.x, this.y * 2, this.radius);
      // stroke(120, 120, 120, 120);
      // arc(this.x, this.y * 2 + radius, radius, radius, 0, PI);
      // line(this.x - radius/2, this.y * 2, this.x - radius/2, this.y * 2 + radius * 1.5);
      // line(this.x + radius/2, this.y * 2, this.x + radius/2, this.y * 2 + radius);

      
    
  }
}

let cylinders = [];

function setup() {
  createCanvas(640, 800);
  pixelFactoryLogo = new PixelFactory(380, 750, 0);

  // cylinder0 = new Cylinder(20, 220, 200, "#cb2b2b00", "green", 2);
  // cylinder1 = new Cylinder(120, 120, 200, "#cb2b2b00", "green", 2);


  let amt = 10;
  fill("blue");
  for (let i = 0; i < amt.length; i++) {
    // let cylinder = new Cylinder(100, 200, 20, "red", "purple", 2);
    // let recta = rect(200, 300, 40, 40);
    // cylinders.push(recta);
    // cylinders[i];
  }
}



function draw() {

    background("#efefef");

    fill(20, 40, 40, 200);
    rect(10, 10, 50, 100);

    fill(20, 120, 30, 200);
    rect(30, 30, 120, 20);

      // cylinder0.display();
      // cylinder1.display();

      // for (cyl of cylinders) {
      //   cylinders
      // }

      for (let i = 0; i < 21; i++) {
  
        let cylinder3 = new Cylinder(
          117 + i * 20, 
          15 + offset + sin(angle + i * .25) * scalar, 
          200, 
          "#efefef00", 
          "#b6b6b6", 
          12
        );
        // cylinder3.display();
      }

      // Blue Sky
      // fill("#97d8e3");
      // rect(20, 20, 600, 600, 20);
        


      let amt = 5;
      for (let i = 0; i < 28; i++) {
        // const element = amt[i];
        // console.log(amt);
        
        // let recta = rect(300 + i * 40, 300, 30, 30);
        // alpha(120);
        
        let cylinder = new Cylinder(
          50 + i * 20, 
          75 + offset + sin(angle + i * .25) * scalar, 
          300, 
          "#bbeae700", 
          [10, 193, 229, 255], 

          // [10, 193, 229, map(0, 0, 1, 0 + 20 * i, 255)], 
          1
        );
        cylinder.display();

        // let cylinder4 = new Cylinder(
        //   43 + i * 20, 
        //   10 + offset + sin(angle + i * .25) * scalar, 
        //   40, 
        //   "#efefef00", 
        //   "#ffffffc2", 
        //   4
        // );
        // cylinder4.display();
        


        let r = map(0, 0, 1, 255 - i * 4, 0);

        // console.log(r);

        // fill(r, 100, 100);
        noFill();

        // rect(
        //   offset + 65 * 5 + sin(angle + i * 0.2) * scalar, 
        //   -40 + i * 10, 
        //   40, 
        //   40,
        //   2
        // );

        

        // let cylinder2 = new Cylinder(
        //   offset + 65 * 5 + sin(angle + i * 0.8) * scalar,
        //   40 + i * 40, 
        //   40, 
        //   "#efefef00", 
        //   "purple", 
        //   2
        // );
        // cylinder2.display();


        // let r = map(0.5, 0, 1, 0, i * sin(angle) * 100);
        
      }

      angle += speed;


      noFill();
      // rect(20, 20, 600, 600);


    push();
    pixelFactoryLogo.update();
    pixelFactoryLogo.display();
    pop();

    // The angle as text
    fill(30, 30, 30, 250);
    noStroke()
    text(sin(angle) * 100, 20, 780);

    // stroke(30);
    // strokeWeight(1);
    // line(width/3, 0, width/3, height);
    // line((width/3) * 2, 0, (width/3) * 2, height);
    // for (let h = 0; h < 18; h++) {
    //   let a = map(
    //     noise(130 + frameCount * 0.125 + h),
    //     0,
    //     1,
    //     10,
    //     60
    //   );

    //   let b = map(
    //     noise(130 + frameCount * 0.125 + h),
    //     0,
    //     1,
    //     120,
    //     250
    //   );

    //   fill(a, b, a + 180, 120);
    //   rect(
    //     20 + h * 30, 
    //     600 + 20 * noise(0.0005 * frameCount * 6 + h), 
    //     60 + 5 * noise(0.0005 * frameCount * 6 + h), 
    //     2 + 35 * noise(0.0005 * frameCount * 6 + h));
    //   // fill(b, b, b, 30);
    //   // rect(120, 580, 400, 60);
    //   // rect(500, 600, 100, 20);

    //   // fill(a, b, a + 180, 120);
    //   // rect(500, 100, 40, 40);
    //   // rect(
    //   //   400 + h * 30, 
    //   //   100 + 20 * noise(0.0005 * frameCount * 6 + h), 
    //   //   20 + 5 * noise(0.0005 * frameCount * 6 + h), 
    //   //   20 + 5 * noise(0.0005 * frameCount * 6 + h)
    //   // );


      
    // }

    // stroke(255, 0, 0, 30);
    // line(0, 781, 640, 781);

}


