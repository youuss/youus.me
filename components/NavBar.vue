<template>
  <header class="header">
    <div class="sign">youus</div>
    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/janghood">Janghood</NuxtLink>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: auto max-content;
  .sign {
    padding: 2rem;
  }
  .nav {
    grid-column: -1 span;
    padding: 2rem;
    a {
      margin: 0 10px;
    }
  }
}
</style>
