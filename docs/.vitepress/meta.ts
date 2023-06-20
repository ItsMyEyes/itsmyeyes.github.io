import { version } from '../../package.json'

// base info
export const name = 'Kiyora'
export const site = 'https://kiyora.is-a.dev/'
export const logo = 'https://kiyora.is-a.dev/chodocs-logo.svg'
export const keywords = 'vitepress、chodocs、React、Vue、Next.js、coding、github'
export const description = 'Semua pasti ada jalan'

// social link
export const github = 'https://github.com/ItsMyEyes/i-kiyora'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
