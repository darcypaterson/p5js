function MySquare(posX, posY, sqWidth, sqHeight, sqColor) {
    this.x = posX;
    this.y = posY;
    this.width = sqWidth;
    this.height = sqHeight;
    this.color = sqColor;

    this.display = function() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}
