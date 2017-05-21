import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/Index'

import Login from '@/page/Login'
import Register from '@/page/Register'

import Search from '@/page/Search'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: Index,
			children: [{
				path: 'Index',
				name: 'Index',
				component: Index
			}]
		},
		{
			path: '/Register',
			name: 'Register',
			component: Register
		},
		{
			path: '/Search',
			name: 'Search',
			component: Search
		}
	]
})