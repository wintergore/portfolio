<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
      <g-link class="nav__link" to="/blog/">Posts</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    siteName() {
      return this.$static.metadata.siteName;
    },
  },
};
</script>
