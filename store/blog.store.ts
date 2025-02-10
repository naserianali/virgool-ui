import {defineStore} from 'pinia';
import type {IBlogs} from "~/pages/Dashboard/Post/_components/Posts.component.vue";

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blog: {} as IBlogs,
  }),
  actions: {
    setData(newBlogData: IBlogs) {
      this.blog = newBlogData;
    },
    clearData() {
      this.blog = {} as IBlogs;
    },
  },
  getters: {
    getData: (state) => {
      return state.blog
    },
  },
});