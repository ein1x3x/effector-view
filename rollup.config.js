import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import jsonPlugin from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import bundleSize from 'rollup-plugin-bundle-size'

const external = [
  'effector',
  'effector-react',
  'react',
  'react-dom'
];

const plugins =  [
  typescript({
    clean: true,
  }),

  babel({
    exclude: 'node_modules/**',

    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    runtimeHelpers: true,

    presets: [
      '@babel/preset-react',
      '@babel/preset-env',
      '@babel/preset-typescript',
    ],

    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'effector/babel-plugin',
        {
          factories: ['src/index.ts', 'src/builder.tsx']
        }
      ],
    ]
  }),

  nodeResolve({
    jsnext: true,

    skip: ['effector', 'effector-react', 'react' , 'react-dom'],

    extensions: ['.js', '.mjs']
  }),

  commonjs({
    extensions: ['.js', '.mjs']
  }),

  terser(),

  jsonPlugin(),

  bundleSize()
];

const output = {

  file: './dist/index.js',

  format: 'cjs',

  freeze: false,

  exports: 'named',

  sourcemap: true,

  externalLiveBindings: false
};

export default [
  {
    input: './src/index.ts',

    plugins,

    external,

    output
  }
];