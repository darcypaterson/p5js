var stats;
var homeRuns = [];


function preload()  {
    stats = loadTable('/csv/data.csv');
}

function setup() {
    createCanvas(800, 500);
    var rowCount = stats.getRowCount();
    homeRuns = [];

    for (let i = 0; i < rowCount; i++) {
        homeRuns[i] = stats.getNum(i, 1);
        
    }
}

function draw() {
    background(220);
    stroke(153, 0, 0);
    line(20,100,20,200);
    line(20,200,780,200);
    for (let i = 0; i < homeRuns.length; i++) {
        let x = map(i, 0, homeRuns.length-1, 20, 780);
        line(x, 20, x, 20);
    }
    noFill();
    stroke(0);
    beginShape();
    for (let i = 0; i < homeRuns.length; i++) {
        let x = map(i, 0, homeRuns.length-1, 20, 780);
        let y = map(homeRuns[i], 0, 50, 200, 20);
        vertex(x,y);
    }
    endShape();
}
