<template>
  <main>
    <PageTitle title="Blog" />
    <TocTag v-for="tag in headerTags" :tag="tag" />
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

const { headerTags, createTagTree } = useTag(tags);

onMounted(async () => {
  await getAllTags();
  console.log(tags);
  const tagTree = createTagTree();
  console.log(tagTree);
});
</script>

<style scoped></style>
