// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VuePageTransition from 'vue-page-transition'

import DefaultLayout from '~/layouts/Default.vue'
import App from '~/App';

export default function (Vue, { router, head, isClient, appOptions}) {
  Vue.use(VuePageTransition);
  appOptions.render = h => h(App);
  Vue.component('layout', DefaultLayout)
}
