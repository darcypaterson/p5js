function PixelBlob(startX, startY) {
  this.cells = [];
  this.shadowCells = [];

  const shadowColor = color(0, 0, 0, 50);

  const pattern = [
    "..BBB..",
    ".BBWWB.",
    "BBBBWWB",
    "BBWBWWB",
    "BBBBWWB",
    "BBBBWWB",
    "BBBBWWB",
    "BBBBWWB",
    ".BBWWB.",
    "..BBB..",
  ];

  const colors = {
    ".": color(0, 0, 0, 0),
    B: color(20, 30, 20, 255),
    W: color(230, 235, 245, 255),
  };

  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[row].length; col++) {

      let cell = new Cell(
        startX + col * 20,
        startY + row * 20,
        pattern[row][col]
      );

      cell.c = colors[pattern[row][col]];
      this.cells.push(cell);

      let shadowCell = new Cell(
        startX + col * 20 + 10,
        startY + row * 20 + 10,
        pattern[row][col]
      );

      shadowCell.c =
        pattern[row][col] !== "."
          ? shadowColor
          : color(0, 0, 0, 0);

      this.shadowCells.push(shadowCell);
    }
  }

  this.update = function () {

    for (let i = 0; i < this.cells.length; i++) {

      let xOffset = map(
        noise(i * 100 + frameCount * 0.01),
        0,
        1,
        -5,
        5
      );

      let yOffset = map(
        noise(i * 100 + 5000 + frameCount * 0.01),
        0,
        1,
        -5,
        5
      );

      this.cells[i].x = this.cells[i].baseX + xOffset;
      this.cells[i].y = this.cells[i].baseY + yOffset;

      this.shadowCells[i].x = this.cells[i].x + 10;
      this.shadowCells[i].y = this.cells[i].y + 10;

      if (this.cells[i].type === ".") {

        let a = map(
          noise(frameCount * 0.05 + i),
          0,
          1,
          20,
          50
        );

        this.cells[i].c = color(0, 0, 0, a);
      }

      if (this.cells[i].type === "B") {

        let b = map(
          noise(frameCount * 0.05 + i),
          0,
          1,
          0,
          70
        );

        this.cells[i].c = color(b, b, b, 255);
      }

      if (this.cells[i].type === "W") {

        let w = map(
          noise(frameCount * 0.05 + i),
          0,
          1,
          180,
          255
        );

        this.cells[i].c = color(w, w, w, 255);
      }
    }
  };

  this.display = function () {

    for (let shadowCell of this.shadowCells) {
      shadowCell.display();
    }

    for (let cell of this.cells) {
      cell.display();
    }
  };
}