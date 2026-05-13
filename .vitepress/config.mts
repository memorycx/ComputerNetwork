import { defineConfig } from 'vitepress'


export default defineConfig({
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
          // 路径要写完整：/第一章/文件名
          { text: '1.1 什么是Internet', link: '/第一章/1.1 什么是Internet' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})