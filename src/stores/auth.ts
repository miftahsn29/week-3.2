import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const username = ref('');
  const password = ref('');
  const isLoggedIn = () => {
    return username.value !== '' && password.value !== ''
  }
  const performLogin = (name:string, pass:string) => {
    username.value = name
    password.value = pass
  }

  const performLogout = () => {
    username.value = ''
    password.value = ''

  };
  return { username, password, performLogin, performLogout, isLoggedIn }
});
