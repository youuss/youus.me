<template>
  <main class="m-3">
    <PageTitle title="Blog" />
    <TocTag v-for="tag in headerTags" :tag="tag" />
    <YuqueTocTree :tocTree="tocTree" />
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

const { headerTags, tocTree } = useTag(tags);

onMounted(async () => {
  await getAllTags();
});
</script>

<style scoped></style>
