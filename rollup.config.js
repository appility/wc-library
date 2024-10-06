import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // Make sure this file imports your app-button.ts
  output: {
    file: 'dist/wc-componens.js',  // Your bundled output
    format: 'es',                // ES module format
    sourcemap: true              // Enable sourcemap for easier debugging
  },
  plugins: [
    resolve(),                   // Resolve node_modules imports
    typescript({ tsconfig: './tsconfig.json' }),  // Compile TypeScript
    terser()                     // Minify the output
  ],
};
