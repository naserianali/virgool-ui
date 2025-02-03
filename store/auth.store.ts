import {defineStore} from 'pinia';
import type {AuthMethodEnum} from "~/comons/types/auth.type";
import {AuthTypeEnum} from "~/comons/types/auth.type";

interface INewUser {
  username: string;
  method: AuthMethodEnum,
  type: AuthTypeEnum
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '' as string,
    method: "" as string,
    type: "" as string,
  }),
  actions: {
    setAuthData(newUserName: INewUser) {
      this.username = newUserName.username;
      this.method = newUserName.method
      this.type = newUserName.type
    },
    clearAuthData() {
      this.username = '';
      this.method = '';
      this.type = '';
    },
  },
  getters: {
    getAuthData: (state) => {
      return {
        username: state.username,
        method: state.method,
        type: state.type
      }
    },
  },
});