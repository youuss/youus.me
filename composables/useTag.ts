import { Ref } from 'vue';

export default function useTag(tags: Ref<IToc[]>) {
  const headerTags = computed(() => tags.value.filter(tag => tag.level === 0));

  return {
    headerTags
  }
}
