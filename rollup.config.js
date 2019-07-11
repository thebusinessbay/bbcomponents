import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'


const config = {
    input: 'src/components.js',
    output: {
        format: 'umd',
        name: 'components',
        globals: {
            react: "React"
        }
    },
    plugins: [
        postcss({
            extensions: [ '.css' ],
        }),
        babel(),
        resolve(),
        commonJS({
        include: 'node_modules/**'
        })
    ],
}
export default config