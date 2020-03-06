<template>
  <q-page>
    <div class="row row-expand">
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">

        <chart :options="chartOptions" style=" height:320px;"/>

        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">

          <order-status-history />

        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">
          <div class="row items-center bg-teal full-height">
            <div class="col-5 bg-teal-8 full-height">
              <div class="row full-height justify-center items-center text-white text-h5">
                {{soldProducts.length}}
              </div>
            </div>
            <div class="col-7">
              <div class="q-pl-md text-white q-py-md">Productos <br>Vendidos</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card__chart-icon text-blue-grey-10"></i>
            <div class="card__number">
              <span class="card__number-digit text-blue-grey-10">1002</span>
              Unique Visitors
            </div>
          </div>
          <p class="row justify-between card__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>10.25%
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="row row-expand items-stretch">
      <div class="col-12 col-xl-3 col-padding">
        <div class="card card--general">

          <browser-sessions :startDate="startDate" :endDate="endDate"/>

        </div>
      </div>
      <div class="col-12 col-xl-6 col-padding">
        <div class="card card--general">

          <most-visited-pages :startDate="startDate" :endDate="endDate"/>

        </div>
      </div>
      <div class="col-12 col-xl-3 col-padding">
        <div class="card card--general">

          <views-and-pages :startDate="startDate" :endDate="endDate"/>

        </div>
      </div>
    </div>

    <div class="row row-expand">
      <div class="col-12 col-xl-4 col-padding">
        <div class="card">
          <h6 class="card__title">Latest Messages</h6>
          <div class="inbox-widget">
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-1.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Didier Charpentier</p>
                <p class="inbox-widget__item-message">Hey! there I'm available...</p>
              </div>
              <span class="inbox-widget__item-date">13:40 PM</span>
            </a>
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-2.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Sacripant Laderoute</p>
                <p class="inbox-widget__item-message">I've finished it! See you so...</p>
              </div>
              <span class="inbox-widget__item-date">13:34 PM</span>
            </a>
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-3.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Huon Chalifour</p>
                <p class="inbox-widget__item-message">This theme is awesome!</p>
              </div>
              <span class="inbox-widget__item-date">13:17 PM</span>
            </a>
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-4.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Paien Barrientos</p>
                <p class="inbox-widget__item-message">Nice to meet you</p>
              </div>
              <span class="inbox-widget__item-date">12:20 PM</span>
            </a>
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-5.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Aubrey St-Jean</p>
                <p class="inbox-widget__item-message">Hey! there I'm available...</p>
              </div>
              <span class="inbox-widget__item-date">10:15 PM</span>
            </a>
            <a class="inbox-widget__item" href="#">
              <img class="inbox-widget__item-avatar" src="statics/users/avatar-6.jpg" alt="Author Avatar">
              <div class="column">
                <p class="inbox-widget__item-author">Maurice Monty</p>
                <p class="inbox-widget__item-message">This theme is awesome!</p>
              </div>
              <span class="inbox-widget__item-date">9:56 AM</span>
            </a>
          </div>
          <div class="text-center q-mt-md">
            <q-btn unelevated no-caps color="blue-4" label="Load More" class="card__btn" />
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4 col-padding">
        <div class="card">
          <h6 class="card__title">Recent Activity Feed</h6>

          <notification />

        </div>
      </div>
      <div class="col-12 col-xl-4 col-padding">
        <div class="row row-expand">
          <div class="col-12 col-padding" v-for="user in followers">
            <div class="card">
              <div class="row justify-center q-col-gutter-md" v-if="followers.length>0">
                <div class="col-lg-3" v-for="user in followers">
                  <q-card class="no-shadow text-center">
                    <q-avatar class="bg-white avatar-user" size="100px">
                      <img :src="user.user.mainImage">
                    </q-avatar>
                    <q-card-section class="text-subtitle2 ">
                      <div>{{user.user.fullName}}</div>
                      <!-- <q-rating :value="5" readonly color="yellow" :max="5" /> -->
                      <div class="q-mt-xs" >
                        <q-btn color="primary" class="btn-more" no-caps flat label="Ver más" @click="openProfile(user.user)"/>
                      </div>
                    </q-card-section>
                  </q-card>

                  <q-dialog v-model="card.open">
                    <card-user :card="card"></card-user>
                  </q-dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import viewsAndPages from '@imagina/qanalytics/_components/admin/google-analytics/viewsAndPages'
  import deviceSessions from '@imagina/qanalytics/_components/admin/google-analytics/deviceSessions'
  import browserSessions from '@imagina/qanalytics/_components/admin/google-analytics/browserSessions'
  import mostVisitedPages from '@imagina/qanalytics/_components/admin/google-analytics/mostVisitedPages'
  import notification from '@imagina/qanalytics/_components/info/notification'
  import orderStatusHistory from '@imagina/qanalytics/_components/admin/orders/orderStatusHistory'
  import cardUser from 'src/components/qmarketplace/cardUser'

  export default {
    name: 'PageIndex',
    components: {
      viewsAndPages,
      deviceSessions,
      browserSessions,
      mostVisitedPages,
      notification,
      orderStatusHistory,
      cardUser
    },
    data() {
      return {
        model: '',
        totalPolls:0,
        totalSolds:0,
        totalFollowers:0,
        followers:0,
        card: {
          open: false,
          info: [],
        },
        soldProducts:[],
        options: [],
        chartOptions: {
          chart: {
            type: 'column',
            backgroundColor: null,
          },
          title: {
            text: '',
          },
          xAxis: {
            categories: [], //Answers
            title: {
              text: null,
              style: {
                color: '#f96353'
              }
            },
            labels: {
              style: {
                fontSize: '12px',
                color: '#333333',
              }
            },
            gridLineWidth: 0,
            crosshair: true
          },
          yAxis: {
            gridLineWidth: 1,
            min: 0,
            title: {
              text: ''
            },
            labels: {
              overflow: 'justify'
            }
          },
          credits: {
            enabled: false
          },
          colors: ['#f96353'],
          series: []
        },
        success:false,
        month1: null,
        month1End: null,
        month2: null,
        month2End: null,
        startDate: this.$moment().format('YYYY-MM-DD'),
        endDate: this.$moment().format('YYYY-MM-DD'),
        today: this.$moment().format('YYYY-MM-DD')
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.init()
      })
    },
    methods: {
      async init() {
        this.month1 = this.$moment().subtract(1, 'month').startOf('month').format('YYYY-MM-') + "01"
        this.month1End = this.$clone(this.$moment(this.month1).add(1, 'month').format('YYYY-MM-DD HH:mm'))
        this.month2 = this.$moment().subtract(2, 'month').startOf('month').format('YYYY-MM-') + "01"
        this.month2End = this.$clone(this.$moment(this.month2).add(1, 'month').format('YYYY-MM-DD HH:mm'))
        this.success = true
        console.warn(this.month2, this.month1)
        this.marketplaceReport()
      },
      marketplaceReport(){
        let params = {
          params: {
            filter:{
              storeId: 1,
              startDate: this.startDate,
              endDate: this.endDate,
              totalFollowers: true,
              followers: true,
              soldProducts: true,
              totalPolls: true,
              totalSold:true
            }
          }
        };//params
        this.$crud.index("apiRoutes.qanalytics.marketplace",params).then(response => {
          this.totalFollowers = response.data.totalFollowers;
          this.followers = response.data.followers;
          this.soldProducts = response.data.soldProducts;
          this.totalPolls = response.data.totalPolls;
          this.totalSolds = 0;
          let totalSold = this.$clone(response.data.totalSold)
          this.chartOptions.xAxis.categories = totalSold.dates
          this.chartOptions.series = [
            {
              name: 'Ventas',
              data: totalSold.sold
            }
          ];
          for(var i=0; i<totalSold.sold.length; i++){
            this.totalSolds += totalSold.sold[i];
          }
        });
      },
      getDates(initDate, endDate = this.$moment().format('YYYY-MM-DD')) {
        this.startDate = initDate;
        this.endDate = endDate;
      },
      openProfile(result) {
        this.card.open = true;
        this.card.info = result;
        this.card.info.fields = this.$helper.convertToFrontField(this.card.info.fields);
      }
    }
  }
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  .q-page
    .col-padding
      margin-bottom 20px

    .card
      background-color $white
      color $text-primary
      border 1px solid rgba(112, 112, 112, 0.12)
      border-radius 3px
      height 100%
      padding 20px

      .q-card
        box-shadow none
        border-radius 0
        margin 0

        .box
          box-shadow none
          border-radius 0
          border none
          padding 0

          .col-12
            padding 0

          .text-h6
            font-size 16px

            i
              display none

          div[data-highcharts-chart]
            height 360px !important

      &__title
        font-size 16px
        line-height 22px
        margin 0 0 15px 0

      &__number
        font-family $font-secondary
        font-size 14px

      &__number-digit
        display block
        font-family $font-primary
        font-size 20px

      &--minichart
        font-family $font-secondary
        min-height 156px

        .card__number
          text-align right
          padding-top 2px

        .card__number-digit
          font-size 22px

        .card__chart-icon
          font-size 64px

        .card__income
          font-size 16px
          margin-top 20px

      &--general
        .card__number-digit
          font-weight 500
          margin 4px 0 7px

    .inbox-widget
      &__item
        position relative
        display flex
        align-items center
        font-family $font-secondary
        border-bottom 1px solid #f1f1f1
        padding 10px 0

      &__item-avatar
        width 40px
        border-radius 50%
        margin-right 15px

      &__item-author
        color #333
        font-size 16px
        margin 0

      &__item-message
        color #a0a0a0
        font-size 12px
        margin 0

      &__item-date
        color #a9a9a9
        font-size 11px
        position absolute
        right 7px
        top 2px

    .activity-feed
      font-family $font-secondary
      padding 15px 15px 0

      &__item
        position relative
        display flex
        flex-direction column
        border-left 2px solid #e4e8eb
        padding 0 0 20px 30px

        &:before
          pseudo()
          top 0
          left -6px
          width 10px
          height 10px
          border-radius 50%
          background $white
          border 1px solid #67a8e4

        &:last-child
          border-color transparent

      &__item-date
        position relative
        top -5px
        color #8c96a3
        text-transform uppercase
        font-size 13px

      &__item-description
        position relative
        top -3px
        color $text-brand-dark
        font-size 16px

    .q-btn
      font 400 14px $font-secondary

      &__wrapper
        min-height 31px
        padding 4px 8px

    .social-info
      display flex

      &__avatar
        width 88px
        height 88px
        background-color $white
        border-radius 50%
        border 1px solid #dee2e6
        padding 4px
        margin-right 16px

      &__name
        font-size 18px
        font-weight 500
        line-height 22px
        margin 0 0 4px

      &__links
        display flex

      &__links-item
        line-height 0
        margin-right 8px

        a
          position relative
          display inline-block
          background #f8f8f8
          border-radius 50%
          color #9f9f9f
          width 30px
          height 30px
          line-height 30px

          i
            absolute-center()
</style>
