module.exports = {
  siteMetadata: {
    siteUrl: 'https://list.caixie.top/',
    title: 'CX LIST 创造者们的索引页',
    description: 'The all-in-one List website for designers, agencies, freelancers and creative workers.',
    author: '@baisheng',
    twitter: '@baisheng_',
    facebook: '@baisheng',
    image: '/images/share.png',
    organization: '@caixie',
    canonicalUrl: 'https://list.caixie.top/',
    navLinks: [{
        to: "/",
        name: "资源",
        count: "554",
        icon: '/images/menu-resources.png'
      },
      {
        to: "/studios",
        name: "工作室",
        count: "256",
        icon: '/images/menu-studios.png'
      },
      {
        to: "/designers",
        name: "设计师",
        count: "49",
        icon: '/images/menu-designers.png'
      },
      {
        to: "/tools",
        name: "工具",
        count: "81",
        icon: '/images/menu-tools.png'
      },
    ],
  },
  plugins: [
    {
      resolve: `@caixie/gatsby-theme-cxlist-agency`,
      options: {
        contentPath: 'data/agency',
      }
    },
    {
      resolve: `@caixie/gatsby-theme-cxlist-tools`,
      options: {
        contentPath: 'data/tools',
        basePath: '/tools'
      }
    },
    {
      resolve: `@caixie/gatsby-theme-cxlist-design`,
      options: {
        contentPath: 'data/design',
        basePath: '/'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://list.caixie.top/',
        sitemap: 'https://list.caixie.top/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DEX List - The index page for creative workers.',
        short_name: 'DEX List',
        description: 'The index page for creative workers.',
        start_url: '/',
        background_color: '#fdf3f6',
        theme_color: '#F7417A',
        display: 'standalone',
        icon: './src/images/favicon.png',
        crossOrigin: 'use-credentials'
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://list.caixie.top/`,
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-101495671-2',
    //     head: false
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-gauges`,
    //   options: {
    //     siteId: '5e70cf38afc1527d564d60d9',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-fathom',
    //   options: {
    //     siteId: ''
    //   }
    // },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-netlify-cache`,
    // `gatsby-plugin-netlify`,
  ]
}
