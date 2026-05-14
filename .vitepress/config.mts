import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ComputerNetwork/',

  title: "计算机网络笔记",
  description: "学习记录",

  
  // 告诉 VitePress 你的源文件都在 docs 目录下
  srcDir: './docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '第一章',
        items: [
          { text: '1.0 前言', link: '/第一章/1.0 前言' },
          { text: '1.1 什么是Internet', link: '/第一章/1.1 什么是Internet' },
          { text: '1.2 网络边缘', link: '/第一章/1.2 网络边缘' },
          { text: '1.3 网络核心', link: '/第一章/1.3 网络核心' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/memorycx' }
    ]
  }
})
