import { tsImport } from 'tsx/esm/api';

const mod = await tsImport('./index2.ts', import.meta.url);

console.log(mod);
