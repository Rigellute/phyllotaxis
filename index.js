import p5 from 'p5';
let n = 0;
const c = 4;

function setup(sketch) {
    return () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.angleMode(sketch.DEGREES);
        sketch.background(50);
        sketch.fill(255);
    }
}

function draw(sketch) {
    return () => {
        const a = n * 137.3;
        const r = c * sketch.sqrt(n);

        const x = r * sketch.cos(a) + sketch.width / 2;
        const y = r * sketch.sin(a) + sketch.height / 2;

        sketch.fill(n % 1000 + 130, n % 900, n % 256 + 50);
        sketch.noStroke();
        sketch.ellipse(x, y, 5, 5);

        n++;
    }
}

new p5(sketch => {
    sketch.setup = setup(sketch);
    sketch.draw = draw(sketch);
})
