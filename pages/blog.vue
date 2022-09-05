<template>
  <main class="youus m-auto">
    <Tags :tags="tags" />
  </main>
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

import useYuQueMeta from "@/composables/useYuQueMeta";

const { tags, getAllTags } = useYuQueMeta();

onMounted(() => {
  getAllTags();
});
</script>

<style scoped></style>
