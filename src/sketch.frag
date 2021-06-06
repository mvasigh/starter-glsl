#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	float r = abs(sin(u_time));
	float g = abs(sin(u_time + 0.15));
	float b = abs(sin(u_time + 0.30));

	gl_FragColor = vec4(r, g, b, 1.0);
}