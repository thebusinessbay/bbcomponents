import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel';

const config = {
    input: 'src/components.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'components',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
}
export default config