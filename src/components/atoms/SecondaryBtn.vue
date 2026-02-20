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
  <component :is="href ? 'a' : 'button'" :href="href" class="secondary-btn">
    {{ text }}
  </component>
</template>

<style scoped>
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* Для ссылок */

  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: none;
  height: 50px;
  padding: 0 32px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition:
    var(--transition-spring),
    background-color 250ms ease;

  /* Обязательно добавляем & для вложенности в нативном CSS */
  &:hover {
    transform: scale(1.08);
    background-color: var(--bg-secondary-hover);
  }

  &:active {
    transform: scale(0.98);
    /* Дизайнерский штрих: легкое нажатие */
  }
}
</style>