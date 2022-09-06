<template>
  <main class="youus m-auto">
    <Tags :tags="headerTags" />
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
import useTag from "@/composables/useTag";

const { tags, getAllTags } = useYuQueMeta();

onMounted(() => {
  getAllTags();
});

const { headerTags } = useTag(tags);
</script>

<style scoped></style>
