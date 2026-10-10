function setup() {
  createCanvas(640, 800);
  background(240);
  
  // Center of our leaf
  let cX = 200;
  let cY = 220;
  
  fill(204, 0, 0); // Red maple leaf color
  noStroke();
  
  beginShape();
  // Bottom point / Stem Base
  vertex(cX, cY + 140);
  vertex(cX - 10, cY + 140);

  // corner
  vertex(cX - 10, cY + 120);

  vertex(cX - 30, cY + 130);

  // corner
  vertex(cX - 25, cY + 110);

  vertex(cX - 75, cY + 130);
  vertex(cX - 75, cY + 105);

  // top of left leaf
  vertex(cX - 100, cY + 85);
  vertex(cX - 75, cY + 65);
  vertex(cX - 80, cY + 35);

  // corner
  vertex(cX - 30, cY + 50);

  // Top
  vertex(cX - 60, cY + 5 );
  vertex(cX - 20, cY);
  vertex(cX, cY - 30);

  


  // Right side //
    // Bottom point / Stem Base
  vertex(cX, cY + 140);
  vertex(cX + 10, cY + 140);

  // corner
  vertex(cX + 10, cY + 120);

  vertex(cX + 30, cY + 130);

  // corner
  vertex(cX + 25, cY + 110);

  vertex(cX + 75, cY + 130);
  vertex(cX + 75, cY + 105);

  // top of left leaf
  vertex(cX + 100, cY + 85);
  vertex(cX + 75, cY + 65);
  vertex(cX + 80, cY + 35);

  // corner
  vertex(cX + 30, cY + 50);

  // Top
  vertex(cX + 60, cY + 5);
  vertex(cX + 20, cY);
  vertex(cX, cY - 30);

  
  // Left side lobes
  // bezierVertex(cX - 30, cY + 40, cX - 60, cY + 40, cX - 70, cY + 10);
  // bezierVertex(cX - 100, cY + 10, cX - 90, cY - 40, cX - 110, cY - 50);
  // bezierVertex(cX - 60, cY - 30, cX - 50, cY - 60, cX - 30, cY - 70);
  
  // Top left lobe
  // bezierVertex(cX - 40, cY - 110, cX - 10, cY - 120, cX, cY - 140);
  
  // Top right lobe
  // bezierVertex(cX + 10, cY - 120, cX + 40, cY - 110, cX + 30, cY - 70);
  
  // Right side lobes
  // bezierVertex(cX + 50, cY - 60, cX + 60, cY - 30, cX + 110, cY - 50);
  // bezierVertex(cX + 90, cY - 40, cX + 100, cY + 10, cX + 70, cY + 10);
  // bezierVertex(cX + 60, cY + 40, cX + 30, cY + 40, cX, cY + 120);
  endShape(CLOSE);
}
