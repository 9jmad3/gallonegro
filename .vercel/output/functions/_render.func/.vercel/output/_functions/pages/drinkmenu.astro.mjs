/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as renderComponent } from '../chunks/astro/server_BarIvGue.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DR4VAQu3.mjs';
import 'clsx';
import { g as getCollection, $ as $$Navigation } from '../chunks/_astro_content_DL2GJtFN.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardDrink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardDrink;
  const { title, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-800 rounded-xl p-3 my-3 hover:p-3 hover:bg-gray-700 transition-all"> <div class="sm:flex sm:justify-between sm:gap-4"> <div> <h3 class="text-lg font-bold text-white sm:text-xl"> ${title} </h3> </div> </div> <dl class="mt-6 flex gap-4 sm:gap-6"> <div class=""> <p class="text-sm font-medium text-white">Precio</p> <p class="text-xs text-white">${price}</p> </div> </dl> </div> `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/components/CardDrink.astro", void 0);

const $$Drinkmenu = createComponent(async ($$result, $$props, $$slots) => {
  const drink = await getCollection("drink");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallo Negro", "data-astro-cid-wk5sdudi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-gray-900 shadow-xl " data-astro-cid-wk5sdudi> <section class="grid justify-items-center p-4" data-astro-cid-wk5sdudi> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-wk5sdudi": true })} </section> </nav> <section class="bg-gray-900 pb-10" data-astro-cid-wk5sdudi> <div class="px-4" data-astro-cid-wk5sdudi> <span class="flex items-center p-6" data-astro-cid-wk5sdudi> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-wk5sdudi>Cervezas</h2> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-wk5sdudi> ${drink.map((work) => {
    const { slug, data } = work;
    const { title, price, type } = data;
    if (type == "cerveza") {
      const card = renderTemplate`${renderComponent($$result2, "CardDrink", $$CardDrink, { "title": title, "price": price, "data-astro-cid-wk5sdudi": true })}`;
      return card;
    }
  })} </div> <span class="flex items-center p-6" data-astro-cid-wk5sdudi> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-wk5sdudi>Refrescos</h2> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-wk5sdudi> ${drink.map((work) => {
    const { slug, data } = work;
    const { title, price, type } = data;
    if (type == "refresco") {
      const card = renderTemplate`${renderComponent($$result2, "CardDrink", $$CardDrink, { "title": title, "price": price, "data-astro-cid-wk5sdudi": true })}`;
      return card;
    }
  })} </div> <span class="flex items-center p-6" data-astro-cid-wk5sdudi> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-wk5sdudi>Vinos y Vermut</h2> <span class="h-px flex-1 bg-white" data-astro-cid-wk5sdudi></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-wk5sdudi> ${drink.map((work) => {
    const { slug, data } = work;
    const { title, price, type } = data;
    if (type == "vinos") {
      const card = renderTemplate`${renderComponent($$result2, "CardDrink", $$CardDrink, { "title": title, "price": price, "data-astro-cid-wk5sdudi": true })}`;
      return card;
    }
  })} </div> </div> </section> <section data-astro-cid-wk5sdudi> <div class="grid content-center justify-center bg-gray-900 pb-10" data-astro-cid-wk5sdudi> <img src="/redbullbanner.jpg" alt="" data-astro-cid-wk5sdudi> </div> </section> ` })} `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/pages/drinkmenu.astro", void 0);

const $$file = "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/pages/drinkmenu.astro";
const $$url = "/drinkmenu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Drinkmenu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
