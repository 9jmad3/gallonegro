import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BarIvGue.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"THE ORGANICS Easy Lemon","price":"2,00","type":"refresco"};
				const file = "C:/Users/jose_/Documents/astroProjects/template/portFolio/src/content/drink/drink-item-03.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
