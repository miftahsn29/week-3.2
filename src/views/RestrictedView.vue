<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>

<template>
  <div v-if="auth.isLoggedIn()"><h1>special content</h1></div>
  <div v-else>Anda harus login terlebih dahulu!</div>

</template>