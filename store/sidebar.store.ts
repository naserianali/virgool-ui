import {defineStore} from 'pinia';

interface ISidebar {
  isSidebarOpen: boolean;
}

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebarOpen: true as boolean,
  }),
  actions: {
    setSidebarData(payload: ISidebar) {
      this.isSidebarOpen = payload.isSidebarOpen;
    },
  },
  getters: {
    getSidebarData: (state) => {
      return {
        isSidebarOpen : state.isSidebarOpen
      }
    },
  },
  persist: true,
});