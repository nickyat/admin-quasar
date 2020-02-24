import {Chart} from 'highcharts-vue';
import { Carousel, Slide } from 'vue-carousel';
import { DonutChart, BarChart, LineChart, AreaChart } from 'vue-morris'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

export default async ({app, router, store, Vue}) => {
   //Components
   let components = [
      {name: 'Carousel', component: Carousel},
      {name: 'Slide', component: Slide},
      {name: 'chart', component: Chart},
      {name: 'donutChart', component: DonutChart},
      {name: 'barChart', component: BarChart},
      {name: 'lineChart', component: LineChart},
      {name: 'areaChart', component: AreaChart},
   ]

   //Register components
   components.forEach(item => {
      Vue.use(item.component)
      Vue.component(item.name, item.component)
   })
}
