<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import axios from "axios";
const router = useRouter();
const auth = useAuthStore();
const username = ref('');
const password = ref('');

const forLogin = async () => {
  if(username.value === "" || password.value === "") {
    alert("Username or Password can't be empty")
  } else {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      username: username.value,
      password: password.value,
    })
    
    auth.performLogin(username.value, password.value)
    console.log(response);
  } catch (error) {
    console.error('Login error:', error);
    
    if (axios.isAxiosError(error) && error.response && error.response.status === 402 || 403) {
        alert('Incorrect username or password');
  }
}
}
}
</script>

<style scoped>
.login-container {
  text-align: center;
  margin: 2rem auto;
}

.inputButton {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  margin-bottom: 10px;
  border-radius: 0.25rem;
  border-style: groove;
  padding: 0.2rem;
  min-width: 10rem;
  width: 100%;
}

.button {
  color: white;
  background-color: #3498db; /* Warna biru yang lebih standar */
  border-radius: 0.25rem;
  font-size: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9; /* Warna biru yang lebih gelap saat dihover */
}
</style>

<template>
  <div class="login-container">
    <h1>Welcome</h1>
    <div class="inputButton">
      <input class="input" type="text" v-model="username" placeholder="Username">
      <input class="input" type="password" v-model="password" placeholder="Password">
      <button class="button" @click="forLogin">Sign in</button>
    </div>
  </div>
</template>
@/stores/auth