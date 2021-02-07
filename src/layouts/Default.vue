<template>
  <div class="layout">
    <main-menu />
    <vue-page-transitions name="fade">
      <router-view/> 
    </vue-page-transitions>
  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu';
  export default {
    components: {
      MainMenu,
    },
  };
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .fade-enter-active {
    transition-delay: 0.5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>