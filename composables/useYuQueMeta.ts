export default function useYuQueMeta() {

  function yuqueFetch<R>(api: string) {
    return useFetch<R>(api, {
      method: 'Get',
      mode: 'cors',
      headers: {
        'X-Auth-Token': 's4Gq7e6rgj2z1RzTQ2vvlIFK99raMPZrzYZsMdyH',
      }
    })
  }

  const getTocList = () => yuqueFetch<ITocRes>('/yq/repos/hiyouus/blog/toc');

  const tags = ref<IToc[]>([]);
  const getAllTags = async () => {
    const { data } = await getTocList();
    tags.value = data.value?.data || []
  }

  return {
    getTocList,
    getAllTags,
    tags
  }
}
