import {Chart} from 'highcharts-vue'
import { Carousel, Slide } from 'vue-carousel'

export default async ({app, router, store, Vue}) => {
   //Components
   let components = [
      {name: 'Carousel', component: Carousel},
      {name: 'Slide', component: Slide},
      {name: 'chart', component: Chart}
   ]

   //Register components
   components.forEach(item => {
      Vue.use(item.component)
      Vue.component(item.name, item.component)
   })
}
