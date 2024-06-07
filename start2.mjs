import { tsImport } from 'tsx/esm/api';

const mod = await tsImport('./foo/index.cts', import.meta.url);

console.log(mod);
