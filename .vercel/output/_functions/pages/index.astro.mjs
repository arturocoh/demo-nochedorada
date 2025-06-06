import { c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderComponent, r as renderTemplate, a as createAstro, g as renderScript, e as renderTransition, s as spreadAttributes } from '../chunks/astro/server_B8tRcDDq.mjs';
import { c as createSvgComponent, V as VERSUS, $ as $$Layout } from '../chunks/Layout_uyf5bkuz.mjs';
/* empty css                                 */
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const Kick = createSvgComponent({"meta":{"src":"/_astro/kick.2wUYfDTF.svg","width":18,"height":20,"format":"svg"},"attributes":{"width":"18","height":"20","viewBox":"0 0 18 20","fill":"none"},"children":"\r\n<path d=\"M0 0H8V2H10V0H18V8H16V12H18V20H10V18H8V20H0V0ZM10 16H12V18H16V14H14V12H12V8H14V6H16V2H12V4H10V6H6V2H2V18H6V14H10V16Z\" fill=\"currentColor\" />\r\n"});

const SPONSORS = [
  {
    id: "kick",
    name: "kick",
    url: "https://www.kick.com",
    image: {
      logo: Kick,
      width: 200,
      height: 200
    }
  }
];

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sponsors" class="mx-auto max-w-xl py-36"> <h2 class="katina-regular [text-shadow:1px_2px_0px_#ffdf20] mb-4 text-6xl text-center">Patrocinadores</h2> <div class="grid justify-around gap-4 flex-wrap w-full"> ${SPONSORS.map(({ url, image, name }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="size-10 hover:scale-125 transition text-[#008f39]"> ${renderComponent($$result, "image.logo", image.logo, { "class": "h-10 w-auto" })} </a>`)} </div> </section>`;
}, "E:/nochedorada/noche-dorada/src/components/sponsors.astro", void 0);

const FIGHTERS = [
  {
    id: "zullyy",
    name: "zullyy",
    versus: "zullyy-vs-lapinky"
  },
  {
    id: "fanodric",
    name: "fanodric",
    versus: "fanodric-vs-dafonseka"
  },
  {
    id: "smash",
    name: "smash",
    versus: "kingteka-vs-smash"
  },
  {
    id: "glogloking",
    name: "glogloking",
    versus: "glogloking-vs-shadoune"
  },
  {
    id: "cristorata7",
    name: "cristorata7",
    versus: "cristorata-vs-cañita"
  },
  {
    id: "cañita",
    name: "cañita",
    versus: "cristorata-vs-cañita"
  },
  {
    id: "shadoune",
    name: "shadoune",
    versus: "glogloking-vs-shadoune"
  },
  {
    id: "kingteka",
    name: "kingteka",
    versus: "kingteka-vs-smash"
  },
  {
    id: "dafonseka",
    name: "dafonseka",
    versus: "fanodric-vs-dafonseka"
  },
  {
    id: "lapinky",
    name: "lapinky",
    versus: "zullyy-vs-lapinky"
  }
];

const $$Astro$2 = createAstro();
const $$BoxerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BoxerCard;
  const { id, name, versus } = Astro2.props;
  const names = ["smash", "zullyy", "fanodric", "glogloking", "cristorata7"];
  const idSeguro = id ?? "";
  const claseExtra = names.includes(idSeguro) ? "skew-x-[2deg]" : "skew-x-[-2deg]";
  const clases = `boxer-card inline-block transition hover:-translate-y-3 flex-1 min-w-0 px-[2px] py-[2px] group relative w-full rounded-[calc(1.5rem-1px)] holographic-card ${claseExtra}`.trim();
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/luchador/${id}`, "href")}${addAttribute(clases, "class")}${addAttribute(versus, "data-id")} data-astro-cid-pofwlrbn> <img${addAttribute(`fighter-img w-full h-auto rounded-[calc(1.5rem-1px)]`, "class")}${addAttribute(`/images/fighters/card/${id}.png`, "src")}${addAttribute(name, "alt")} decoding="async"${addAttribute(versus, "data-image")} data-astro-cid-pofwlrbn${addAttribute(renderTransition($$result, "mqsztbj5", "", `image-${id}`), "data-astro-transition-scope")}> <div class="absolute flex items-center text-center justify-center opacity-0  bottom-5 w-full"${addAttribute(versus, "data-name")} data-astro-cid-pofwlrbn> <h3 class="text-2xl" data-astro-cid-pofwlrbn>${name}</h3> </div> </a>  ${renderScript($$result, "E:/nochedorada/noche-dorada/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/nochedorada/noche-dorada/src/components/BoxerCard.astro", "self");

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex min-h-screen"> <div class="bg-[url('/images/hero.png')] bg-contain bg-top w-full mask-fade-bottom absolute inset-0"></div> <div class="relative flex flex-col items-center p-8 w-full"> <div id="landing" class="absolute inset-0 flex flex-col items-center w-full"> <figure class="relative  animate-fade-in"> <img src="/images/logo.png" class="w-150 h-auto mt-24" decoding="async" alt=""> </figure> <div class="div"> <h3 class="katina-bold text-4xl uppercase text-center [text-shadow:1px_2px_0px_#ffdf20]">2 de agosto</h3> <h3 class="katina-regular text-5xl uppercase text-center [text-shadow:1px_2px_0px_#ffdf20]">Coliseo Eduardo Dibós</h3> <a class="katina-regular  text-4xl text-center block [text-shadow:1px_2px_0px_#ffdf20]" href="#">Kick.com/ElZeein</a> </div> </div> <div class="absolute bottom-[40px] flex flex-col items-center z-50 justify-end w-full max-w-8xl"> <div class="flex flex-wrap justify-center gap-2 max-w-7xl mx-auto w-full"> ${FIGHTERS.map(({ id, name, versus }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name, "versus": versus })}`)} </div> </div> <div id="fighter-container" class="pointer-events-none absolute inset-0 flex flex-col items-center"> <div class="mask-fade-bottom2 relative bottom-0 mx-auto h-[80vh] flex w-full items-center justify-center"> ${VERSUS.map(({ id, name }) => renderTemplate`<img${addAttribute(`/images/fighters/big/${id}.png`, "src")}${addAttribute(name, "alt")} decoding="async" class="w-auto h-full absolute z-0 hidden animate-slide-in-bottom" fetchpriority="low"${addAttribute(`hero-image-${id}`, "data-id")}>`)} ${VERSUS.map(({ id, name }) => renderTemplate`<img${addAttribute(`/images/fighters/name/${id}.png`, "src")}${addAttribute(name, "alt")} decoding="async" class=" h-auto absolute hidden z-0 w-[800px] bottom-[80px] animate-zoom-in" fetchpriority="low"${addAttribute(`hero-name-${id}`, "data-id")}>
            <h2 class="text-7xl hidden z-50"${addAttribute(`hero-text-${id}`, "data-id")}>${name}</h2>`)} </div> </div> </div> </section>  ${renderScript($$result, "E:/nochedorada/noche-dorada/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/nochedorada/noche-dorada/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Date;
  const { dateType, attribute, className, height, max, wrapperClassName, withBackground = false } = Astro2.props;
  const maximumSplit = Astro2.props.max.toString().split("");
  const maxFirst = Number.parseInt(maximumSplit[0]) + 1;
  const maxSecond = 9;
  const maxThird = 9;
  const firstDigitHeight = 1 / (maxFirst + 1) * 100;
  const secondDigitHeight = 1 / (maxSecond + 1) * 100;
  const thirdDigitHeight = 1 / (maxThird + 1) * 100;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative flex flex-col items-center justify-center text-center`, "class:list")}> <div${addAttribute([
    "relative flex gap-2 -skew-x-6 overflow-hidden font-sans rounded flex-col",
    withBackground ? "text-navy bg-green backdrop-grayscale shadow-md" : "",
    wrapperClassName
  ], "class:list")}${spreadAttributes(attribute)}> <div class="flex p-1 md:p-2 pb-0 md:pb-0"> <div${addAttribute(`float-left block ${height} overflow-hidden`, "class:list")} data-first-group> <div class="transform-gpu" data-wrapper> ${Array.from({ length: maxFirst + 1 }, () => 0).map((_, index) => renderTemplate`<div${addAttribute(index, "data-num")}${addAttribute(`height: ${firstDigitHeight}%`, "style")}> <span${addAttribute(`tabular-nums ${className} block h-fit select-none overflow-hidden`, "class:list")}> ${index} </span> </div>`)} <div${addAttribute({ height: `${firstDigitHeight}%` }, "style")} data-num-x0> <span${addAttribute(`tabular-nums ${className}`, "class:list")}>0</span> </div> </div> </div> <div${addAttribute(`float-left block ${height} w-auto overflow-hidden`, "class:list")} data-second-group> <div class="transform-gpu" data-wrapper> ${Array.from({ length: maxSecond + 1 }, () => 0).map((_, index) => renderTemplate`<div${addAttribute(index, "data-num")}${addAttribute(`height: ${secondDigitHeight}%`, "style")}> <span${addAttribute(`tabular-nums ${className} block h-fit select-none overflow-hidden`, "class:list")}> ${index} </span> </div>`)} <div${addAttribute({ height: `${secondDigitHeight}%` }, "style")} data-num-x0> <span${addAttribute(`tabular-nums ${className}`, "class:list")}>0</span> </div> </div> </div> ${max > 99 && renderTemplate`<div${addAttribute(`float-left block ${height} w-auto overflow-hidden`, "class:list")} data-third-group> <div class="transform-gpu" data-wrapper> ${Array.from({ length: maxThird + 1 }, () => 0).map((_, index) => renderTemplate`<div${addAttribute(index, "data-num")}${addAttribute(`height: ${thirdDigitHeight}%`, "style")}> <span${addAttribute(`tabular-nums ${className} block h-fit select-none overflow-hidden`, "class:list")}> ${index} </span> </div>`)} <div${addAttribute({ height: `${thirdDigitHeight}%` }, "style")} data-num-x0> <span${addAttribute(`tabular-nums ${className}`, "class:list")}>0</span> </div> </div> </div>`} </div> <span class="text-center text-[0.6rem] sm:text-xs md:text-sm font-medium text-navy tracking-wider px-1 pb-1 md:pb-2">${dateType}</span> </div> </div>`;
}, "E:/nochedorada/noche-dorada/src/components/Date.astro", void 0);

const $$Astro = createAstro();
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Countdown;
  const { timestamp } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full flex-col place-items-center px-2 py-2 md:p-4 " aria-label="cuenta atrás"> <video width="800" autoplay loop playsinline controls muted> <source src="/videos/video.mp4" type="video/mp4">
Tu navegador no soporta el video HTML5.
</video> <h2 class="mb-4 text-6xl text-center katina-regular [text-shadow:1px_2px_0px_#ffdf20]">Faltan...</h2> <div class="grid grid-cols-2 flex-col items-center justify-center gap-2 text-[var(--color-white)] uppercase select-none md:grid-cols-4 md:gap-3"${addAttribute(timestamp, "data-date")} role="timer"> ${renderComponent($$result, "Date", $$Date, { "dateType": "D\xCDAS", "attribute": { "data-days": "" }, "className": "text-6xl font-bold md:text-7xl lg:text-8xl", "wrapperClassName": "my-0", "height": "h-[3.5rem] sm:h-[3.8rem] md:h-[4.2rem] lg:h-[5.5rem]", "max": 129, "withBackground": true })} ${renderComponent($$result, "Date", $$Date, { "wrapperClassName": "my-0", "dateType": "HORAS", "attribute": { "data-hours": "" }, "className": "text-6xl font-bold md:text-7xl lg:text-8xl", "height": "h-[3.5rem] sm:h-[3.8rem] md:h-[4.2rem] lg:h-[5.5rem]", "max": 23, "withBackground": true })} ${renderComponent($$result, "Date", $$Date, { "wrapperClassName": "my-0", "dateType": "MINUTOS", "attribute": { "data-minutes": "" }, "className": "text-6xl font-bold md:text-7xl lg:text-8xl", "height": "h-[3.5rem] sm:h-[3.8rem] md:h-[4.2rem] lg:h-[5.5rem]", "max": 59, "withBackground": true })} ${renderComponent($$result, "Date", $$Date, { "wrapperClassName": "my-0", "dateType": "SEGUNDOS", "attribute": { "data-seconds": "" }, "className": "text-6xl font-bold md:text-7xl lg:text-8xl", "height": "h-[3.5rem] sm:h-[3.8rem] md:h-[4.2rem] lg:h-[5.5rem]", "max": 59, "withBackground": true })} </div> </section> ${renderScript($$result, "E:/nochedorada/noche-dorada/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/nochedorada/noche-dorada/src/components/Countdown.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Countdown", $$Countdown, { "timestamp": 17541108e5 })} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ` })}`;
}, "E:/nochedorada/noche-dorada/src/pages/index.astro", void 0);

const $$file = "E:/nochedorada/noche-dorada/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
