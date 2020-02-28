<template>
  <q-layout view="lHh LpR lff" v-bind:class="[quserState.authenticated ? 'q-layout--desktop' : '']">
    <!-- HEADER -->
    <header-component v-if="appState.loadPage" />

    <!-- ROUTER VIEW -->
    <q-page-container>
      <q-pull-to-refresh @refresh="refreshPage">
        <router-view v-if="appState.loadPage" class="layout-padding-custom"/>
      </q-pull-to-refresh>
    </q-page-container>

    <!-- FOOTER -->
    <footer-component v-if="appState.loadPage" />
  </q-layout>
</template>

<script>
  /*Components*/
  import headerComponent from 'src/components/header'
  import footerComponent from 'src/components/footer'

  export default {
    meta () {
      let routetitle = ((this.$route.meta && this.$route.meta.title) ? this.$route.meta.title : '')
      let siteName = this.$store.getters['qsiteSettings/getSettingValueByName']('core::site-name')
      let siteDescription = this.$store.getters['qsiteSettings/getSettingValueByName']('core::site-description')
      let iconHref = this.$store.getters['qsiteSettings/getSettingMediaByName']('isite::favicon').path

      return {
        title: `${this.$tr(routetitle)} | ${siteName}`,
        meta: {
          description: { name: 'description', content: siteDescription || siteName },
        },
        link: [{ rel: 'icon', href: iconHref, id: 'icon' }],
      }
    },
    components: {headerComponent, footerComponent},
    mounted () {
      this.$nextTick(async function () {
      })
    },
    data () {
      return {
      }
    },
    computed: {
      appState () {
        return this.$store.state.app
      },
      quserState () {
        return this.$store.state.quserAuth
      }
    },
    methods: {
      async refreshPage(done){
        await this.$store.dispatch('app/REFRESH_PAGE')
        done()
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  body
    --q-color-primary #263238 !important
    --q-color-secondary initial !important
    --q-color-tertiary initial !important

  .q-layout
    background-color #f5f5f5

  .layout-padding-custom
    padding 30px 25px 20px
    margin-bottom 60px

  #authLoginRegister
    --q-color-primary initial !important

    .q-card
      padding 40px 30px 25px

    .q-tab
      text-transform initial
      pointer-events none

      .q-focus-helper
        display none

      &__label
        color $text-brand-dark
        font-size 18px
        font-weight 500

      &__indicator
        display none

    .q-separator
      display none

    .q-icon
      font-size 16px

    button.q-btn
      display table
      margin 0 auto
      background $brand-blue !important

    a.q-btn
      .q-focus-helper
        display none

  #pageLogout
    .row.shadow-3
      background $white
      box-shadow 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)
      border-radius 4px

  /***** Media Queries *****/
  @media screen and (min-width: 1024px)
    .q-layout--desktop
      .q-page-container
        padding-left 240px !important
</style>
