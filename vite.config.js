// @ts-check
import preactRefresh from "@prefresh/vite";
import url from "@rollup/plugin-url";
import glsl from "./plugins/glsl";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const config = {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [preactRefresh(), glsl()],
};

export default config;
