<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const auth = useAuthStore();
const router = useRouter();

const forLogout = () => {
    auth.performLogout();
    router.push('/login');
};

console.log(auth.username)

</script>

<template>
    <div class="main-container">
        <div class="navigation-container">
            <div class="navigation-header">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/restricted">Restricted Page</router-link>
            </div>
            <div class="login-section">
                <p v-if="auth.isLoggedIn()">{{ auth.username }}</p>
                <div v-if="auth.isLoggedIn()">
                    <router-link class="logout-button" to="/login" @click="forLogout()">Logout</router-link>
                </div>
                <div v-else>
                    <router-link class="login-button" to="/login">Login</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 800px;
}

.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navigation-header {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.login-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-button,
.login-button {
  background-color: #3498db;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover,
.login-button:hover {
  background-color: #2980b9;
}
</style>
@/stores/auth