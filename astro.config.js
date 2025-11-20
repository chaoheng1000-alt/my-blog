import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 请修改为你自己的线上地址，谢谢茄子
  // 如果部署到 Vercel，请设置为你的 Vercel 域名，例如 'https://your-site.vercel.app'
  // 如果部署到 GitHub Pages 子路径，请设置为 'https://username.github.io/koi'
  site: process.env.PUBLIC_SITE_URL || 'https://tcdw.github.io/koi',

  // 如果你的网站在子路径下（例如 `https://example.com/koi/`），则填写 `/koi/`
  // 在根路径下（例如 `https://example.com/`）则填写 `/` 或 ""
  // 如果部署到 Vercel 根路径，请设置为 "/" 或 ""
  // 如果部署到 GitHub Pages 子路径，请设置为 "/koi/"
  base: process.env.PUBLIC_BASE_PATH || "/",

  integrations: [mdx(), sitemap(), svelte()],

  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteBackLabel: '文档内容的脚注',
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
