#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;

	float offset = u_time - (st.x * st.x) + (st.y * st.y);
	float r = abs(sin(offset));
	float g = abs(sin(offset + (1.0 / 3.0)));
	float b = abs(sin(offset + (2.0 / 3.0)));

	gl_FragColor = vec4(r, g, b, 1.0);
}