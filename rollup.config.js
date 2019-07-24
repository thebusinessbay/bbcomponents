import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-porter';
var path = require("path");
const NODE_ENV = process.env.NODE_ENV || "development";

const config = {
    input: 'src/components.js',
    output: {
        format: 'umd',
        name: 'components',
        globals: {
            react: "React",
            "react-dom": "React dom",
            "react-tooltip": "React tooltip",
            "styled-components": "styled-components"
        }
    },
    external: ["react", "react-dom", "react-tooltip", "styled-components"],
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
          }),
          babel({
            exclude: "node_modules/**"
          }),
          resolve(),
          commonjs(),
          uglify(),
          css(),
    ],
}
export default config