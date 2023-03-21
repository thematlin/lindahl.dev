import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
  plugins: [
    copy({
      targets: [
        { src: "src/index.html", dest: "dist/public" },
        { src: "node_modules/xterm/css/xterm.css", dest: "dist/public" },
        { src: "node_modules/xterm/lib/xterm.js", dest: "dist/public" },
      ],
    }),
  ],
};
