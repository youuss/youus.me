<template>
  <header class="cpm-nav-bar">
    <div class="sign">
      <NuxtLink to="/">youus</NuxtLink>
    </div>
    <nav class="nav">
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/janghood">Janghood</NuxtLink>
      <a href="https://github.com/youuss" target="_blank">
        <IconsGithubIcon />
      </a>
      <a @click="toggleDark">
        <IconsDarkIcon v-show="isDark" />
        <IconsLightIcon v-show="!isDark" />
      </a>
    </nav>
  </header>
</template>
<script setup>
import { isDark } from "~~/logics";

isDark.value = false;

function toggleDark() {
  isDark.value = !isDark.value;
}
</script>

<style lang="scss" scoped>
.cpm-nav-bar {
  display: grid;
  grid-template-columns: auto max-content;

  .sign {
    padding: var(--main-container-padding);
    font-family: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy,
      "Gill Sans", sans-serif;
    font-size: var(--font-size-nav);
    font-weight: 600;
    letter-spacing: 3px;
    color: inherit;
    a {
      color: inherit;
    }
  }

  .nav {
    grid-column: -1 span;
    padding: var(--main-container-padding);
    font-family: var(--q-font-family);
    display: flex;
    align-items: center;

    a {
      margin: 0 10px;
      opacity: 0.5;
      font-size: var(--font-size-nav);
      transition: opacity 0.2s ease;
      cursor: pointer;
      color: inherit;

      &:hover {
        opacity: 0.8;
      }

      img {
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>
