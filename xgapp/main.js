import App from './App'
// 1. 导入Vant组件，这里的‘vant’就是我们上面新导入的vant的目录
import Vant from './node_modules/vant/lib/vant';
import { Toast } from 'vant';
import Vue from 'vue'
//引入依赖，导入全部模块变量
import * as echarts from './static/comm/echarts.min'
import http from 'config/http'
Vue.use(Toast);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$http = http
App.mpType = 'app'
const app = new Vue({
    ...App
})

import CommHeader from '@/components/Headers/CommHeader.vue';
import ExceptionHeader from '@/components/Headers/ExceptionHeader.vue';
import Tabbar from '@/components/Tabbar/Tabbar.vue';
Vue.component('CommHeader', CommHeader);
Vue.component('ExceptionHeader', ExceptionHeader);
Vue.component('Tabbar', Tabbar);


// 2. 将Vant组件挂载到Vue上
app.$mount()
import { createSSRApp } from 'vue'
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}