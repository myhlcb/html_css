import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './skin/SkinDemo.vue',
  output: {
    format: 'iife',
    file: './dist/rollup.js',
    name: 'MyComponent'
  },
  plugins: [
    commonjs(),
    vue()
  ]
}