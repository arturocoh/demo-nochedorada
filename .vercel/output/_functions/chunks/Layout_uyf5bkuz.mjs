import { c as createComponent, a as createAstro, d as addAttribute, g as renderScript, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, b as renderComponent, h as renderHead, i as renderSlot } from './astro/server_B8tRcDDq.mjs';
/* empty css                         */

const VERSUS = [
  {
    id: "kingteka-vs-smash",
    name: "kingteka-vs-smash"
  },
  {
    id: "cristorata-vs-cañita",
    name: "cristorata-vs-cañita"
  },
  {
    id: "glogloking-vs-shadoune",
    name: "glogloking-vs-shadoune"
  },
  {
    id: "fanodric-vs-dafonseka",
    name: "fanodric-vs-dafonseka"
  },
  {
    id: "zullyy-vs-lapinky",
    name: "zullyy-vs-lapinky"
  }
];

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "E:/nochedorada/noche-dorada/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/nochedorada/noche-dorada/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header class="fixed z-100 top-0 w-full mx-auto" data-astro-cid-3ef6ksr2> <nav class="flex justify-between max-w-6xl mx-auto items-center h-24" data-astro-cid-3ef6ksr2> <div class="flex gap-10" data-astro-cid-3ef6ksr2> <a class="text-2xl" href="/la-porra" data-astro-cid-3ef6ksr2>HAZ TU PORRA</a> <a class="text-2xl" href="/combates" data-astro-cid-3ef6ksr2>VER COMBATES</a> </div> ${pathname !== "/" && renderTemplate`<a class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transition duration-500 hover:scale-110 md:inline-block" href="/" data-astro-cid-3ef6ksr2> <img class="h-20" src="/images/logo-header.png" alt="Logo" data-astro-cid-3ef6ksr2> </a>`} <div data-astro-cid-3ef6ksr2> <a class="text-2xl" href="#" data-astro-cid-3ef6ksr2> COMPRA ENTRADAS </a> </div> </nav> </header> `;
}, "E:/nochedorada/noche-dorada/src/components/Header.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const X = createSvgComponent({"meta":{"src":"/_astro/x.CCEkkghI.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<path d=\"M9.4895 6.775L15.3177 0H13.9365L8.876 5.8825L4.834 0H0.171997L6.28425 8.8955L0.171997 16H1.55325L6.8975 9.78788L11.166 16H15.828L9.48912 6.775H9.4895ZM7.59775 8.97375L6.97837 8.088L2.05087 1.03975H4.17237L8.14875 6.728L8.768 7.61375L13.9371 15.0075H11.8159L7.59775 8.97412V8.97375Z\" fill=\"white\" />\n"});

const Instagram = createSvgComponent({"meta":{"src":"/_astro/instagram.CWmmxtT8.svg","width":20,"height":20,"format":"svg"},"attributes":{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none"},"children":"\n<path d=\"M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z\" fill=\"white\" />\n"});

const Kick = createSvgComponent({"meta":{"src":"/_astro/kick.2VbbIQ4x.svg","width":18,"height":20,"format":"svg"},"attributes":{"width":"18","height":"20","viewBox":"0 0 18 20","fill":"none"},"children":"\n<path d=\"M0 0H8V2H10V0H18V8H16V12H18V20H10V18H8V20H0V0ZM10 16H12V18H16V14H14V12H12V8H14V6H16V2H12V4H10V6H6V2H2V18H6V14H10V16Z\" fill=\"white\" />\n"});

const Github = createSvgComponent({"meta":{"src":"/_astro/github.Dg1vThuW.svg","width":20,"height":20,"format":"svg"},"attributes":{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none"},"children":"\n<path d=\"M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z\" fill=\"white\" />\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col justify-center items-center gap-8"> <div class="social-links flex gap-8"> <a href="#" target="_blank">${renderComponent($$result, "X", X, { "class": "w-10 h-10" })}</a> <a href="#" target="_blank">${renderComponent($$result, "Instagram", Instagram, { "class": "w-10 h-10" })}</a> <a href="#" target="_blank">${renderComponent($$result, "Kick", Kick, { "class": "w-10 h-10" })}</a> <a href="#" target="_blank">${renderComponent($$result, "Github", Github, { "class": "w-10 h-10" })}</a> </div> <div class=" flex flex-col justify-center items-center"> <p class="katina-regular text-2xl">© 2025 La Noche Dorada.</p> <p class="katina-regular text-2xl pb-20">Todos los derechos reservados.</p> </div> </footer>`;
}, "E:/nochedorada/noche-dorada/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>La Noche Dorada</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Evento de boxeo en Perú, organizado por El Zein"><meta property="og:url" content="https://www.nochedorada.com"><meta property="og:type" content="website"><meta property="og:title" content="La Noche Dorada"><meta property="og:description" content="Evento de boxeo en Perú"><meta property="og:image" content="https://www.nochedorada.com/og.jpg"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="La Noche Dorada"><meta name="twitter:card" content="sumary_large_image"><meta name="twitter:site" content="@text"><meta name="twitter:creator" content="@text"><meta name="twitter:title" content="La Noche Doradat"><meta name="twitter:description" content="Evento de boxeo en Perú">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-black bg-[url('/images/bg.png')] bg-cover bg-center  min-h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/bg.jpg')] before:opacity-20 before:bg-cover before:bg-center before:z-0" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "E:/nochedorada/noche-dorada/src/layouts/Layout.astro", void 0);

export { $$Layout as $, VERSUS as V, createSvgComponent as c };
