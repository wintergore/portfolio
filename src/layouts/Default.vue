<template>
  <transition name="fade" appear>
    <main>
      <slot />
    </main>
  </transition>
</template>

<style>
.fade-leave-active {
    position: absolute;
    top: 104px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
/* .fade-leave {
  opacity: 1;
} */
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
