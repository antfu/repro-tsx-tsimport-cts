Reproduction of tsx v4.13.0 importing CTS file with `tsImport()`

- `node start1.mjs` (`index.ts` -> `foo/index.cts`)
- `node start2.mjs` (-> `index.cts`)
- `node start3.mjs` (`index2.ts` -> `foo/index2.ts` (cjs scope)) 
  - To get this work t might require to sacrifice some performance to check the package.json for every file for correctness. I don't expect people should mix import types, personally it's acceptable to say this is not supported.

This happens when `type: module` is presented in the root-level `package.json` file.
