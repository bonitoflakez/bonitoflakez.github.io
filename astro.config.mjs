import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: 'https://bonitoflakez.github.io',
	integrations: [mdx(), sitemap(), tailwind()],
	markdown: {
		shikiConfig: {
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'dark-plus',
			// word wrap to prevent horizontal scrolling
			wrap: false,
		},
	}
});