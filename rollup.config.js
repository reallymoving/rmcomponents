// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';

export default {
    input: './src/index.js',

    output: [
        {
            name: 'comlib',
            sourcemap: true,
            file: './dist/build/index.js',
            format: 'cjs',
            globals: { react: 'React' },
        },
        {
            file: './dist/build/index.es.js',
            format: 'es',
            exports: 'named',
        }
    ],

    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        resolve(),
        commonjs(),
        image(),
        svgr({ exportType: 'named', jsxRuntime: 'classic' }),
        //this one not working I think - supposed to import the files to dist i think
        url({
            //include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.svg', '**/*.png'],
            limit: 0,
        }),
        copy({
            targets: [
                {src: 'src/global/fonts/*', dest: 'dist/fonts'}
            ]
        })
    ],

    external: ['react', 'react-dom'],
};