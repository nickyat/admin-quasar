<template>
  <q-page>
    <div class="row row-expand">
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card-chart bg-white">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card-chart__icon text-info"></i>
            <div class="card-chart__number text-right">
              <span class="card-chart__number-digit block text-info">9541</span>
              Total Sales
            </div>
          </div>
          <p class="row justify-between card-chart__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card-chart bg-white">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card-chart__icon text-green"></i>
            <div class="card-chart__number text-right">
              <span class="card-chart__number-digit block text-lime-8">36521</span>
              New Orders
            </div>
          </div>
          <p class="row justify-between card-chart__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card-chart bg-white">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card-chart__icon text-red-7"></i>
            <div class="card-chart__number text-right">
              <span class="card-chart__number-digit block text-red">6521</span>
              New Users
            </div>
          </div>
          <p class="row justify-between card-chart__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 col-padding">
        <div class="card-chart bg-white">
          <div class="row justify-between">
            <i class="fas fa-chart-pie card-chart__icon text-blue-grey-10"></i>
            <div class="card-chart__number text-right">
              <span class="card-chart__number-digit block text-blue-grey-10">1002</span>
              Unique Visitors
            </div>
          </div>
          <p class="row justify-between card-chart__income text-muted q-mb-none">
            Total income: $22506
            <span>
              <i class="fa fa-caret-up q-mr-xs"></i>
              10.25%
            </span>
          </p>
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

    .card-chart
      border 1px solid rgba(112, 112, 112, 0.12)
      border-radius 3px
      font-family $font-secondary
      padding 20px
      margin-bottom 20px
      min-height 156px

      &__icon
        font-size 64px

      &__number
        font-size 14px
        padding-top 2px

      &__number-digit
        font-family $font-primary
        font-size 22px

      &__income
        font-size 16px
        margin-top 20px
</style>
