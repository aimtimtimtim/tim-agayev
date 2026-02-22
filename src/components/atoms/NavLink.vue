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
  <a :href="href" class="nav-link" :target="isExternal ? '_blank' : '_self'"
    :rel="isExternal ? 'noopener noreferrer' : undefined">
    {{ text }}
  </a>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-size: 14px;
  font-family: var(--font-main);
  font-weight: 400;
  transition: var(--transition-spring);
  cursor: pointer;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-primary);
  transform: scale(1.08);
}

.nav-link:active {
  transform: scale(0.98);
}
</style>