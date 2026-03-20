import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import terser from "@rollup/plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: false,
        declarationDir: null,
      }),
      terser(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]