import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';

// const production = !process.env.ROLLUP_WATCH;
const production = false;

const packageJson = require("./package.json");

export default [
    {
        input: 'src/to_be_generated/sapoto-core.runtime-index.ts',
        output: {
            sourcemap: true,
            format: 'esm',
            file: '../../ui/src/AIRport/apps/@sapoto/core/bundle.mjs'
        },
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                sourceMap: !production,
                inlineSources: !production
            }),
            production && terser(),
            copy({
                targets: [
                    {
                        src: 'node_modules/@airport/tower/dist/index.html',
                        dest: '../../ui/src/AIRport/apps/@sapoto/core'
                    },
                ]
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: './src/generated/application.ts',
        output: [{
            file: "dist/definition/application.mjs",
            sourcemap: true,
        }],
        plugins: [
            typescript({
                tsconfigDefaults: {
                    "files": [
                        "src/generated/application.ts"
                    ],
                }
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: './src/generated/mappedSuperclass.ts',
        output: [{
            file: "dist/definition/mappedSuperclass.mjs",
            sourcemap: true,
        }],
        plugins: [
            typescript({
                tsconfigDefaults: {
                    "files": [
                        "src/generated/mappedSuperclass.ts"
                    ],
                }
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: "src/to_be_generated/sapoto-core.api-index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                tsconfigDefaults: {
                    "emitDecoratorMetadata": false
                },
                sourceMap: !production,
                inlineSources: !production
            }),
            production && terser(),
        ],
        watch: {
            clearScreen: false
        },
    },
    {
        input: "../../ui/src/AIRport/apps/@sapoto/core/to_be_generated/sapoto-core.runtime-index.d.ts",
        output: [{ 
            file: ".../../ui/src/AIRport/apps/@sapoto/core/bundle.d.ts",
            format: "esm"
        }],
        plugins: [dts()],
        external: [/\.css$/],
    },
    {
        input: "dist/esm/to_be_generated/sapoto-core.api-index.d.ts",
        output: [{
            file: "dist/esm/sapoto-core.index.d.ts",
            format: "esm",
            sourcemap: true,
        }],
        plugins: [dts()],
    },
];
