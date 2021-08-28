import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import json from "@rollup/plugin-json";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './build/src/sdk.js',
  output: {
    dir: 'dist',
  },
  plugins: [
    json()
  ]
});