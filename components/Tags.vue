<template>
  <div class="tags">
    <div class="tag" v-for="tag in tags">
      {{ tag.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  tags: {
    type: Array as PropType<IToc[]>,
    default: () => [],
  },
});
</script>
<style lang="scss" scoped>
.tags {
  .tag {
    color: var(--q-contrary);
    background-color: var(--q);
    width: fit-content;
    padding: 2px 15px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
