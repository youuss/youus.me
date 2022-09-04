import * as matter from 'gray-matter';

export default function useYuQueMeta() {
  const test = () => console.log(matter('---\ntitle: Projects - Anthony Fu\nprojects:xxx \n---'))

  return {
    test
  }
}
