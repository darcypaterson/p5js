function Face(x, y, width, height, color, radius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.radius = radius;

    this.x = x / 2;

    let longline = this.x;
    let shortline = this.width / 2;
    let posx = this.x - shortline / 2;

    this.display = function() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height, this.radius);

        let eye1 = new Eye(
            this.x - shortline / 2, // x
            this.y, // y
            this.width / 20, // radius
            "rebeccapurple" // colour
        );

        let eye2 = new Eye(
            this.x + shortline / 2, // x
            this.y, // y
            this.width / 20, // radius
            "skyblue" //color
        );

        eye1.display();
        eye2.display();

        line(this.x - shortline / 2, this.y, this.x - shortline / 2, this.y + 300);
        line(this.x + shortline / 2, this.y, this.x + shortline / 2, this.y + 300);

    }
}