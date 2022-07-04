import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Utils Document",
  lastUpdated: true,
  description: "myself frontend utils",
  themeConfig: {
    siteTitle: "常用工具库文档",
    logo: "/assets/logo.png",
    nav: [
      { text: "Api", link: "/guide" },
      {
        text: "其他库",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Api",
        items: [
          { text: "列表", link: "/src/apilist" },
          { text: "应用场景", link: "/src/apidemo" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    lastUpdatedText: "Updated Date",
  },
});
