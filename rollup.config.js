import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'public/js/boot.ts',
  format: 'iife',
  dest: 'public/dist/bundle.es2015.js',
  sourceMap: true,
  plugins: [
    angular(),
    typescript(),
    alias({ resolve: ['.js'], rxjs: __dirname + '/node_modules/rxjs' })/*,
    resolve({ jsnext: true,
              main: true,
              browser: true })*/
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
  ],
  globals: {
    '@angular/common' : 'vendor._angular_common',
    '@angular/compiler' : 'vendor._angular_compiler',
    '@angular/core' : 'vendor._angular_core',
    '@angular/platform-browser' : 'vendor._angular_platformBrowser',
    '@angular/platform-browser-dynamic' : 'vendor._angular_platformBrowserDynamic'
  }
}