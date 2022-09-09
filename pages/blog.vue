<template>
  <main>
    <PageTitle title="Blog" />
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

const { tags, getAllTags } = useYuQueMeta();

onMounted(() => {
  getAllTags();
});

const { headerTags } = useTag(tags);
</script>

<style scoped></style>
