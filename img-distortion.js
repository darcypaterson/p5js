let vwImg;
let avgGrid;

const cellSize = 5;
const rippleSpeed = 1.5;

let pressOrigin = null;
let pressStartTime = 0;
let pressMaxRadius = 0;
let rippleState = "idle";
let collapseStartRadius = 0;
let collapseStartTime = 0;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function preload() {
  vwImg = loadImage("./img/Wolfsburg_VW-Werk.jpg");
}

function setup() {
  const cnv = createCanvas(vwImg.width, vwImg.height);
  cnv.style("max-width", "80vw");
  cnv.style("height", "auto");
  imageMode(CORNER);
  avgGrid = buildAverageGrid(vwImg, cellSize);
}

function draw() {
  background("#f7f7f7");

  const hoverCol = floor(mouseX / cellSize);
  const hoverRow = floor(mouseY / cellSize);

  let rippleRadius = 0;
  if (rippleState === "expanding") {
    const duration = max(pressMaxRadius / rippleSpeed, 1);
    const t = constrain((millis() - pressStartTime) / duration, 0, 1);
    rippleRadius = easeInOutCubic(t) * pressMaxRadius;
  } else if (rippleState === "collapsing") {
    const duration = max(collapseStartRadius / rippleSpeed, 1);
    const t = constrain((millis() - collapseStartTime) / duration, 0, 1);
    rippleRadius = collapseStartRadius * (1 - easeInOutCubic(t));
    if (t >= 1) {
      rippleRadius = 0;
      rippleState = "idle";
      pressOrigin = null;
    }
  }

  noStroke();
  for (const cell of avgGrid) {
    const col = cell.x / cellSize;
    const row = cell.y / cellSize;
    const colDist = abs(col - hoverCol);
    const rowDist = abs(row - hoverRow);

    const a = 255;

    const hovering = colDist === 0 && rowDist === 0;
    const innerRing = colDist <= 1 && rowDist <= 1;
    const nearHover = colDist <= 1 && rowDist <= 1;

    let rippled = false;
    if (rippleState !== "idle" && pressOrigin) {
      const dx = cell.x - pressOrigin.x;
      const dy = cell.y - pressOrigin.y;
      rippled = sqrt(dx * dx + dy * dy) <= rippleRadius;
    }

    const targetSize = rippled
      ? cellSize
      : hovering
      ? cellSize + 20
      : innerRing
      ? 16
      : cellSize;
    cell.size = lerp(cell.size, targetSize, 0.2);

    const offset = (cell.size - cellSize) / 2;
    const gap = 0.25;
    const drawSize = cell.size - gap;
    const drawOffset = offset + gap / 2;

    fill(cell.r, cell.g, cell.b, a);
    if (hovering) {
      square(cell.x - drawOffset, cell.y - drawOffset, drawSize);
    } else if (rippled || nearHover) {
      square(cell.x - drawOffset, cell.y - drawOffset, drawSize, 1);
    } else {
      circle(cell.x - drawOffset + drawSize / 2, cell.y - drawOffset + drawSize / 2, drawSize);
    }
  }
}

function buildAverageGrid(img, size) {
  img.loadPixels();

  const grid = [];

  for (let y = 0; y < img.height; y += size) {
    for (let x = 0; x < img.width; x += size) {
      const w = min(size, img.width - x);
      const h = min(size, img.height - y);

      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      let count = 0;

      for (let j = y; j < y + h; j++) {
        for (let i = x; i < x + w; i++) {
          const idx = (j * img.width + i) * 4;
          sumR += img.pixels[idx];
          sumG += img.pixels[idx + 1];
          sumB += img.pixels[idx + 2];
          count++;
        }
      }

      grid.push({
        x: x,
        y: y,
        r: sumR / count,
        g: sumG / count,
        b: sumB / count,
        size: size,
      });
    }
  }

  return grid;
}

function mousePressed() {
  pressOrigin = { x: mouseX, y: mouseY };
  pressStartTime = millis();
  rippleState = "expanding";

  const corners = [
    [0, 0],
    [width, 0],
    [0, height],
    [width, height],
  ];
  pressMaxRadius = max(
    corners.map(([cx, cy]) => dist(pressOrigin.x, pressOrigin.y, cx, cy))
  );
}

function mouseReleased() {
  if (rippleState === "expanding") {
    collapseStartRadius = min((millis() - pressStartTime) * rippleSpeed, pressMaxRadius);
    collapseStartTime = millis();
    rippleState = "collapsing";
  }
}

function mouseMoved() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    const c = get(mouseX, mouseY);
    console.log(`RGB(${c[0]}, ${c[1]}, ${c[2]})`);
  }
}
