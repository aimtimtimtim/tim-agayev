<script setup lang="ts">
import clickSound from '@/assets/sounds/click.mp3';

interface Props {
  text?: string;
  href?: string;
  newTab?: boolean;
}

withDefaults(defineProps<Props>(), {
  text: "Primary Button",
  newTab: false,
});

const handleHover = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.1; // Уменьшенная громкость
  audio.currentTime = 0;
  audio.play().catch(err => console.error('Audio playback error:', err));
};
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="newTab ? '_blank' : '_self'"
    class="secondary-btn"
    @pointerenter="handleHover"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: none;
  height: 60px;
  padding: 0 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.secondary-btn:hover {
  background-color: var(--bg-secondary-hover);
}
</style>