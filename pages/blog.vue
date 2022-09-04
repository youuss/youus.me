<template>
  <div>
    <div @click="test">test</div>
  </div>
</template>

<script setup>
/**
 * @Description
 * @Author youus
 * @Date 22:17
 * @Version v1.0.0
 *
 * Hello, humor
 */

import useYuQueMeta from '@/composables/useYuQueMeta';
const { test } = useYuQueMeta();
</script>

<style scoped>

</style>
