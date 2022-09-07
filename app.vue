<template>
  <div>
    <NavBar />
    <NuxtPage />
    <Plum />
    <Security />
  </div>
</template>
<script setup>
import post from "./components/Post.vue";

useHead({
  title: "hiYouus",
});
</script>
