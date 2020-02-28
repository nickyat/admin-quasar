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
responsePages.qblog.categories.layout= () => import('src/layouts/master')
responsePages.quser.userIndex.layout = () => import('src/layouts/master')
responsePages.quser.userDepartments.layout = () => import('src/layouts/master')
responsePages.quser.userRoles.layout = () => import('src/layouts/master')
responsePages.quser.userProfile.layout = () => import('src/layouts/master')
responsePages.quser.changePassword.layout = () => import('src/layouts/master')
responsePages.qcommerce.products.layout= () => import('src/layouts/master')
responsePages.qcommerce.productCreate.layout= () => import('src/layouts/master')
responsePages.qcommerce.productEdit.layout= () => import('src/layouts/master')
responsePages.qcommerce.categories.layout= () => import('src/layouts/master')
responsePages.qcommerce.options.layout= () => import('src/layouts/master')
responsePages.qcommerce.optionValues.layout= () => import('src/layouts/master')
responsePages.qcommerce.paymentMethods.layout= () => import('src/layouts/master')
responsePages.qcommerce.shippingMethods.layout= () => import('src/layouts/master')
responsePages.qcommerce.order.layout= () => import('src/layouts/master')
responsePages.qcommerce.orders.layout= () => import('src/layouts/master')
responsePages.qcommerce.coupons.layout= () => import('src/layouts/master')
responsePages.qcommerce.couponsCreate.layout= () => import('src/layouts/master')
responsePages.qcommerce.couponsEdit.layout= () => import('src/layouts/master')
responsePages.qform.forms.layout= () => import('src/layouts/master')
responsePages.qform.formsDesign.layout= () => import('src/layouts/master')
responsePages.qform.formsUpdate.layout= () => import('src/layouts/master')
responsePages.qform.leads.layout= () => import('src/layouts/master')
responsePages.qform.leadsShow.layout= () => import('src/layouts/master')
responsePages.qform.fields.layout= () => import('src/layouts/master')
responsePages.qform.fieldsCreate.layout= () => import('src/layouts/master')
responsePages.qform.fieldsUpdate.layout= () => import('src/layouts/master')
responsePages.qmenu.menus.layout= () => import('src/layouts/master')
responsePages.qmenu.menusShow.layout= () => import('src/layouts/master')
responsePages.qmenu.menuItemsCreate.layout= () => import('src/layouts/master')
responsePages.qmenu.menuItemsUpdate.layout= () => import('src/layouts/master')
responsePages.qmedia.index.layout= () => import('src/layouts/master')
responsePages.qslider.index.layout= () => import('src/layouts/master')
responsePages.qslider.createSlide.layout= () => import('src/layouts/master')
responsePages.qslider.updateSlide.layout= () => import('src/layouts/master')
responsePages.qslider.showSlider.layout= () => import('src/layouts/master')
responsePages.qbanner.index.layout= () => import('src/layouts/master')
responsePages.qbanner.createBanner.layout= () => import('src/layouts/master')
responsePages.qbanner.showPosition.layout= () => import('src/layouts/master')
responsePages.qbanner.updateBanner.layout= () => import('src/layouts/master')
responsePages.qsite.index.layout= () => import('src/layouts/master')
