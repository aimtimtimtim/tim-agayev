<script setup lang="ts">
interface Props {
  href: string;
  text: string;
  isExternal?: boolean;
}

withDefaults(defineProps<Props>(), {
  isExternal: true
});
</script>

<template>
  <a 
    :href="href" 
    class="nav-link" 
    :target="isExternal ? '_blank' : '_self'"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    {{ text }}
  </a>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  /* Изначально все ссылки яркие (белые в темной теме) */
  color: var(--text-primary); 
  font-size: 14px;
  font-family: var(--font-main);
  font-weight: 400;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
}

/* При наведении на саму себя она остается яркой и на 100% непрозрачной */
.nav-link:hover {
  color: var(--text-primary);
  opacity: 1;
}
</style>