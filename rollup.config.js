import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import pkg from './package.json'

// browser
export default [
  {
    input: 'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs', name: 'hxUtils' },
		{ file: pkg.unpkg, format: 'umd', name: 'hxUtils' }
    ],
    plugins: [
		commonjs(),
		babel(),
		// terser(),
		filesize()
    ]
  }
]
