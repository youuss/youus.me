<script setup lang="ts">
import { PropType } from "vue";
import { useYuQueTocTreeStore } from "@/store/yuque";

const props = defineProps({
  tocTree: {
    type: Array as PropType<IToc[]>,
    default: () => [],
  },
  index: {
    type: Number,
    default: 0,
  },
});

let index = props.index || 0;
index++;

const yuQueTocTreeStore = useYuQueTocTreeStore();
</script>

<template>
  <div style="width: 200px">
    <div v-for="node in tocTree">
      <div class="tree-item" :style="{ '--level': index }">
        <span @click="yuQueTocTreeStore.turnOnOrOff(node.uuid)" class="tree-icon">
          <IconsTreePlus
            v-if="node.children.length"
            :class="{ 'tree-expend': !yuQueTocTreeStore.closeList.includes(node.uuid) }"
          />
        </span>
        <span class="tree-label">{{ node.title }}</span>
      </div>
      <TocTree
        v-if="node.children && !yuQueTocTreeStore.closeList.includes(node.uuid)"
        :tocTree="node.children"
        :index="index"
        :key="node.uuid"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tree-item {
  --level: 0;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  padding: 4px 0 4px calc(24px * var(--level) + 8px);

  .tree-icon {
    position: relative;
    display: inline-flex;
    flex: none;
    width: 16px;
    align-items: center;
    text-align: center;
  }

  .tree-label {
    flex-wrap: nowrap;
    flex: 0 0 auto;
    padding: 2px 4px;
    margin-left: 4px;
  }
}
.tree-expend {
  transform: rotate(45deg);
  transition: transform 0.2s ease-in;
}
</style>
