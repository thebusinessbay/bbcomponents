import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs'

const config = {
    input: 'src/components.js',
    output: {
        format: 'umd',
        name: 'components',
        globals: {
            react: "React",
            "react-tooltip": "React tooltip",
            "styled-components": "styled-components"
        }
    },
    external: ["react", "react-tooltip", "styled-components"],
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production')
          }),
          babel({
            exclude: "node_modules/**"
          }),
          resolve(),
          commonjs(),
          uglify(),
    ],
}
export default config