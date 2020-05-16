module.exports = {
  // Title of your website
  title: 'Kojiros Blog',

  // Description of your website
  description: 'This is my blog',

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: {
      home: 'ホーム',
      posts: 'ポスト',
      category: 'カテゴリ',
      categories: 'Categories',
      allCategories: '全て',
      tag: 'タグ',
      tags: 'Tags',
      createdAt: '作成日',
      updatedAt: '更新日',
      prevPost: '次の投稿',
      nextPost: '前の投稿',
    },

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Shugo Shiraishi',

      // Introduction of yourself (HTML supported)
      description: 'I am IoT hacker',

      // Email
      email: 'shiraishiikemen@gmail.com',

      // Your location
      location: 'Okayama City, Japan',

      // Your organization
      organization: 'Okayama Univ.',

      // Your avatar image
      // Set to external link
      // avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'shugo103',
          link: 'https://github.com/kojiro103',
        },

        // Facebook account and link
        facebook: {
          account: 'shiraishiikemen',
          link: 'https://www.facebook.com/shiraishiikemen',
        },

        // Twitter account and link
        twitter: {
          account: 'shiraishiikemen',
          link: 'https://twitter.com/shiraishiikemen',
        },

        // Instagram account and link
        instagram: {
          account: 'shiraishiikemen',
          link: 'https://www.instagram.com/shiraishiikemen',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        //useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',


        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // The favicon (free image)
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: "About", link: "/about/" }
    ],

    sidebar: [
      '1',
      '2',
    ],

    // Enable smooth scrolling or not
    smoothScroll: true,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'Shugo103',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)

      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
