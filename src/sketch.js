import p5 from "p5";
import mount from "./app/mount";
import vertexFile from "./sketch.vert";
import fragmentFile from "./sketch.frag";

/** @typedef {(p5) => void} P5Handler */

const WIDTH = 800;
const HEIGHT = 800;

let shader;

function setUniforms(p, _shader) {
  const uniforms = {
    time: p.frameCount * 0.01,
    resolution: [WIDTH, HEIGHT],
    mouse: [p.mouseX, p.mouseY],
  };

  for (let [prop, value] of Object.entries(uniforms)) {
    _shader.setUniform("u_" + prop, value);
  }
}

/** @type {P5Handler} */
function preload(p) {
  shader = p.loadShader(vertexFile, fragmentFile);
}

/** @type {P5Handler} */
function setup(p) {
  p.createCanvas(WIDTH, HEIGHT, p.WEBGL);

  p.shader(shader);
  setUniforms(p, shader);
}

/** @type {P5Handler} */
function draw(p) {
  p.shader(shader);
  setUniforms(p, shader);

  p.quad(-1, -1, 1, -1, 1, 1, -1, 1);
}

export default mount({ preload, setup, draw });
