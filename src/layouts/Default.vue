<template>
  <div class="layout">
    <main-menu />
    <transition name="overlay-up-full" mode="out-in">
      <router-view />
    </transition>
    <div class="overlay-top"></div>
    <div class="overlay-right"></div>
    <div class="overlay-bottom"></div>
    <div class="overlay-left"></div>
  </div>
</template>

<script>
import MainMenu from "~/components/MainMenu";
export default {
  components: {
    MainMenu,
  },
};
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

/* transition */

:root {
  --overlay-bg: #1867c0;
  --transition-duration: 0.35s;
}

/* overlay-down */
.overlay-top {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100vw;
  background: var(--overlay-bg);
  transition-duration: var(--transition-duration);
}

.overlay-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0;
  width: 100vw;
  background: var(--overlay-bg);
  transition-duration: var(--transition-duration);
}

/* overlay-top.scss */
.overlay-up-full-enter ~ .overlay-bottom {
  height: 100vh;
}

.overlay-up-full-enter-active ~ .overlay-bottom,
.overlay-up-full-leave-active ~ .overlay-bottom {
  height: 100vh;
}

.overlay-up-full-enter-active ~ .overlay-bottom {
  transition-timing-function: ease-in;
}

.overlay-up-full-enter-active ~ .overlay-bottom,
.overlay-up-full-enter-to ~ .overlay-bottom {
  display: none;
}

.overlay-up-full-enter-to ~ .overlay-top {
  height: 0;
}

.overlay-up-full-leave-active ~ .overlay-top {
  transition-timing-function: ease;
}

.overlay-up-full-enter ~ .overlay-top,
.overlay-up-full-enter-active ~ .overlay-top,
.overlay-up-full-enter-to ~ .overlay-top {
  transition-duration: unset !important;
  height: 100vh;
}

.overlay-up-full-enter-active,
.overlay-up-full-leave-active {
  transition-duration: var(--transition-duration);
}
</style>
