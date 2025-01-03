// 将任何全局数据放在此文件中
// 你可以通过使用 `import` 关键字从站点的任何位置导入这些数据

// 基础页面元数据，src/layouts/BaseLayout.astro
export const BRAND_NAME = "建筑指南";
export const SITE_TITLE = "建筑指南";
export const SITE_DESCRIPTION = "这是一份基于我个人喜好的建筑指南，记录我了解建筑过程的知识和经验。";

// 标签页面元数据，src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - 所有标签";
export const Tags_DESCRIPTION =
  "AstroVerse - 所有标签及与每个标签相关的文章数量";

// 标签页面元数据，src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `AstroVerse 中关于 '${tag}' 标签的所有文章`,
    description: `探索关于 ${tag} 的文章，获取不同的视角和深入的分析。`,
  };
}

// 分类页面元数据，src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `AstroVerse 中 '${category}' 分类下的所有文章`,
    description: `浏览 AstroVerse 中 ${category} 分类下的所有文章`,
  };
}

// 头部链接，src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "江浙沪" },
  { href: "/category/Two/1/", title: "大湾区" },
  { href: "/category/Three/1/", title: "海外" },
];

// 底部链接，src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "标签" },
  { href: "/posts/why-astro/", title: "关于" },
];

// 社交链接，src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/inotelab",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/inotelab",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// 搜索页面元数据，src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - 站点搜索`;
export const SEARCH_PAGE_DESCRIPTION = `搜索 ${SITE_TITLE} 上的所有内容`;