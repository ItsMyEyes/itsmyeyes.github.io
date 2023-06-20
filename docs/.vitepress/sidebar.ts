import autoSidebar from './theme/plugins/autoSidebarBeta'

export default {
  '/': [
    {
      text: '🔥 Getting Started',
      collapsed: false,
      items: [
        { text: '🚴‍♂️ Started', link: '/docs/started' },
        { 
          text: '💻 How to running program', 
          items: [
            { text: 'Windows', link: '/docs/running-program' },
            { text: 'Linux', link: '/docs/running-program' },
            { text: 'Darwin / Mac', link: '/docs/running-program' },
          ],
        },
        {
          text: '🏨 Structure',
          items: [
            { text: 'Adapter', link: '/docs/artchitecture/folder/adapter' },
          ],
        },
      ],
    },
    {
      text: '📝 Memo',
      collapsed: false,
      items: [{ text: 'Git Command', link: '/memo/git-command/' }],
    },
  ],
}
