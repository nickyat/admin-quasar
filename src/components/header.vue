<template>
  <div id="masterHeader">
    <!-- HEADER -->
    <q-header class="no-shadow">
      <q-toolbar color="primary">
        <!--= BUTTON MENU =-->
        <q-btn flat dense round
               @click="drawer.menu = !drawer.menu"
               aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <!--= TITLE =-->
        <q-toolbar-title class="items-center">
          <!--Toogle Menu-->
          <q-btn :label="$tr($route.meta.title)" flat
                 @click="drawer.menu = !drawer.menu"
                 class="btn-page-title"
                 :icon="$route.meta.icon"/>
        </q-toolbar-title>

        <!--== Button User ==-->
        <q-no-ssr>
          <q-btn :to="{name: 'user.profile.me'}" flat no-caps v-if="quserState.authenticated">
            <q-avatar size="25px">
              <img :src="quserState.userData.mainImage">
            </q-avatar>
            <div class="q-ml-xs">{{quserState.userData.firstName}}</div>
          </q-btn>
        </q-no-ssr>

        <!--== Button Config ==-->
        <q-btn round dense flat icon="fas fa-cog"
               @click="drawer.config = !drawer.config">
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- MENU -->
    <q-drawer bordered id="menu_master" class="no-shadow" v-model="drawer.menu">
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
    <q-drawer bordered id="menu_master" :overlay="true" v-model="drawer.config" side="right">
      <config-list/>
    </q-drawer>
  </div>
</template>
<script>
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
          menu: false,
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
  #masterHeader
    img
      max-width 100% !important

    .q-toolbar-title
      padding 0 5px

      .btn-page-title
        padding 5px

        .q-icon
          background-color white
          border-radius 50%
          height 25px
          width 25px
          color $primary
          font-size 15px
          padding 5px
          margin-right 5px
          transition .5s

          &.on-right
            margin-left 5px
          @media screen and (max-width: $breakpoint-xs)
            display none

        &.menu-openend
          .q-icon
            transform rotate(90deg)

    .q-layout-drawer-delimiter
      box-shadow $shadow-1

    .button-profile-image
      height 25px
      width 25px
      border-radius 50%
      background-repeat no-repeat
      background-position center
      background-size cover
      margin-right 5px

    .q-drawer
      width 240px !important
      background-color #263238 !important

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

          .q-focus-helper
            background-color transparent

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
</style>
