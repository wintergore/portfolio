// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VuePageTransition from 'vue-page-transition'

export default function (Vue, { router, head, isClient }) {

  //Vue Page Transitions https://www.npmjs.com/package/vue-page-transition
  Vue.use(VuePageTransition)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
