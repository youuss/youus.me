<template>
  <div class="tag" @click="tagClickHandler">
    {{ tag.title }}
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  tag: {
    type: Object as PropType<IToc>,
    default: () => ({}),
  },
});

const emit = defineEmits(["click"]);

const tagClickHandler = () => {
  emit("click", props.tag);
};
</script>
<style lang="scss" scoped>
.tag {
  color: var(--q-contrary);
  background-color: var(--q);
  width: fit-content;
  padding: 2px 15px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  border: 1px dashed transparent;

  &:hover {
    border-color: var(--tag-border-color);
  }
}
</style>
