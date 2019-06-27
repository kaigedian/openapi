module.exports = {
  base: '/openapi/',
  title: '开个店开放平台',
  description: '开个店，每个品牌都有自己的平台',
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/x-icon' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '接口文档',
        items: [
          {
            text: '接入必读',
            link: '/guide/general'
          },
          {
            text: '门店类接口',
            link: '/guide/store'
          },
          {
            text: '订单类API',
            link: '/guide/order'
          },
          {
            text: '券码类API',
            link: '/guide/coupon'
          },
          {
            text: '商品类API',
            link: '/guide/goods'
          }
        ]
      },
      {
        text: 'DEMO示例',
        link: '/guide/demo'
        // link: 'https://github.com/kaigedian/openapi-demo'
      },
      {
        text: '开个店商户后台',
        link: 'https://micro.sandload.cn'
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/kaigedian/openapi'
      }
    ],
    sidebar: [
      '/guide/general',
      '/guide/store',
      '/guide/order',
      '/guide/coupon',
      '/guide/goods',
      '/guide/demo'
    ],
    displayAllHeaders: true,
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ]
}
