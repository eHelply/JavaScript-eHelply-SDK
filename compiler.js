import {rollup} from "rollup";
import json from "@rollup/plugin-json";
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

const inputOptions = {
  input: './src/sdk.ts',
  external: [
    'axios'
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    typescript(
      {
        tsconfigOverride: {
          compilerOptions: {
            lib: ["es5", "es6", "dom"],
            target: "es5",
            resolveJsonModule: true,
            moduleResolution: 'node',
            esModuleInterop: true,
            allowSyntheticDefaultImports: true,
            declaration: true
          }
        },
        tsconfig: "./tsconfig.json"
      }
    ),
    json(),
    commonjs(),
    buble()
  ]
};

const outputOptions = [
  {
    file: './dist/bundle.js',
    format: 'es',
  },
  {
    file: './dist/bundle.common.cjs',
    format: 'cjs',
  }
];

function console_output(output) {
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === 'asset') {
      // For assets, this contains
      // {
      //   fileName: string,              // the asset file name
      //   source: string | Uint8Array    // the asset source
      //   type: 'asset'                  // signifies that this is an asset
      // }
      console.log('Asset', chunkOrAsset);
    } else {
      // For chunks, this contains
      // {
      //   code: string,                  // the generated JS code
      //   dynamicImports: string[],      // external modules imported dynamically by the chunk
      //   exports: string[],             // exported variable names
      //   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
      //   fileName: string,              // the chunk file name
      //   implicitlyLoadedBefore: string[]; // entries that should only be loaded after this chunk
      //   imports: string[],             // external modules imported statically by the chunk
      //   importedBindings: {[imported: string]: string[]} // imported bindings per dependency
      //   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
      //   isEntry: boolean,              // is this chunk a static entry point
      //   isImplicitEntry: boolean,      // should this chunk only be loaded after other chunks
      //   map: string | null,            // sourcemaps if present
      //   modules: {                     // information about the modules in this chunk
      //     [id: string]: {
      //       renderedExports: string[]; // exported variable names that were included
      //       removedExports: string[];  // exported variable names that were removed
      //       renderedLength: number;    // the length of the remaining code in this module
      //       originalLength: number;    // the original length of the code in this module
      //       code: string | null;       // remaining code in this module
      //     };
      //   },
      //   name: string                   // the name of this chunk as used in naming patterns
      //   referencedFiles: string[]      // files referenced via import.meta.ROLLUP_FILE_URL_<id>
      //   type: 'chunk',                 // signifies that this is a chunk
      // }
      console.log('Chunk', chunkOrAsset.modules);
    }
  }
}

async function build() {
  // create a bundle
  const bundle = await rollup(inputOptions);

  // console.log(bundle.watchFiles); // an array of file names this bundle depends on


  for (const outputOption of outputOptions) {
    // generate output specific code in-memory
    // you can call this function multiple times on the same bundle object
    const {output} = await bundle.generate(outputOption);

    // console_output(output);

    // or write the bundle to disk
    await bundle.write(outputOption);
  }

  // closes the bundle
  await bundle.close();
}

console.log("Starting Build..");

build().then(() => {
  console.log("Building Complete..");
  process.exit(0);
});
