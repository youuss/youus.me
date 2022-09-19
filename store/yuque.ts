import { defineStore } from 'pinia';

export const useYuQueTocTreeStore = defineStore('tocTree', {
  state() {
    return {
      closeList: []
    }
  },
  actions: {
    turnOnOrOff(uuid: string) {
      if (this.closeList.includes(uuid)) {
        this.closeList.splice(this.closeList.indexOf(uuid));
      } else {
        this.closeList.push(uuid);
      }
    }
  }
})
