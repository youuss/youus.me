<script setup lang="ts">
import { id } from "fp-ts/lib/Refinement";
import { PropType } from "vue";

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

const closeList = reactive([]);
let index = props.index || 0;
index++;

const onOff = (uuid: string) => {
  if (closeList.includes(uuid)) {
    closeList.splice(closeList.indexOf(id));
  } else {
    closeList.push(uuid);
  }
};
</script>

<template>
  <div style="width: 200px">
    <div v-for="node in tocTree">
      <p :style="{ marginLeft: (index - 1) * 10 + 'px' }">
        <span @click="onOff(node.uuid)" v-if="node.children">
          {{ closeList.includes(node.uuid) ? "*" : "[]" }}
        </span>
        {{ node.title }}
      </p>
      <TocTree
        v-if="node.children && !closeList.includes(node.uuid)"
        :tocTree="node.children"
        :index="index"
        :key="node.uuid"
      />
    </div>
  </div>
</template>
