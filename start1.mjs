import { tsImport } from 'tsx/esm/api';

const mod = await tsImport('./index.ts', import.meta.url);

console.log(mod);
