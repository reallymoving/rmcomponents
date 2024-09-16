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

import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
    input: Object.fromEntries(
        ['components'].flatMap(folder =>
            glob.sync(`src/${folder}/*/*.js`)
                .filter(file => !file.includes('test') && !file.includes('stories') && !path.basename(file).startsWith('index.')) // Exclude files with "test", "stories", and "index.js" in the name
                .map(file => [
                    // This gets the JavaScript filename without the path and extension
                    path.basename(file, path.extname(file)),
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo.js becomes /project/src/nested/foo.js
                    fileURLToPath(new URL(file, import.meta.url))
                ])
        )
    ),
    output: [
        {
            dir: './publish/dist/esm',
            format: 'es',
            entryFileNames: '[name].js',
            exports: 'named'
        },
        {
            dir: './publish/dist/cjs',
            format: 'cjs',
            entryFileNames: '[name].js',
            exports: 'auto'
        },
    ],

    plugins: [
        //exclude peer depenenciesb 
        peerDepsExternal(),
        postcss({
            extract: 'rmcomponents.css',
            minimize: true,
            use: ['sass'],
        }),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        //reslolves 3rd party libraries
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
                {src: './indexcopy.js', dest: 'publish/dist/esm/', rename: 'index.js'}
            ]
        })
    ],

    external: ['react', 'react-dom'],
};