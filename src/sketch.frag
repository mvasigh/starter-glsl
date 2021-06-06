#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	
	float mouse_val = (u_mouse.x / u_resolution.x) + (u_mouse.y / u_resolution.y);
	float offset = u_time - (st.x * st.x) + (st.y * st.y) + mouse_val;

	float r = abs(sin(offset));
	float g = abs(sin(offset + (1.0 / 3.0)));
	float b = abs(sin(offset + (2.0 / 3.0)));

	gl_FragColor = vec4(r, g, b, 1.0);
}