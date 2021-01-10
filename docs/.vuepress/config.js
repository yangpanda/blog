module.exports = {
  title: '疯狂蜗牛',
  description: 'Coding......',
  base: '/blog/',
  dest: 'dist',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: 'yangpanda',
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'Gitee',
            link: 'https://gitee.com/yangpanda',
            icon: 'reco-mayun'
          }
        ]
      }
    ],
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
  }
}