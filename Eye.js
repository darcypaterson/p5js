function Eye(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
}