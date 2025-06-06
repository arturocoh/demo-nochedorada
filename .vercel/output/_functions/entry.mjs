import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_xqqN0Uor.mjs';
import { manifest } from './manifest_DEUaQO4s.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/combate/_id_.astro.mjs');
const _page2 = () => import('./pages/la-porra.astro.mjs');
const _page3 = () => import('./pages/luchador/_id_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/combate/[id].astro", _page1],
    ["src/pages/la-porra.astro", _page2],
    ["src/pages/luchador/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "22545907-9afd-4db3-aedb-d9297406ea6d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
