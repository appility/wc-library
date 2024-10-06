declare module 'rollup-plugin-terser' {
    import { Plugin } from 'rollup';
    export function terser(options?: object): Plugin;
  }
  