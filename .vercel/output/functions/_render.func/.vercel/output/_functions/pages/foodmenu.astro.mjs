/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as renderComponent } from '../chunks/astro/server_BarIvGue.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DR4VAQu3.mjs';
import 'clsx';
import { g as getCollection, $ as $$Navigation } from '../chunks/_astro_content_DL2GJtFN.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardMeal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardMeal;
  const { title, tapaPrice, dishPrice, allergens, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-800 rounded-xl p-3 my-3 hover:p-3 hover:bg-gray-700 transition-all"> <div class="sm:flex sm:justify-between sm:gap-4"> <div> <h3 class="text-lg font-bold text-white sm:text-xl"> ${title} </h3> </div> </div> <!-- {allergens.map((allergens: string) => {
    let classStyle = "bg-red-500 center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-2 mr-2 mt-2 align-baseline text-xs font-bold uppercase leading-none text-white";

    return( <div class={classStyle}>
            <div class="mt-px">{allergens}</div></div>);
    })} --> <div class="mt-4"> <p class="text-pretty text-sm text-white"> ${description} </p> </div> <dl class="mt-6 flex gap-4 sm:gap-6"> ${tapaPrice && renderTemplate`<div class=""> <p class="text-sm font-medium text-white">Tapa</p> <p class="text-xs text-white">${tapaPrice}</p> </div>`} <div class=""> <p class="text-sm font-medium text-white">Ración</p> <p class="text-xs text-white">${dishPrice}</p> </div> </dl> </div> `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/components/CardMeal.astro", void 0);

const $$Astro = createAstro();
const $$CardCheese = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardCheese;
  const { title, tapaPrice, dishPrice, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-tr from-gray-700 to-gray-800 rounded-xl p-3 my-3"> <div class="sm:flex sm:justify-between sm:gap-4"> <div> <h3 class="text-lg font-bold text-white sm:text-xl"> ${title} </h3> </div> </div> <div class="mt-4"> <p class="text-pretty text-sm text-white"> ${description} </p> </div> <dl class="mt-6 flex gap-4 sm:gap-6"> ${tapaPrice && renderTemplate`<div class=""> <p class="text-sm font-medium text-white">Tapa</p> <p class="text-xs text-white">${tapaPrice}</p> </div>`} <div class=""> <p class="text-sm font-medium text-white">Ración</p> <p class="text-xs text-white">${dishPrice}</p> </div> </dl> </div> `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/components/CardCheese.astro", void 0);

const $$Foodmenu = createComponent(async ($$result, $$props, $$slots) => {
  const meal = await getCollection("meal");
  const papelon = await getCollection("papelon");
  const cheese = await getCollection("cheese");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallo Negro", "data-astro-cid-rgn4bnyo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-gray-900 shadow-xl" data-astro-cid-rgn4bnyo> <section class="grid justify-items-center p-4" data-astro-cid-rgn4bnyo> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-rgn4bnyo": true })} </section> </nav> <section class="bg-gray-900 pb-10" data-astro-cid-rgn4bnyo> <div class="px-4" data-astro-cid-rgn4bnyo> <span class="flex items-center p-6" data-astro-cid-rgn4bnyo> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-rgn4bnyo>Tapas</h2> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-rgn4bnyo> ${meal.map((work) => {
    const { slug, data } = work;
    const { title, tapaPrice, dishPrice, description, allergens } = data;
    const card = renderTemplate`${renderComponent($$result2, "CardMeal", $$CardMeal, { "title": title, "tapaPrice": tapaPrice, "dishPrice": dishPrice, "description": description, "allergens": allergens, "data-astro-cid-rgn4bnyo": true })}`;
    return card;
  })} </div> <span class="flex items-center p-6" data-astro-cid-rgn4bnyo> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-rgn4bnyo>Papelones</h2> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-rgn4bnyo> ${papelon.map((work) => {
    const { slug, data } = work;
    const { title, tapaPrice, dishPrice, description, allergens } = data;
    const card = renderTemplate`${renderComponent($$result2, "CardMeal", $$CardMeal, { "title": title, "tapaPrice": tapaPrice, "dishPrice": dishPrice, "description": description, "allergens": allergens, "data-astro-cid-rgn4bnyo": true })}`;
    return card;
  })} </div> <span class="flex items-center p-6" data-astro-cid-rgn4bnyo> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> <h2 class="text-2xl uppercase mx-2 text-white" data-astro-cid-rgn4bnyo>Quesos</h2> <span class="h-px flex-1 bg-white" data-astro-cid-rgn4bnyo></span> </span> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2" data-astro-cid-rgn4bnyo> ${cheese.map((work) => {
    const { slug, data } = work;
    const { title, tapaPrice, dishPrice, description } = data;
    const card = renderTemplate`${renderComponent($$result2, "CardCheese", $$CardCheese, { "title": title, "tapaPrice": tapaPrice, "dishPrice": dishPrice, "description": description, "data-astro-cid-rgn4bnyo": true })}`;
    return card;
  })} </div> </div> </section> <section data-astro-cid-rgn4bnyo> <div class="grid content-center justify-center bg-gray-900 pb-10" data-astro-cid-rgn4bnyo> <img src="/redbullbanner.jpg" alt="" data-astro-cid-rgn4bnyo> </div> </section> ` })} `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/pages/foodmenu.astro", void 0);

const $$file = "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/pages/foodmenu.astro";
const $$url = "/foodmenu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Foodmenu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
