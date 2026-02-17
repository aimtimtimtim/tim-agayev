<script setup>
import { onMounted } from 'vue'

import Cases from '../components/ui/Cases/Cases.vue';
import Hero from '../components/ui/Hero.vue';

import { Analytics } from '@vercel/analytics/vue';
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

</script>

<template>
  <Analytics />
  <Hero></Hero>
  <Cases></Cases>
</template>

<style scoped></style>
