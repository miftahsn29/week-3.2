import { ref } from "vue";
import { defineStore } from "pinia";

const checkCredentialsValidity = (
  credentials: Record<string, string>,
  enteredUsername: string,
  enteredPassword: string
): boolean => {
  return credentials[enteredUsername] === enteredPassword;
};

export const useAuthStore = defineStore('auth', () => {
  const username = ref('');
  const password = ref('');
  const isAuthenticated = ref(false);

  const userCredentials: Record<string, string> = {
    user: 'client',
    // Tambahkan entri baru di bawah ini
    newUsername: 'newPassword',
  };
  

  const performLogin = (enteredUsername: string, enteredPassword: string) => {
    if (checkCredentialsValidity(userCredentials, enteredUsername, enteredPassword)) {
      isAuthenticated.value = true;
      username.value = enteredUsername;
    } else {
      alert('Login unsuccessful. Please ensure your username and password are correct.');
    }
  };

  const performLogout = () => {
    isAuthenticated.value = false;
    username.value = '';
    password.value = '';
  };

  return { username, login: performLogin, logout: performLogout, isAuthenticated };
});
