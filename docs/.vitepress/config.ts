import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import { description, docsVersion, github, keywords, name, site } from './meta'
import { genFeed } from './plugins/genFeed'
import { pwa } from './plugins/pwa'
import sidebar from './sidebar'
import socialLinks from './link'
import algolia from './algolia'

export default withPwa(defineConfig({
  pwa,
  outDir: '../dist',
  title: name,
  description,
  lastUpdated: true,
  useWebFonts: false,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: 'IDN', lang: 'id-En' },
  },
  themeConfig: {
    logo: './chodocs-logo.svg',
    outline: 'deep',
    docFooter: {
      prev: 'Sebelum',
      next: 'Berikutnya',
    },
    returnToTopLabel: 'Back to top',
    outlineTitle: 'Navigation',
    darkModeSwitchLabel: 'Dark Mode',
    sidebarMenuLabel: 'Archive',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'last updated on',
    footer: {
      message: `Made with ❤️ by <a target="_blank" href="${github}">Kiyora contributors</a>`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License</a> | Copyright © 2023-${new Date().getFullYear()}`,
    },
    nav: [
      { text: '🔥 Getting Started', link: '/docs/started' },
      { text: '📋 Docs', link: '/docs/' },
      {
        text: `v${docsVersion}`,
        items: [
          { text: '🧱 Contributing', link: '/contributing' },
          { text: '🎉 Release', link: `${github}/releases` },
        ],
      },
    ],
    algolia,
    sidebar,
    socialLinks,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Kiyora' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/chodocs-logo.svg', color: '#06f' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    // og
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // analytics
    ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://chodocs.cn/' })
    await genFeed(siteConfig)
  },
}))
