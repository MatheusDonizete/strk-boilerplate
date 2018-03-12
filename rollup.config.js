import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default [{
  input: 'src/js/app',
  output: {
    name: 'app',
    file: 'public/js/app.bundle.js',
    format: 'iife',
    sourcemap: 'inline'
  },  
  plugins: [
    babel({
      include: ['./src/**/*.js'],
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    uglify()    
  ],
}];
