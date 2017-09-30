// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './page/index'
import DetailPage from './page/detail'
import VueResource from 'vue-resource'
import DetailForecast from './page/detail/forecast'
import DetailCount from './page/detail/count'
import DetailAnalysis from './page/detail/analysis'
import DetailPublish from './page/detail/publish'
import OrderListPage from './page/orderList'

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/count',
			children: [{
				path: 'forecast',
				component: DetailForecast
			}, {
				path: 'count',
				component: DetailCount
			}, {
				path: 'analysis',
				component: DetailAnalysis
			}, {
				path: 'publish',
				component: DetailPublish
			}]
		}
	]
})
new Vue({
	el: '#app',
	router,
	render: function(h) {
		return h(Layout)
	},
	components: {
		Layout
	}
})