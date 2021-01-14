module.exports = {
  title: '疯狂蜗牛',
  description: 'Coding......',
  dest: 'dist',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: 'yangpanda',
    smoothScroll: true,
    lastUpdated: "Last Updated",
    sidebar: {
      '/css/': [
        {
          title: 'CSS',
          children: [
            ['layout', '网页布局'],
            ['mobile', '移动端适配']
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'JavsScript',
          children: [
            ['data-types', '数据类型'],
            ['operators', '运算符']
          ]
        }
      ]
    },
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
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
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
  }
}