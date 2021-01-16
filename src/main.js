import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

// // LoadingBar - 在路由中使用
// router.beforeEach( ( to, from, next ) => {
// 	ViewUI.LoadingBar.start();
	
// 	next();
// } );

// router.afterEach( route => {
// 	ViewUI.LoadingBar.finish();
// } );

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
