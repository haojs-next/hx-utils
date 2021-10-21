import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import pkg from './package.json';


const isPro = process.env.NODE_ENV === "production";
console.log(isPro);

const plugins = [
    commonjs(),
    babel(),
    filesize()
]


// browser
if (isPro) {
    plugins.push(terser());
}


export default [
  {
    input: 'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs', name: 'hxUtils' },
        { file: pkg.module, format: 'es', name: 'hxUtils' },
		{ file: pkg.unpkg, format: 'umd', name: 'hxUtils' }
    ],
    plugins
  }
]
