import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_B8tRcDDq.mjs';
import { V as VERSUS, $ as $$Layout } from '../../chunks/Layout_uyf5bkuz.mjs';
/* empty css                                    */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const versus = VERSUS.find((versus2) => versus2.id === id);
  const names = ["smash", "zullyy", "fanodric", "glogloking", "cristorata7"];
  const idSeguro = id ?? "";
  const claseExtra = names.includes(idSeguro) ? "flex-row-reverse" : "";
  const clases = `max-w-6xl mx-auto flex absolute inset-0 justify-between items-center ${claseExtra}`.trim();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-full"> <div class="bg-[url('/images/hero.png')] bg-cover bg-top w-full mask-fade-bottom absolute inset-0"></div> <div${addAttribute(clases, "class")}> <div class="fighter-info"> <h3 class="text-8xl">${id}</h3> </div> <img${addAttribute(`/images/fighters/card/${id}.png`, "src")}${addAttribute(versus?.name, "alt")} decoding="async" class="w-[300px]" fetchpriority="low" decoding="async"${addAttribute(`hero-image-${id}`, "data-id")}${addAttribute(renderTransition($$result2, "lrhkevxl", "", `image-${id}`), "data-astro-transition-scope")}> </div> </section> ` })}`;
}, "E:/nochedorada/noche-dorada/src/pages/luchador/[id].astro", "self");

const $$file = "E:/nochedorada/noche-dorada/src/pages/luchador/[id].astro";
const $$url = "/luchador/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
