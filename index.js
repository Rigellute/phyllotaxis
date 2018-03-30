let n = 0;
const c = 4;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    background(50);
    fill(255);
}

function draw() {

    const a = n * 137.5;
    const r = c * sqrt(n);

    const x = r * cos(a) + width / 2;
    const y = r * sin(a) + height / 2;

    fill(n % 1000 + 130, n % 900, n % 256 + 50);
    noStroke();
    ellipse(x, y, 5, 5);

    n++;
}
