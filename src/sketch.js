import p5 from "p5";
import mount from "./app/mount";
import vertexFile from "./sketch.vert";
import fragmentFile from "./sketch.frag";

/** @typedef {(p5) => void} P5Handler */

const WIDTH = 800;
const HEIGHT = 800;

let shader;

/** @type {P5Handler} */
function preload(p) {
  shader = p.loadShader(vertexFile, fragmentFile);
}

/** @type {P5Handler} */
function setup(p) {
  p.createCanvas(WIDTH, HEIGHT, p.WEBGL);

  p.shader(shader);
}

/** @type {P5Handler} */
function draw(p) {
  p.shader(shader)
  p.quad(-1, -1, 1, -1, 1, 1, -1, 1)

  p.stroke(255);
  p.noFill();
  p.strokeWeight(1);
  p.circle(0, 0, 200);
  p.circle(0, 0, 180);
  p.circle(0, 0, 160);
}

export default mount({ preload, setup, draw });
