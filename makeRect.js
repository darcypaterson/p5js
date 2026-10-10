 let angle = 0;
 let speed = 0.0001;

function makeRect() {
    for (let i = 0; i < 29; i++) {
        
        // let r = random(0, 255);
        // let g = random(0, 255);
        // let b = random(0, 255);

        let r = map(
          noise(0 + frameCount * 0.005 + i),
          0,
          1,
          0,
          125
        );

        let g = map(
          noise(0 + frameCount * 0.005 + i),
          0,
          1,
          20,
          140
        );

        let b = map(
          noise(0 + frameCount * 0.005 + i),
          0,
          1,
          30,
          150
        );

        fill(210, 50, 240, 40);
        stroke(20, 250, 90);

        rect(
            20 + i * ((sin(angle) * 10) + 10), 
            20 + i * ((cos(angle) * 10) + 10), 
            600 - i * 20, 
            600 - i * 20, 
            0 + i
        );

        angle += speed;
    }
}

