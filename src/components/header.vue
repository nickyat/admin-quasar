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

        <!-- Search Button -->
        <q-btn flat class="q-toolbar__item q-toolbar__btn-search" @click="toggleSearch">
          <q-icon name="fas fa-search" color="grey-7" size="19px"></q-icon>
        </q-btn>

        <!--Select-->
        <q-slide-transition>
          <div class="row q-toolbar__search-wrapper" v-if="!loadingImpersonate" v-show="searchVisibility">
            <q-select dense v-model="userToImpersonate" use-input hide-selected
                      emit-value map-options
                      input-debounce="800" :options="userList" @filter="getUsers"
                      :placeholder="`${$tr('ui.label.find')} ${$tr('ui.label.user')}...`"
                      @input="impersonate()"
                      class="q-toolbar__search-select">
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    {{$tr('ui.message.searchNotFound')}}
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-btn flat class="q-px-sm" @click="toggleSearch">
              <q-icon name="fas fa-times-circle" color="grey-7" size="20px"></q-icon>
            </q-btn>
          </div>
        </q-slide-transition>
        <!--Loading-->
        <div v-if="loadingImpersonate" class="q-py-sm">
          <q-spinner class="q-mr-sm"/>
          {{`${$tr('ui.label.loading')}...`}}
        </div>

        <!--Full Screen-->
        <q-item clickable class="q-toolbar__item q-toolbar__fullscreen" @click.native="toggleFullscreen()">
          <q-item-section avatar>
            <q-icon color="grey-7" size="19px" name="fas fa-expand"/>
          </q-item-section>
        </q-item>

        <!-- ===== Language ===== -->
        <q-select :options="options.locales" dense emit-value map-options
                  filter v-if="show.locales" @input="updateLocale"
                  v-model="locale"
                  class="q-toolbar__item q-toolbar__lang-switch q-if-focused q-if-focusable"/>

        <!--== Button User ==-->
        <q-no-ssr>
          <q-btn flat no-caps v-if="quserState.authenticated"
                 @click="drawer.config = !drawer.config"
                 class="q-toolbar__item q-toolbar__btn-user">
            <q-avatar size="36px">
              <img :src="quserState.userData.mainImage">
            </q-avatar>
            <!-- <div class="q-ml-xs">{{quserState.userData.firstName}}</div> -->
          </q-btn>
        </q-no-ssr>
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
  import configList from 'src/components/master/configList'
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
        locale: this.$store.state.qsiteSettings.defaultLocale,
        drawer: {
          menu: true,
          config: false,
          notification: false
        },
        options: {
          locales: this.$store.getters['qsiteSettings/getSelectedLocalesSelect']
        },
        show: {
          locales: true
        },
        searchVisibility: false,
        fullScreen: this.$q.fullscreen.isActive,
        menu: config('sidebar'),
        logo: this.$store.getters['qsiteSettings/getSettingMediaByName']('isite::logo1').path,
        userToImpersonate: null,
        loadingImpersonate: false,
        userList: []
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

      //Toggle Search
      toggleSearch () {
        this.searchVisibility = !this.searchVisibility
      },

      //Toggle fullscreen
      toggleFullscreen () {
        this.$q.fullscreen.toggle()
      },

      //update Locale
      async updateLocale () {
        this.$store.dispatch('qsiteSettings/SET_LOCALE', { locale: this.locale, vue: this }).then(response => {
          this.$store.dispatch('app/REFRESH_PAGE')
        })
      },

      //Get users to impersonate
      getUsers (val, update, abort) {
        //Validate length of val
        if (val.length < 2) return abort()

        let params = { params: { take: 100, filter: { search: val } } }
        //Request
        this.$crud.index('apiRoutes.quser.users', params).then(response => {
          update(() => {
            let userId = this.$store.state.quserAuth.userId
            let options = []
            response.data.forEach(item => {
              if (item.id != userId) options.push({ label: item.fullName, value: item.id })
            })
            this.userList = this.$clone(options)
          })
        }).catch(error => {
          update(() => {
            this.userList = []
          })
        })
      },

      //toggle impersonate
      async impersonate () {
        this.loadingImpersonate = true

        if (this.quserState.impersonating) {
          await this.$store.dispatch('quserAuth/USER_LEAVE_IMPERSONATE')
        } else if (this.userToImpersonate) {
          await this.$store.dispatch('quserAuth/USER_IMPERSONATE', this.userToImpersonate)
        }

        this.loadingImpersonate = false
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  #masterHeader
    --q-color-primary initial !important

    .q-header
      background-color $white
      border none
      margin-bottom 20px
      box-shadow 0 2px 3px -2px rgba(0, 0, 0, 0.15)

    .btn-menu
      i
        font-size 24px

    img
      max-width 100% !important

    .q-focus-helper
      display none

    .q-toolbar
      min-height 70px

      &__title
        padding 0 5px

        .btn-page-title
          font-family $font-primary !important
          font-size 20px !important
          text-transform capitalize

          .q-btn__wrapper
            padding 4px 10px

          &.menu-openend
            .q-icon
              transform rotate(90deg)

      &__item
        &:not(:last-child)
          padding 0 16px
          margin-right 8px

      &__btn-search
        .q-btn__wrapper
          padding 0

      &__search-wrapper
        position absolute
        left 0
        width 100%
        height 70px
        background-color $white
        padding 10px 15px
        z-index 99

        .q-field
          flex 1 1

          &__control
            &:before
              display none

          &__input
            &::-webkit-input-placeholder
              color #acacac

            &:-moz-placeholder
              color #acacac

            &::-moz-placeholder
              color #acacac

            &::-ms-input-placeholder
              color #acacac

        .q-btn
          .q-btn__wrapper
            padding 0

          &:hover
            .q-icon
              color #ea553d !important

      &__fullscreen
        .q-item__section
          padding-right 0 !important

      &__lang-switch
        font-family $font-secondary
        font-size 16px

        .q-field__control:before,
        .q-field__append
          display none

    .q-layout__section--marginal
      color $text-brand-dark

    .q-layout-drawer-delimiter
      box-shadow $shadow-1

    .main-menu
      .q-drawer
        width 240px !important
        background-color #263238 !important
        border-right 0

        &__content
          padding-bottom 50px

      .q-drawer::-webkit-scrollbar
        background-color $white
        width 16px

        &-track
          border-radius 10px
          background-color #fff

        &-thumb
          border-radius 16px
          background-color #babac0

      #listMenu
        margin-top 8px

        hr
          display none

        .q-item
          font-family $font-secondary
          font-size 16px
          color rgba(255, 255, 255, 0.5)
          background-color transparent
          padding 12px 23px 12px 26px
          transition all 0.3s ease-out

          &:hover
            color rgba(255, 255, 255, 0.8)
            background-color transparent

            .q-icon
              color rgba(255, 255, 255, 0.8)

              &:before,
              &:after
                display none

          .q-icon
            color rgba(255, 255, 255, 0.5)

          &.item-is-active
            background-color #222d32
            color rgba(255, 255, 255, 0.8)

            .q-item__section, .q-icon
              color white

        .q-expansion-item__content .item-is-active
          background-color transparent
          color color rgba(255, 255, 255, 0.5)

          .q-item__section, .q-icon
            color rgba(255, 255, 255, 0.5)

        .q-item__section--avatar
          margin-right 9px

        .q-expansion-item__content
          padding 0 0 0 7px
          border-left none !important

          #listMenu
            margin-top 0

          .q-item
            font-size 15px
            padding-top 10px
            padding-bottom 10px

          .q-icon
            font-size 15px

        .expansion-selected
          background-color $primary

      .sidebar-logo
        height 28px

    .config-menu
      .q-drawer
        width 225px !important
        right 5px
        bottom initial
        background-color $white !important
        border 1px solid rgba(0, 0, 0, 0.15)
        border-radius 4px
        box-shadow 0 3px 12px rgba(0, 0, 0, 0.05)
        padding 4px 0

        &__backdrop
          background-color transparent !important

  /***** Media Queries *****/
  @media screen and (min-width: 1024px)
    #masterHeader
      .q-header
        left 240px !important

      .btn-menu
        display none

  @media screen and (max-width: 1023px)
    #masterHeader
      .config-menu
        .q-drawer
          margin-top 70px

  @media screen and (max-width: $breakpoint-sm)
    #masterHeader
      .q-toolbar
        &__fullscreen,
        &__lang-switch
          display none
</style>
