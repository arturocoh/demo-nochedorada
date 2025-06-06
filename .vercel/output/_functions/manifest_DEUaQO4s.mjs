import { f as decodeKey } from './chunks/astro/server_B8tRcDDq.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dgm8NIOB.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/nochedorada/noche-dorada/","cacheDir":"file:///E:/nochedorada/noche-dorada/node_modules/.astro/","outDir":"file:///E:/nochedorada/noche-dorada/dist/","srcDir":"file:///E:/nochedorada/noche-dorada/src/","publicDir":"file:///E:/nochedorada/noche-dorada/public/","buildClientDir":"file:///E:/nochedorada/noche-dorada/dist/client/","buildServerDir":"file:///E:/nochedorada/noche-dorada/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/combate/[id]","isIndex":false,"type":"page","pattern":"^\\/combate\\/([^/]+?)\\/?$","segments":[[{"content":"combate","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/combate/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/la-porra","isIndex":false,"type":"page","pattern":"^\\/la-porra\\/?$","segments":[[{"content":"la-porra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/la-porra.astro","pathname":"/la-porra","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.sLc9duiL.css"}],"routeData":{"route":"/luchador/[id]","isIndex":false,"type":"page","pattern":"^\\/luchador\\/([^/]+?)\\/?$","segments":[[{"content":"luchador","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/luchador/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.sLc9duiL.css"},{"type":"inline","content":".holographic-card[data-astro-cid-pofwlrbn]{display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;transition:all .5s ease}.holographic-card[data-astro-cid-pofwlrbn]:after{content:\"\";position:absolute;z-index:60;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(255,217,0,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0}.holographic-card-active[data-astro-cid-pofwlrbn]:after{opacity:1;z-index:60;transform:rotate(-45deg) translateY(100%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/nochedorada/noche-dorada/src/pages/luchador/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/luchador/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["E:/nochedorada/noche-dorada/src/components/BoxerCard.astro",{"propagation":"in-tree","containsHead":false}],["E:/nochedorada/noche-dorada/src/components/Hero.astro",{"propagation":"in-tree","containsHead":false}],["E:/nochedorada/noche-dorada/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/combate/[id]@_@astro":"pages/combate/_id_.astro.mjs","\u0000@astro-page:src/pages/la-porra@_@astro":"pages/la-porra.astro.mjs","\u0000@astro-page:src/pages/luchador/[id]@_@astro":"pages/luchador/_id_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","E:/nochedorada/noche-dorada/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_OCS1gKYp.mjs","\u0000@astrojs-manifest":"manifest_DEUaQO4s.mjs","E:/nochedorada/noche-dorada/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.Pcy29-aY.js","E:/nochedorada/noche-dorada/src/components/Countdown.astro?astro&type=script&index=0&lang.ts":"_astro/Countdown.astro_astro_type_script_index_0_lang.B0A33DMP.js","E:/nochedorada/noche-dorada/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","E:/nochedorada/noche-dorada/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts":"_astro/BoxerCard.astro_astro_type_script_index_0_lang.CRLAbTDo.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/nochedorada/noche-dorada/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.querySelector(\"#landing\");let e=null;document.addEventListener(\"boxer-card-exit\",()=>{t?.classList.remove(\"hidden\"),e&&(document.querySelector(`[data-id=\"hero-image-${e}\"]`)?.classList.add(\"hidden\"),document.querySelector(`[data-id=\"hero-name-${e}\"]`)?.classList.add(\"hidden\"),e=null)}),document.addEventListener(\"boxer-card-hovered\",a=>{const d=a.detail.id;console.log(d),e!==d&&(e&&(console.log(e),document.querySelector(`[data-id=\"hero-image-${e}\"]`)?.classList.add(\"hidden\"),document.querySelector(`[data-id=\"hero-name-${e}\"]`)?.classList.add(\"hidden\")),t?.classList.add(\"hidden\"),document.querySelector(`[data-id=\"hero-image-${d}\"]`)?.classList.remove(\"hidden\"),document.querySelector(`[data-id=\"hero-name-${d}\"]`)?.classList.remove(\"hidden\"),e=d)})});"],["E:/nochedorada/noche-dorada/src/components/Countdown.astro?astro&type=script&index=0&lang.ts","function g(t){if(t instanceof Date||typeof t==\"number\")return!0;throw new Error(`The value ${JSON.stringify(t)} is not a valid time or date`)}function h(t,e){g(t),e?.endTime&&g(e.endTime);let a=null;function n(){const c=e?.endTime?new Date(t).getTime()-new Date(e.endTime).getTime():0,f=new Date(t).getTime()-c;r(f),a=setInterval(()=>r(f),1e3)}function r(c){const{diff:f,...d}=l(c);if(f>0){typeof e?.onTick==\"function\"&&e.onTick(d);return}m()}function l(c){const f=Date.now(),d=c-f,D=o(d/864e5),p=o(d%864e5/36e5),T=o(d%36e5/6e4),w=o(d%6e4/1e3);return{days:D,hours:p,minutes:T,seconds:w,diff:d}}function m(){typeof e?.onComplete==\"function\"&&e.onComplete(),a&&clearInterval(a)}function o(c){return Math.floor(c).toString().padStart(2,\"0\")}return{start:n,stop:m}}const i=(t,e=document)=>e.querySelector(t);function u(){const t=i(\"[data-date]\");if(!t)return;const e={firstDigit:i(\"[data-days] [data-first-group]\",t),secondDigit:i(\"[data-days] [data-second-group]\",t),thirdDigit:i(\"[data-days] [data-third-group]\",t)},a={firstDigit:i(\"[data-hours] [data-first-group]\",t),secondDigit:i(\"[data-hours] [data-second-group]\",t)},n={firstDigit:i(\"[data-minutes] [data-first-group]\",t),secondDigit:i(\"[data-minutes] [data-second-group]\",t)},r={firstDigit:i(\"[data-seconds] [data-first-group]\",t),secondDigit:i(\"[data-seconds] [data-second-group]\",t)},l=Number(t?.getAttribute(\"data-date\")??0);return h(l,{onTick({days:o,hours:c,minutes:f,seconds:d}){if(e.firstDigit instanceof HTMLElement&&e.secondDigit instanceof HTMLElement&&e.thirdDigit instanceof HTMLElement)switch(o.length){case 3:s(e.firstDigit,o[0]),s(e.secondDigit,o[1]),s(e.thirdDigit,o[2]);break;case 2:e.firstDigit.parentNode?.removeChild(e.firstDigit),s(e.secondDigit,o[0]),s(e.thirdDigit,o[1]);break;default:e.secondDigit.parentNode?.removeChild(e.secondDigit),s(e.thirdDigit,o[0])}a.firstDigit instanceof HTMLElement&&a.secondDigit instanceof HTMLElement&&(s(a.firstDigit,c[0]),s(a.secondDigit,c[1])),n.firstDigit instanceof HTMLElement&&n.secondDigit instanceof HTMLElement&&(s(n.firstDigit,f[0]),s(n.secondDigit,f[1])),r.firstDigit instanceof HTMLElement&&r.secondDigit instanceof HTMLElement&&(s(r.firstDigit,d[0]),s(r.secondDigit,d[1]))},onComplete(){i(\".countdown-text\")?.remove(),t&&(t.innerHTML=`¡El evento de presentación ha empezado! <span class='[text-shadow:none]'>🎉</span>\n\t\t\t\t\t\t<div class=\"flex w-full items-center justify-center w-full\">\n\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\thref=\"https://www.twitch.tv/ibai\"\n\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t\tclass=\"text-white text-stroke-dark mt-4 hover:scale-105 transition inline-flex cursor-pointer text-center text-base leading-tight font-normal md:text-xl\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=\"text-center text-base leading-tight font-normal md:text-xl\">\n\t\t\t\t\t\t\t\t\t\tTWITCH.TV/<span class=\"font-bold\">IBAI</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t`,t.className=\"text-[var(--color-white)] uppercase font-semibold animate-fade-in text-lg sm:text-xl md:text-2xl text-center p-4 text-stroke-dark\")}})}function s(t,e,a){const n=i(\"[data-wrapper]\",t),r=i(`[data-num=\"${e}\"]`,t),l=i(\"[data-num-x0]\",t);n instanceof HTMLElement&&r instanceof HTMLElement&&l instanceof HTMLElement&&(n.style.transform=`translateY(-${r.offsetTop}px)`,e===\"0\"?setTimeout(()=>{n.classList.toggle(\"duration-[800ms]\",!1),n.classList.toggle(\"transition-transform\",!1),n.style.transform=`translateY(-${l.offsetTop}px)`},800):(n.classList.toggle(\"duration-[800ms]\",!0),n.classList.toggle(\"transition-transform\",!0)))}document.addEventListener(\"DOMContentLoaded\",()=>{const t=u();t&&t.start()});document.addEventListener(\"astro:page-load\",()=>{const t=u();t&&t.start()});"],["E:/nochedorada/noche-dorada/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const d=document.querySelectorAll(\".boxer-card\");let o=null;d.forEach(c=>{const l=document.querySelectorAll(\".fighter-img\"),t=c.getAttribute(\"data-id\");c.addEventListener(\"mouseenter\",()=>{if(l.forEach(e=>{e.classList.add(\"filter\",\"grayscale\")}),document.querySelectorAll(`[data-image=\"${t}\"]`).forEach((e,a)=>{e.classList.remove(\"filter\",\"grayscale\")}),document.querySelectorAll(`[data-id=\"${t}\"]`).forEach((e,a)=>{e.classList.add(\"bg-gradient-to-b\",\"from-yellow-300\",\"to-black-300\",\"-translate-y-3\",\"holographic-card-active\")}),document.querySelectorAll(`[data-image=\"${t}\"]`).forEach((e,a)=>{e.classList.add(\"bg-black\")}),document.querySelectorAll(`[data-name=\"${t}\"]`).forEach((e,a)=>{e.classList.remove(\"opacity-0\")}),o&&clearTimeout(o),t){const e=new CustomEvent(\"boxer-card-hovered\",{detail:{id:t}});document.dispatchEvent(e)}}),c.addEventListener(\"mouseleave\",()=>{l.forEach(e=>{e.classList.remove(\"filter\",\"grayscale\")}),document.querySelectorAll(`[data-id=\"${t}\"]`).forEach((e,a)=>{e.classList.remove(\"bg-gradient-to-b\",\"from-yellow-300\",\"to-black-300\",\"-translate-y-3\",\"holographic-card-active\"),document.querySelectorAll(`[data-image=\"${t}\"]`).forEach((r,i)=>{r.classList.remove(\"bg-black\")}),document.querySelectorAll(`[data-name=\"${t}\"]`).forEach((r,i)=>{r.classList.add(\"opacity-0\")})}),o=setTimeout(()=>{const e=new CustomEvent(\"boxer-card-exit\");document.dispatchEvent(e)},500)})})});"]],"assets":["/_astro/x.CCEkkghI.svg","/_astro/kick.2VbbIQ4x.svg","/_astro/instagram.CWmmxtT8.svg","/_astro/github.Dg1vThuW.svg","/_astro/kick.2wUYfDTF.svg","/_astro/index.sLc9duiL.css","/favicon.svg","/og.jpg","/fonts/EvanstonTavern-Medium.woff","/fonts/HeyNovember.woff","/fonts/Karantina-Bold.woff","/fonts/Karantina-Regular.woff","/images/501832184_17909067378139372_4004051009511641884_n.jpg","/images/agencia-de-viajes-y-turismo.webp","/images/bg.jpg","/images/bg.png","/images/fondo-fixed.jpg","/images/GUANTE_BOX_PROSTYLE_ELITE_V2_TRN_DORADO_01.webp","/images/hero.png","/images/logo-header.png","/images/logo.png","/videos/video.mp4","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/images/fighters/big/cristorata-vs-cañita.png","/images/fighters/big/fanodric-vs-dafonseka.png","/images/fighters/big/glogloking-vs-shadoune.png","/images/fighters/big/kingteka-vs-smash.png","/images/fighters/big/zullyy-vs-lapinky.png","/images/fighters/name/cañita.png","/images/fighters/name/cristorata-vs-cañita.png","/images/fighters/name/cristorata.png","/images/fighters/name/dafonseka.png","/images/fighters/name/fanodric-vs-dafonseka.png","/images/fighters/name/fanodric.png","/images/fighters/name/glogloking-vs-shadoune.png","/images/fighters/name/glogloking.png","/images/fighters/name/kingteka-vs-smash.png","/images/fighters/name/lapinky.png","/images/fighters/name/shadoune.png","/images/fighters/name/zullyy-vs-lapinky.png","/images/fighters/name/zullyy.png","/images/fighters/card/cañita.png","/images/fighters/card/cristorata7.png","/images/fighters/card/dafonseka.png","/images/fighters/card/fanodric.png","/images/fighters/card/glogloking.png","/images/fighters/card/kingteka.png","/images/fighters/card/lapinky.png","/images/fighters/card/shadoune.png","/images/fighters/card/smash.png","/images/fighters/card/zullyy.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8Zi0M0i0tZHlc4gaP+zlG/AcfnXPlEmrMz38Ta/FPq4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
