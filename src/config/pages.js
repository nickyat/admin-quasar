import corePages from '@imagina/qsite/_config/master/pages'//Core pages [Do not remove]

let responsePages = {
  ...corePages,
  page: {
    home: {
      permission: null,
      activated: true,
      path: '/',
      name: 'app.home',
      layout: () => import('src/layouts/master'),
      page: () => import('pages/index.vue'),
      title: 'sidebar.pageHome',
      icon: 'fas fa-home',
      authenticated: true
    },
  }
}

//======= Add or update pages
//#example: responsePages.<title-page> = <'title'>

export default responsePages

responsePages.qblog.posts.layout= () => import('src/layouts/master')
