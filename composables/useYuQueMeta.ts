import * as matter from 'gray-matter';

export default function useYuQueMeta() {
  const test = () => console.log(matter("---\n menu: 'xxx'\n - type: META\n  count: 5\n  display_level: 1\n  tail_type: UPDATED_AT\n  base_version_id: 240075032\n  published: true\n  max_level: 2\n  last_updated_at: 2022-09-04T14:44:54.463Z\n  version_id: 240075044\n- type: TITLE\n  title: vite\n  uuid: GtibXwy2pORAO1md\n  url: ''\n  prev_uuid: ''\n  sibling_uuid: ''\n  child_uuid: 55m-HcV1tf2uDnqc\n  parent_uuid: ''\n  doc_id: ''\n  level: 0\n  id: ''\n  open_window: 1\n  visible: 1\n- type: TITLE\n  title: HMR\n  uuid: 55m-HcV1tf2uDnqc\n  url: ''\n  prev_uuid: GtibXwy2pORAO1md\n  sibling_uuid: ''\n  child_uuid: n380IV-lXS5HHgWP\n  parent_uuid: GtibXwy2pORAO1md\n  doc_id: ''\n  level: 1\n  id: ''\n  open_window: 1\n  visible: 1\n- type: DOC\n  title: 前置\n  uuid: n380IV-lXS5HHgWP\n  url: fbr3h6\n  prev_uuid: 55m-HcV1tf2uDnqc\n  sibling_uuid: 75afO40MU5Dl-6NL\n  child_uuid: ''\n  parent_uuid: 55m-HcV1tf2uDnqc\n  doc_id: 91878711\n  level: 2\n  id: 91878711\n  open_window: 0\n  visible: 1\n- type: DOC\n  title: 客户端接受消息\n  uuid: 75afO40MU5Dl-6NL\n  url: oydn1k\n  prev_uuid: n380IV-lXS5HHgWP\n  sibling_uuid: TNN8wFdtRcYWsQsG\n  child_uuid: ''\n  parent_uuid: 55m-HcV1tf2uDnqc\n  doc_id: 91878754\n  level: 2\n  id: 91878754\n  open_window: 0\n  visible: 1\n- type: DOC\n  title: 更新\n  uuid: TNN8wFdtRcYWsQsG\n  url: ie1ssv\n  prev_uuid: 75afO40MU5Dl-6NL\n  sibling_uuid: ''\n  child_uuid: ''\n  parent_uuid: 55m-HcV1tf2uDnqc\n  doc_id: 91878732\n  level: 2\n  id: 91878732\n  open_window: 0\n  visible: 1\n ---"))

  return {
    test
  }
}
