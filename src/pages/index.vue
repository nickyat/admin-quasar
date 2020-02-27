<template>
  <q-page>
    <div class="row row-expand">
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card__chart-icon text-info"></i>
            <div class="card__number">
              <span class="card__number-digit text-info">9541</span>
              Total Sales
            </div>
          </div>
          <p class="row justify-between card__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card__chart-icon text-green"></i>
            <div class="card__number">
              <span class="card__number-digit text-lime-8">36521</span>
              New Orders
            </div>
          </div>
          <p class="row justify-between card__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card card--minichart">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card__chart-icon text-red-7"></i>
            <div class="card__number">
              <span class="card__number-digit text-red">6521</span>
              New Users
            </div>
          </div>
          <p class="row justify-between card__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
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

    <div class="row row-expand">
      <div class="col-12 col-xl-3 col-padding">
        <div class="card card--general">
          <h6 class="card__title">Monthly Earnings</h6>
          <div class="row row-expand text-center q-mt-lg">
            <div class="col-6 col-padding">
              <div class="card__number">
                <span class="card__number-digit">56241</span>
                <span class="text-muted">Marketplace</span>
              </div>
            </div>
            <div class="col-6 col-padding">
              <div class="card__number">
                <span class="card__number-digit">23651</span>
                <span class="text-muted">Total Income</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6 col-padding">
        <div class="card card--general">
          <h6 class="card__title">Email Sent</h6>
          <div class="row row-expand text-center q-mt-lg">
            <div class="col-4 col-padding">
              <div class="card__number">
                <span class="card__number-digit">56241</span>
                <span class="text-muted">Marketplace</span>
              </div>
            </div>
            <div class="col-4 col-padding">
              <div class="card__number">
                <span class="card__number-digit">23651</span>
                <span class="text-muted">Total Income</span>
              </div>
            </div>
            <div class="col-4 col-padding">
              <div class="card__number">
                <span class="card__number-digit">23651</span>
                <span class="text-muted">Last Month</span>
              </div>
            </div>
          </div>

          <browser-sessions/>
        </div>
      </div>
      <div class="col-12 col-xl-3 col-padding">
        <div class="card card--general">
          <h6 class="card__title">Monthly Earnings</h6>
          <div class="row row-expand text-center q-mt-lg">
            <div class="col-6 col-padding">
              <div class="card__number">
                <span class="card__number-digit">56241</span>
                <span class="text-muted">Marketplace</span>
              </div>
            </div>
            <div class="col-6 col-padding">
              <div class="card__number">
                <span class="card__number-digit">23651</span>
                <span class="text-muted">Total Income</span>
              </div>
            </div>
          </div>
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
          <ol class="activity-feed">
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 25</span>
              <span class="activity-feed__item-description">Responded to need “Volunteer Activities”</span>
            </li>
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 24</span>
              <span class="activity-feed__item-description">Added an interest “Volunteer Activities”</span>
            </li>
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 23</span>
              <span class="activity-feed__item-description">Joined the group “Boardsmanship Forum”</span>
            </li>
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 21</span>
              <span class="activity-feed__item-description">Responded to need “In-Kind Opportunity”</span>
            </li>
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 18</span>
              <span class="activity-feed__item-description">Created need “Volunteer Activities”</span>
            </li>
            <li class="activity-feed__item">
              <span class="activity-feed__item-date">Sep 17</span>
              <span class="activity-feed__item-description">Attending the event “Some New Event”</span>
            </li>
          </ol>
          <div class="text-center">
            <q-btn unelevated no-caps color="blue-4" label="Load More" class="card__btn" />
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4 col-padding">
        <div class="row row-expand">
          <div class="col-12 col-padding">
            <div class="card">
              <div class="social-info">
                <img class="social-info__avatar" src="statics/users/avatar-2.jpg" alt="User Avatar">
                <div class="social-info__content">
                  <h5 class="social-info__name">Pauline I. Bird</h5>
                  <p class="text-muted q-mb-md">Webdeveloper</p>
                  <ul class="social-info__links">
                    <li class="social-info__links-item">
                      <a href="" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Twitter"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Phone Number"><i class="fas fa-phone-alt"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Skype"><i class="fab fa-skype"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-padding">
            <div class="card">
              <div class="social-info">
                <img class="social-info__avatar" src="statics/users/avatar-3.jpg" alt="User Avatar">
                <div class="social-info__content">
                  <h5 class="social-info__name">Ralph L. Alva</h5>
                  <p class="text-muted q-mb-md">Webdeveloper</p>
                  <ul class="social-info__links">
                    <li class="social-info__links-item">
                      <a href="" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Twitter"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Phone Number"><i class="fas fa-phone-alt"></i></a>
                    </li>
                    <li class="social-info__links-item">
                      <a href="" title="Skype"><i class="fab fa-skype"></i></a>
                    </li>
                  </ul>
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
  import browserSessions from '@imagina/qanalytics/_components/admin/google-analytics/BrowserSessions'

  export default {
    name: 'PageIndex',
    components: {
      browserSessions
    }
  }
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  .q-page
    padding 30px 25px 20px !important
    margin-bottom 60px

    .card
      background-color $white
      color $text-primary
      border 1px solid rgba(112, 112, 112, 0.12)
      border-radius 3px
      padding 20px
      margin-bottom 20px

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
        min-height 507px

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
