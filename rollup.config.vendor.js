import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
 entry: 'public/vendor.ts',
 dest: 'public/dist/vendor.es2015.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
  //  typescript(),
   alias({ rxjs: __dirname + '/node_modules/rxjs' }),
   resolve({ module: true,
             main: true,
             preferBuiltins: true,
             extensions: [ '.js' ] })
 ]
}