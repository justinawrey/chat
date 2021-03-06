import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config()

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    }
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'es',
    name: 'app',
    file: path.resolve('public', 'build', 'bundle-esm.mjs')
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    postcss({
      extract: path.resolve('public', 'build', 'bundle.css'),
      minimize: production,
      sourceMap: !production,
      config: {
        path: 'postcss.config.js',
      },
    }),
    resolve({
      preferBuiltins: false,
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    replace({
      'process.env.PUSHER_APP_KEY': JSON.stringify(process.env.PUSHER_APP_KEY),
      'process.env.PUSHER_APP_CLUSTER': JSON.stringify(process.env.PUSHER_APP_CLUSTER),
    }),
    !production && serve(),
    !production && livereload('public'),
    production && terser(),
    production && sizeSnapshot(),
    progress(),
  ],
  watch: {
    clearScreen: false
  }
};
