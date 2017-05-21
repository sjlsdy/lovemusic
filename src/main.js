// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import * as wdui from 'wdui' //整体引入
import 'wdui/lib/styles/theme-default/index.css' //引入样式文件

Vue.use(wdui)

import App from './App'
import router from './router'

import './static/css/main.less'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
