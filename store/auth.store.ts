import {defineStore} from 'pinia';
import type {AuthMethodEnum} from "~/comons/types/auth.type";

interface INewUser {
  username: string;
  method: AuthMethodEnum
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '' as string,
    method: "" as string,
  }),
  actions: {
    setAuthData(newUserName: INewUser) {
      this.username = newUserName.username;
      this.method = newUserName.method
    },
    clearAuthData() {
      this.username = '';
      this.method = '';
    },
  },
  getters: {
    getAuthData: (state) => {
      return {
        username: state.username,
        method: state.method
      }
    },
  },
});