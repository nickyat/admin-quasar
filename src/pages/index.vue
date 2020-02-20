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
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus">
  @import "~src/css/app.styl"

  .q-page
    padding 30px 25px 40px !important

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
        margin 0 0 5px 0

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
</style>
