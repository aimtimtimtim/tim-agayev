<script setup lang="ts">
interface Props {
  text?: string;
  // Добавим проп для ссылки, как ты хотел ранее
  href?: string;
  newTab?: boolean; // Новый проп для определения, открывать ли ссылку в новой вкладке
  icon?: string; // Новый проп для иконки
  iconPosition?: 'left' | 'right'; // Новый проп для позиции иконки
}

withDefaults(defineProps<Props>(), {
  text: "Primary Button",
  newTab: false, // По умолчанию не открывать в новой вкладке
  iconPosition: 'left', // По умолчанию иконка слева
});
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" :target="newTab ? '_blank' : '_self'" class="primary-btn">
    <img v-if="icon && iconPosition === 'left'" :src="icon" :alt="text" class="btn-icon">
    {{ text }}
    <img v-if="icon && iconPosition === 'right'" :src="icon" :alt="text" class="btn-icon">
  </component>
</template>

<style scoped>
.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem; /* Добавляем небольшой отступ между иконкой и текстом */
  justify-content: center;
  text-decoration: none;
  /* Для ссылок */

  background-color: var(--accent);
  color: var(--on-accent);
  border: none;
  height: 60px;
  padding: 0 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition:
    var(--transition-spring),
    background-color 250ms ease;

  /* Обязательно добавляем & для вложенности в нативном CSS */
  &:hover {
    transform: scale(1.08);
    background-color: var(--bg-primary-hover);
  }

  &:active {
    transform: scale(0.98);
    /* Дизайнерский штрих: легкое нажатие */
  }
}
</style>
