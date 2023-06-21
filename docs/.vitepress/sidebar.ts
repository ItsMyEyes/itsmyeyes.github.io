export default {
  '/': [
    {
      text: '🔥 Getting Started',
      collapsed: false,
      items: [
        { text: '🚴‍♂️ Installation', link: '/docs/started' },
        { text: '⚒️ Setup GOPATH', link: '/docs/setup-gopath' },
        {
          text: '💻 How to running program',
          items: [
            {
              text: 'Windows',
              items: [
                { text: '📦 Running Program', link: '/docs/windows/run' },
                { text: '📦 Create Project', link: '/docs/windows/create' },
                { text: '📦 Adapter (Soon)', link: '/docs/comming-soon/' },
              ],
            },
            {
              text: 'Linux',
              items: [
                { text: '📦 Running Program', link: '/docs/linux/run' },
                { text: '📦 Create Project', link: '/docs/linux/create' },
                { text: '📦 Adapter (Soon)', link: '/docs/comming-soon/' },
              ],
            },
            {
              text: 'Darwin / Mac',
              items: [
                { text: '📦 Running Program', link: '/docs/mac-darwin/run' },
                { text: '📦 Create Project', link: '/docs/mac-darwin/create' },
                { text: '📦 Adapter (Soon)', link: '/docs/comming-soon/' },
              ],
            },
          ],
        },
        { text: '🌍 How to migrate', link: '/docs/migrate' },
        { text: '📝 How to Custom Config', link: '/docs/config/custom' },
      ],
    },
    {
      text: '🏨 Component',
      collapsed: false,
      items: [
        { text: 'Adapter', link: '/comming-soon/' },
        { text: 'Cmd', link: '/comming-soon/' },
        { text: 'Config', link: '/comming-soon/' },
        { text: 'Docs', link: '/comming-soon/' },
        { text: 'Hack', link: '/comming-soon/' },
        { text: 'Internal', link: '/comming-soon/' },
        { text: 'Pkg', link: '/comming-soon/' },
        { text: 'Server', link: '/comming-soon/' },
        { text: 'Cofiguration Script', link: '/comming-soon/' },
      ],
    },
    {
      text: '📝 Memo',
      collapsed: false,
      items: [{ text: 'Git Command', link: '/comming-soon/' }],
    },
  ],
}
