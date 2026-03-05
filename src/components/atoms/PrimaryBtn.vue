<script setup lang="ts">
import clickSound from '@/assets/sounds/click.mp3';

interface Props {
  text?: string;
  href?: string;
  newTab?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

withDefaults(defineProps<Props>(), {
  text: "Primary Button",
  newTab: false,
  iconPosition: 'left',
});

const handleHover = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.1; // Уменьшаем громкость
  audio.currentTime = 0;
  audio.play().catch(err => console.error('Audio playback error:', err));
};
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="newTab ? '_blank' : '_self'"
    class="primary-btn"
    @pointerenter="handleHover"
  >
    <img v-if="icon && iconPosition === 'left'" :src="icon" :alt="text" class="btn-icon">
    {{ text }}
    <img v-if="icon && iconPosition === 'right'" :src="icon" :alt="text" class="btn-icon">
  </component>
</template>

<style scoped>
.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  text-decoration: none;
  background-color: var(--accent);
  color: var(--on-accent);
  border: none;
  height: 60px;
  padding: 0 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: var(--bg-primary-hover);
}
</style>
