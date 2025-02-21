import autoprefixer from "autoprefixer";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import { visualizer } from "rollup-plugin-visualizer";
import { createRequire } from "node:module";

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.js",
        format: "umd",
        name: "Assignment",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@phosphor-icons/react": "PhosphorIcons",
          clsx: "clsx",
          "tailwind-merge": "twMerge",
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
        ],
      },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build.json",
      }),
      postcss({
        plugins: [(tailwindcss, autoprefixer)],
        inject: false,
        minimize: true,
        extract: "index.css",
      }),
      visualizer({ template: "sunburst" }),
      terser(),
    ],
    external: ["react-router-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
