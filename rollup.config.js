import fs from "fs";
import path from "path";

import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" }),
);
const extensions = [".ts", ".tsx"];

export default {
  input: "src/index.tsx",
  external: ["react", "content-type", "object-assign"],
  plugins: [
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),
    nodeResolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto",
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    postcss({
      extensions: [".scss", ".sass"],
      modules: true,
      use: [
        [
          "sass",
          {
            includePaths: ["./node_modules"],
          },
        ],
      ],
    }),
    terser(),
    copy({
      targets: [
        { src: "src/styles/variables.*", dest: "dist" },
        { src: "public/**/*", dest: "dist" },
      ],
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
    {
      name: "index",
      file: pkg.umd,
      format: "umd",
      sourcemap: true,
      globals: {
        "react": "react",
        "content-type": "contentType",
        "object-assign": "require$$1",
      },
    },
  ],
};
