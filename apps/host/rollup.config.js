import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: 'src/core/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'build/AIRport/apps/core/bundle.js'
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}, {
    input: 'src/main/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'build/AIRport/apps/main/bundle.js'
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}];
