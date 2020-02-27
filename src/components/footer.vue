<template>
  <div id="footer">
    <!-- Copyright -->
    <p class="q-mb-none">
      © 2019 - 2020 {{ $store.getters['qsiteSettings/getSettingValueByName']('core::site-name') }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {},
    components: {
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {}
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  #footer
    position absolute
    right 0
    left 0
    bottom 0
    background-color $white
    border-top 1px solid rgba(0, 0, 0, 0.05)
    padding 20px 30px
    color $text-brand-dark
    font-size 14px
    letter-spacing 0.42px

    /***** Media Queries *****/
    @media screen and (min-width: 1024px)
      left 240px
</style>
