import json from "@rollup/plugin-json";
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';


export default {
  input: './src/sdk.ts',
  output: {
    file: './dist/bundle.js',
    // Also note 'es' not 'iife', since a library exports something, unlike an application.
    format: 'es'
  },
  plugins: [
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5",
      resolveJsonModule: true,
      moduleResolution: 'node',
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    }),
    nodeResolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    json(),
    commonjs(),
    buble()
  ]
};