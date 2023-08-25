import { defineConfig } from 'vitepress'

import { nav, sidebarBlog, sidebarLearningNote } from './nav/index'

export default defineConfig({
  title: '夏2同学的个人小站',
  description: 'Vite & Vue powered static site generator.',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    logo: '/me.jpg',
    nav: nav(),
    sidebar: {
      '/博客/': sidebarBlog(),
      '/学习笔记/': sidebarLearningNote(),
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/xia-2/blog-vitepress',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xia-2/blog-vitepress' },
    ],
    footer: {
      message: `<a href="http://beian.miit.gov.cn/" style="color: var(--vp-c-green)">苏ICP备20024956号</a>`,

      copyright: 'Released under the MIT License. <br/>Copyright © 2022-present Edwin Jiang.',
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress',
    // },


    // carbonAds: {
    //     code: 'CEBDT27Y',
    //     placement: 'vuejsorg'
    // }
  },

})
