<template>
  <div>
    <p v-for="(post, index) in $page.posts.edges" :key="index">
      <g-link :to="post.node.path">
        {{ post.node.title }}
      </g-link>
    </p>
    <Pager :info="$page.posts.pageInfo"/>
  </div>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
