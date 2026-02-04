<script setup lang="ts">
interface Props {
  text?: string;
  // Добавим проп для ссылки, как ты хотел ранее
  href?: string;
}

withDefaults(defineProps<Props>(), {
  text: "Primary Button"
});
</script>

<template>
  <component 
    :is="href ? 'a' : 'button'" 
    :href="href"
    class="primary-btn"
  >
    {{ text }}
  </component>
</template>

<style scoped>
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* Для ссылок */
  
  background-color: var(--accent);
  color: var(--on-accent);
  border: none;
  height: 50px;
  padding: 0 32px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s ease;

  /* Обязательно добавляем & для вложенности в нативном CSS */
  &:hover {
    background-color: var(--bg-primary-hover);
  }

  &:active {
    transform: scale(0.98); /* Дизайнерский штрих: легкое нажатие */
  }
}
</style>