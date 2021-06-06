import path from "path";
import fs from "fs";
import util from "util";
import { createFilter } from "@rollup/pluginutils";

const readFileAsync = util.promisify(fs.readFile);
const defaultInclude = ["**/*.glsl", "**/*.frag", "**/*.vert"];

function createTemplate(text) {
  return `
    const blob = new Blob([\`${text}\`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob)

    export default url;
  `;
}

export default function glsl(options = {}) {
  const { include = defaultInclude, exclude } = options;

  const filter = createFilter(include, exclude);

  return {
    name: "glsl-plugin",

    load: async (id) => {
      if (!filter(id)) {
        return null;
      }

      const text = await readFileAsync(id, "utf8");
      const template = createTemplate(text);

      return template;
    },
  };
}
