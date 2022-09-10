interface IToc {
  type: 'TITLE' | 'DOC';
  title: string;
  uuid: string;
  url: string;
  prev_uuid: string;
  sibling_uuid: string;
  child_uuid: string;
  parent_uuid: string;
  doc_id: string;
  level: number;
  id: string;
  open_window: number;
  visible: number;
  depth: number;
  slug: string;
  children?: IToc[]
}


interface ITocRes {
  data: IToc[];
}
