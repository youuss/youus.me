import { Ref } from 'vue';

export default function useTag(tags: Ref<IToc[]>) {
  const headerTags = computed(() => tags.value.filter(tag => tag.level === 0));

  function createTagTree(uuid = '') {
    function loop(parent_uuid: string) {
      return tags.value.reduce((acc, cur) => {
        if (cur.parent_uuid === parent_uuid) {
          cur.children = loop(cur.uuid)
          acc.push(cur)
        }
        return acc
      }, [])
    }
    return loop(uuid)
  }

  const tocTree = computed<IToc[]>(() => createTagTree())

  return {
    headerTags,
    tocTree,
  }
}
