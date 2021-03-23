import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
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
		component: () => import( /* webpackChunkName: "layout" */ '@/views/layout/' ),
	},
	{
		path: '/card',
		name: 'card',
		meta: {
			level: 1,
			title: 'card',
		},
		component: () => import( /* webpackChunkName: "card" */ '@/views/card/' ),
	},
	{
		path: '/tabs',
		name: 'tabs',
		meta: {
			level: 1,
			title: 'tabs',
		},
		component: () => import( /* webpackChunkName: "tabs" */ '@/views/tabs/' ),
	},
	{
		path: '/steps',
		name: 'steps',
		meta: {
			level: 1,
			title: 'steps',
		},
		component: () => import( '@/views/steps/' )
	},
	{
		path: '/form/viewui-form',
		name: 'viewui-form',
		meta: {
			level: 2,
			title: 'viewui-form',
		},
		component: () => import( '@/views/form_new/form/' ),
	},
	// {
	// 	path: '/form/viewui-form-new',
	// 	name: 'viewui-form-new',
	// 	meta: {
	// 		level: 2,
	// 		title: 'viewui-form-new',
	// 	},
	// 	component: () => import( '@/views/form_new/form_other_one/' ),
	// },
];

const router = new VueRouter({
	routes
});

export default router;
