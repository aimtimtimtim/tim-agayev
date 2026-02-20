<script setup>
import { ref, onMounted } from 'vue'  // добавь ref

import Cases from '../components/ui/Cases/Cases.vue';
import Hero from '../components/ui/Hero.vue';

import { Analytics } from '@vercel/analytics/vue';
import { useThemeStore } from '../stores/theme'
import CircularSlder from '@/components/Vibecoded/CircularSlder.vue';

const themeStore = useThemeStore()
const sliderValue = ref(25)  // добавь это

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <Analytics />
  <Hero></Hero>
  <!-- <Cases></Cases> -->
  <div class="circular-slider-container">
    <CircularSlder v-model="sliderValue"></CircularSlder> <!-- добавь v-model -->
    <p>Circular Slider</p>
  </div>

</template>

<style scoped>
.circular-slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 120px;
  margin-top: 50px;
  background-color: var(--bg-secondary);
  border-radius: 50px;
}

p{
  font-size: 28px;
}

</style>