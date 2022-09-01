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
import { isDark } from '~~/logics';

isDark.value = false

function toggleDark() {
  isDark.value = !isDark.value
}
</script>
