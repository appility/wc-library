import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';  // Import the PostCSS plugin

export default {
  input: 'src/index.ts', // Make sure this file imports your app-button.ts
  output: {
    file: 'dist/wc-componens.js',  // Your bundled output
    format: 'es',                // ES module format
    sourcemap: true              // Enable sourcemap for easier debugging
  },
  plugins: [
    resolve(),                   // Resolve node_modules imports
    resolve(),         // Resolve node_modules imports
    commonjs(),        // Convert CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }),  // Compile TypeScript
    postcss(),         // Add the PostCSS plugin to handle .css files
    terser(),          // Minify the output for smaller bundle size
  ],
};


