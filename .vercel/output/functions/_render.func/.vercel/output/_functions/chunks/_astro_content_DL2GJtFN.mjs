import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderTransition, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, a as renderComponent, u as unescapeHTML } from './astro/server_BarIvGue.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_pkTuGmSk.mjs';
import * as devalue from 'devalue';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class=""${addAttribute(renderTransition($$result, "jicqxufy"), "data-astro-transition-scope")}> <div class="grid content-center "> <nav class="flex gap-6" aria-label="Tabs"> <a href="/foodmenu" class="uppercase content-center shrink-0 rounded-lg p-2 font-bold text-white hover:text-red-600 hover:px-3 hover:font-extrabold transition-all">
Comida
</a> <a href="/" class="uppercase content-center shrink-0 rounded-lg p-2 font-bold text-white hover:text-red-600 hover:px-3 hover:font-extrabold transition-all"> <img src="/logo.png" class="w-16" alt=""> </a> <a href="/drinkmenu" class="uppercase content-center shrink-0 rounded-lg p-2 font-bold text-white hover:text-red-600 hover:px-3 hover:font-extrabold transition-all">
Bebida
</a> </nav> </div> </div> `;
}, "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/components/Navigation.astro", "self");

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/cheese/cheese-item-01.md": () => import('./cheese-item-01_CTvtkSiO.mjs'),"/src/content/cheese/cheese-item-02.md": () => import('./cheese-item-02_of86bVWw.mjs'),"/src/content/drink/drink-item-01.md": () => import('./drink-item-01_C8ARgaeT.mjs'),"/src/content/drink/drink-item-02.md": () => import('./drink-item-02_CrNfE4tf.mjs'),"/src/content/drink/drink-item-03.md": () => import('./drink-item-03_DgRnlS48.mjs'),"/src/content/drink/drink-item-04.md": () => import('./drink-item-04_CYNI-Gci.mjs'),"/src/content/drink/drink-item-05.md": () => import('./drink-item-05_BWb0PiYT.mjs'),"/src/content/drink/drink-item-06.md": () => import('./drink-item-06_DQSq11EU.mjs'),"/src/content/drink/drink-item-07.md": () => import('./drink-item-07_CEw2k8oq.mjs'),"/src/content/drink/drink-item-08.md": () => import('./drink-item-08_DfEYfBfJ.mjs'),"/src/content/drink/drink-item-09.md": () => import('./drink-item-09_DLcPLTTG.mjs'),"/src/content/drink/drink-item-10.md": () => import('./drink-item-10_BjtTLzb0.mjs'),"/src/content/drink/drink-item-11.md": () => import('./drink-item-11_CfLLAavq.mjs'),"/src/content/drink/drink-item-12.md": () => import('./drink-item-12_DBAdsbO5.mjs'),"/src/content/drink/drink-item-13.md": () => import('./drink-item-13_CGcgQNXz.mjs'),"/src/content/drink/drink-item-14.md": () => import('./drink-item-14_DyOE-6Ux.mjs'),"/src/content/drink/drink-item-15.md": () => import('./drink-item-15_C5B_-hzr.mjs'),"/src/content/drink/drink-item-16.md": () => import('./drink-item-16_1Zalg4DJ.mjs'),"/src/content/drink/drink-item-17.md": () => import('./drink-item-17_DuB-RAEL.mjs'),"/src/content/drink/drink-item-18.md": () => import('./drink-item-18_BOuYoc04.mjs'),"/src/content/drink/drink-item-19.md": () => import('./drink-item-19_CWD-FqDb.mjs'),"/src/content/drink/drink-item-20.md": () => import('./drink-item-20_Cs5TOCkY.mjs'),"/src/content/drink/drink-item-21.md": () => import('./drink-item-21_COuh8NRT.mjs'),"/src/content/drink/drink-item-22.md": () => import('./drink-item-22_0h-Sw1an.mjs'),"/src/content/drink/drink-item-23.md": () => import('./drink-item-23_CSFUtNd9.mjs'),"/src/content/drink/drink-item-24.md": () => import('./drink-item-24_CjP5h08w.mjs'),"/src/content/drink/drink-item-25.md": () => import('./drink-item-25_BkDsAzgV.mjs'),"/src/content/drink/drink-item-26.md": () => import('./drink-item-26_tCtMecDh.mjs'),"/src/content/drink/drink-item-27.md": () => import('./drink-item-27_C9Szh6Zl.mjs'),"/src/content/drink/drink-item-28.md": () => import('./drink-item-28_BsBg4McI.mjs'),"/src/content/drink/drink-item-29.md": () => import('./drink-item-29_BhFc4g7_.mjs'),"/src/content/drink/drink-item-30.md": () => import('./drink-item-30_BFKxLmkp.mjs'),"/src/content/meal/meal-item-01.md": () => import('./meal-item-01_DkJFX8oM.mjs'),"/src/content/meal/meal-item-02.md": () => import('./meal-item-02_CP6dQB0L.mjs'),"/src/content/meal/meal-item-03.md": () => import('./meal-item-03_KOPF-nON.mjs'),"/src/content/meal/meal-item-04.md": () => import('./meal-item-04_CRdgyTVL.mjs'),"/src/content/meal/meal-item-05.md": () => import('./meal-item-05_B_4iYJeF.mjs'),"/src/content/papelon/papelon-item-01.md": () => import('./papelon-item-01_DZryhEuh.mjs'),"/src/content/papelon/papelon-item-02.md": () => import('./papelon-item-02_mLS6zZwr.mjs'),"/src/content/papelon/papelon-item-03.md": () => import('./papelon-item-03_CY8FGKUK.mjs'),"/src/content/papelon/papelon-item-04.md": () => import('./papelon-item-04_D0ETY8YR.mjs'),"/src/content/papelon/papelon-item-05.md": () => import('./papelon-item-05_C5B266jY.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"cheese":{"type":"content","entries":{"cheese-item-01":"/src/content/cheese/cheese-item-01.md","cheese-item-02":"/src/content/cheese/cheese-item-02.md"}},"drink":{"type":"content","entries":{"drink-item-01":"/src/content/drink/drink-item-01.md","drink-item-02":"/src/content/drink/drink-item-02.md","drink-item-03":"/src/content/drink/drink-item-03.md","drink-item-04":"/src/content/drink/drink-item-04.md","drink-item-05":"/src/content/drink/drink-item-05.md","drink-item-06":"/src/content/drink/drink-item-06.md","drink-item-07":"/src/content/drink/drink-item-07.md","drink-item-08":"/src/content/drink/drink-item-08.md","drink-item-09":"/src/content/drink/drink-item-09.md","drink-item-10":"/src/content/drink/drink-item-10.md","drink-item-11":"/src/content/drink/drink-item-11.md","drink-item-13":"/src/content/drink/drink-item-13.md","drink-item-14":"/src/content/drink/drink-item-14.md","drink-item-12":"/src/content/drink/drink-item-12.md","drink-item-15":"/src/content/drink/drink-item-15.md","drink-item-16":"/src/content/drink/drink-item-16.md","drink-item-17":"/src/content/drink/drink-item-17.md","drink-item-18":"/src/content/drink/drink-item-18.md","drink-item-19":"/src/content/drink/drink-item-19.md","drink-item-20":"/src/content/drink/drink-item-20.md","drink-item-21":"/src/content/drink/drink-item-21.md","drink-item-22":"/src/content/drink/drink-item-22.md","drink-item-23":"/src/content/drink/drink-item-23.md","drink-item-24":"/src/content/drink/drink-item-24.md","drink-item-25":"/src/content/drink/drink-item-25.md","drink-item-26":"/src/content/drink/drink-item-26.md","drink-item-27":"/src/content/drink/drink-item-27.md","drink-item-28":"/src/content/drink/drink-item-28.md","drink-item-29":"/src/content/drink/drink-item-29.md","drink-item-30":"/src/content/drink/drink-item-30.md"}},"meal":{"type":"content","entries":{"meal-item-01":"/src/content/meal/meal-item-01.md","meal-item-02":"/src/content/meal/meal-item-02.md","meal-item-03":"/src/content/meal/meal-item-03.md","meal-item-04":"/src/content/meal/meal-item-04.md","meal-item-05":"/src/content/meal/meal-item-05.md"}},"papelon":{"type":"content","entries":{"papelon-item-01":"/src/content/papelon/papelon-item-01.md","papelon-item-02":"/src/content/papelon/papelon-item-02.md","papelon-item-03":"/src/content/papelon/papelon-item-03.md","papelon-item-05":"/src/content/papelon/papelon-item-05.md","papelon-item-04":"/src/content/papelon/papelon-item-04.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/cheese/cheese-item-01.md": () => import('./cheese-item-01_CdLyDSGt.mjs'),"/src/content/cheese/cheese-item-02.md": () => import('./cheese-item-02_DYW9rE7r.mjs'),"/src/content/drink/drink-item-01.md": () => import('./drink-item-01_C5OsMAoL.mjs'),"/src/content/drink/drink-item-02.md": () => import('./drink-item-02_P7WDnyTd.mjs'),"/src/content/drink/drink-item-03.md": () => import('./drink-item-03_DOaz-_0k.mjs'),"/src/content/drink/drink-item-04.md": () => import('./drink-item-04_1ceLrDaK.mjs'),"/src/content/drink/drink-item-05.md": () => import('./drink-item-05_DVC97iwr.mjs'),"/src/content/drink/drink-item-06.md": () => import('./drink-item-06_Bhae9Ji6.mjs'),"/src/content/drink/drink-item-07.md": () => import('./drink-item-07_DLVN9QPr.mjs'),"/src/content/drink/drink-item-08.md": () => import('./drink-item-08_DJyHC13m.mjs'),"/src/content/drink/drink-item-09.md": () => import('./drink-item-09_BuK7-PBl.mjs'),"/src/content/drink/drink-item-10.md": () => import('./drink-item-10_8Kp9BPLG.mjs'),"/src/content/drink/drink-item-11.md": () => import('./drink-item-11_B-3okUs_.mjs'),"/src/content/drink/drink-item-12.md": () => import('./drink-item-12_DdQtaI1g.mjs'),"/src/content/drink/drink-item-13.md": () => import('./drink-item-13_BCdfqJic.mjs'),"/src/content/drink/drink-item-14.md": () => import('./drink-item-14_wwNcXtz5.mjs'),"/src/content/drink/drink-item-15.md": () => import('./drink-item-15_C2j0BrRO.mjs'),"/src/content/drink/drink-item-16.md": () => import('./drink-item-16_BG7J_-lJ.mjs'),"/src/content/drink/drink-item-17.md": () => import('./drink-item-17_066t_ML1.mjs'),"/src/content/drink/drink-item-18.md": () => import('./drink-item-18_DjOlgDzu.mjs'),"/src/content/drink/drink-item-19.md": () => import('./drink-item-19_DiYmgBN9.mjs'),"/src/content/drink/drink-item-20.md": () => import('./drink-item-20_ksaqwyQg.mjs'),"/src/content/drink/drink-item-21.md": () => import('./drink-item-21_D4zkNAoj.mjs'),"/src/content/drink/drink-item-22.md": () => import('./drink-item-22_BwpylWBb.mjs'),"/src/content/drink/drink-item-23.md": () => import('./drink-item-23_Dp5EPTnQ.mjs'),"/src/content/drink/drink-item-24.md": () => import('./drink-item-24_DjCZ5G1O.mjs'),"/src/content/drink/drink-item-25.md": () => import('./drink-item-25_NuohJCq0.mjs'),"/src/content/drink/drink-item-26.md": () => import('./drink-item-26_Cu5_ov0S.mjs'),"/src/content/drink/drink-item-27.md": () => import('./drink-item-27_DbuKHitu.mjs'),"/src/content/drink/drink-item-28.md": () => import('./drink-item-28_edO2njbI.mjs'),"/src/content/drink/drink-item-29.md": () => import('./drink-item-29_CPFXsT2h.mjs'),"/src/content/drink/drink-item-30.md": () => import('./drink-item-30_CqOl7BBm.mjs'),"/src/content/meal/meal-item-01.md": () => import('./meal-item-01_IYHjSI8b.mjs'),"/src/content/meal/meal-item-02.md": () => import('./meal-item-02_CuUsqYHV.mjs'),"/src/content/meal/meal-item-03.md": () => import('./meal-item-03_jHyxGFTh.mjs'),"/src/content/meal/meal-item-04.md": () => import('./meal-item-04_Bc-glEDl.mjs'),"/src/content/meal/meal-item-05.md": () => import('./meal-item-05_BS72hEDf.mjs'),"/src/content/papelon/papelon-item-01.md": () => import('./papelon-item-01_CWpio9XB.mjs'),"/src/content/papelon/papelon-item-02.md": () => import('./papelon-item-02_DDIRJiGs.mjs'),"/src/content/papelon/papelon-item-03.md": () => import('./papelon-item-03_Bhl_wXFy.mjs'),"/src/content/papelon/papelon-item-04.md": () => import('./papelon-item-04__HqsXBl_.mjs'),"/src/content/papelon/papelon-item-05.md": () => import('./papelon-item-05_DoOXYGBS.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { $$Navigation as $, getCollection as g };
