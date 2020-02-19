<template>
  <div id="masterHeader">
    <!-- HEADER -->
    <q-header>
      <q-toolbar color="primary">
        <!--= BUTTON MENU =-->
        <q-btn flat dense round
               @click="drawer.menu = !drawer.menu"
               aria-label="Menu"
               class="btn-menu">
          <q-icon name="menu"/>
        </q-btn>

        <!--= TITLE =-->
        <q-toolbar-title class="items-center">
          <!--Toogle Menu-->
          <q-btn :label="$tr($route.meta.title)" flat
                 @click="drawer.menu = !drawer.menu"
                 class="btn-page-title"/>
        </q-toolbar-title>

        <!--== Button User ==-->
        <q-no-ssr>
          <!-- <q-btn :to="{name: 'user.profile.me'}" flat no-caps v-if="quserState.authenticated"> -->
          <q-btn flat no-caps v-if="quserState.authenticated"
                 @click="drawer.config = !drawer.config"
                 class="btn-user">
            <q-avatar size="36px">
              <img :src="quserState.userData.mainImage">
            </q-avatar>
            <!-- <div class="q-ml-xs">{{quserState.userData.firstName}}</div> -->
          </q-btn>
        </q-no-ssr>

        <!--== Button Config ==-->
       <!--  <q-btn round dense flat icon="fas fa-cog"
               @click="drawer.config = !drawer.config">
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <!-- MENU -->
    <q-drawer bordered id="menu_master" class="main-menu no-shadow" v-model="drawer.menu">
      <!-- === LOGO === -->
      <div class="text-center q-py-lg full-width">
        <router-link :to="{ name: 'app.home'}" tag="a">
          <img class="sidebar-logo" src="statics/imagina-logo.png">
        </router-link>
      </div>

      <!--= MENU =-->
      <menu-list :menu="menu"/>
    </q-drawer>

    <!-- Config -->
    <q-drawer bordered id="menu_master" class="config-menu" :overlay="true" v-model="drawer.config" side="right">
      <config-list/>
    </q-drawer>
  </div>
</template>
<script>
  //import configList from 'src/components/master/configList'
  import configList from '@imagina/qsite/_components/master/configList'
  import menuList from '@imagina/qsite/_components/master/recursiveItem'

  export default {
    props: {},
    components: {
      configList,
      menuList
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        projectName: this.$store.getters['qsiteSettings/getSettingValueByName']('core::site-name'),
        drawer: {
          menu: true,
          config: false,
          notification: false
        },
        menu: config('sidebar'),
        logo: this.$store.getters['qsiteSettings/getSettingMediaByName']('isite::logo1').path
      }
    },
    computed: {
      quserState() {
        return this.$store.state.quserAuth
      }
    },
    methods: {
      //Show drawer specific
      toggleDrawer(name, show) {
        //Hidden all drawers
        for (var drawer in this.drawer) {
          this.drawer[drawer] = false
        }
        this.drawer[name] = show//Show only drawer specific
      },
    }
  }
</script>
<style lang="stylus">
  @import "~src/css/app.styl"

  #masterHeader
    .q-header
      background-color $white
      border none
      margin-bottom 20px
      box-shadow 0 2px 3px -2px rgba(0, 0, 0, 0.15)

    img
      max-width 100% !important

    .q-focus-helper
      display none

    .q-toolbar
      min-height 70px

      .q-toolbar__title
        padding 0 5px

        .btn-page-title
          font-size 20px
          text-transform capitalize
          padding 5px

          &.menu-openend
            .q-icon
              transform rotate(90deg)

    .q-layout__section--marginal
      color $text-dark

    .q-layout-drawer-delimiter
      box-shadow $shadow-1

    .main-menu
      .q-drawer
        width 240px !important
        background-color #263238 !important
        border-right 0

      #listMenu
        margin-top 8px

        hr
          display none

        .q-item
          font-family 'Source Sans Pro', sans-serif
          font-size 16px
          color rgba(255, 255, 255, 0.5)
          background-color transparent
          padding 11px 23px 11px 26px
          transition all 0.3s ease-out

          &:hover
            color rgba(255, 255, 255, 0.8)

            .q-icon
              color rgba(255, 255, 255, 0.8)

              &:before,
              &:after
                display none

          &.item-is-active
            background-color #222d32
            color rgba(255, 255, 255, 0.8)

            .q-item__section, .q-icon
              color white

          .q-icon
            color rgba(255, 255, 255, 0.5)

        .q-item__section--avatar
          margin-right 9px

        .q-expansion-item__content
          padding 0 0 0 7px

          #listMenu
            margin-top 0

          .q-item
            font-size 15px
            padding-top 6px
            padding-bottom 6px

          .q-icon
            font-size 15px

        .expansion-selected
          background-color $primary

      .sidebar-logo
        height 28px

    .config-menu
      .q-drawer
        width 295px !important
        right 5px
        bottom initial
        background-color $white !important
        border 1px solid rgba(0, 0, 0, 0.15)
        border-radius 4px
        box-shadow 0 3px 12px rgba(0, 0, 0, 0.05)
        padding 0px 8px

        .q-drawer__content
          padding-bottom 50px

        #configList
          font-family 'Source Sans Pro', sans-serif
          color $text-dark

          .text-primary, .text-negative
            color $text-dark !important

          .title-block
            background-color $bg-dark !important


  /***** Media Queries *****/
  @media screen and (min-width: 1024px)
    #masterHeader
      .q-header
        left 240px !important

      .btn-menu
        display none
</style>
