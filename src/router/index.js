import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'Home',
		meta: {
			level: 1,
			title: 'home',
		},
		component: () => import( /* webpackChunkName: "home" */ '@/views/home/'),
	},
	{
		path: '/about',
		name: 'About',
		meta: {
			level: 1,
			title: 'about',
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/about/')
	},
	{
		path: '/layout',
		name: 'layout',
		meta: {
			level: 1,
			title: 'layout',
		},
		component: () => import( /* webpackChunkName: "layout" */ '@/views/layout/' )
	},
];

const router = new VueRouter({
	routes
});

export default router;
