<script setup lang="ts">
import { ref, computed } from 'vue'

const lang = ref<'ru' | 'en'>('ru')

// Вычисляем позицию с учетом отступа в 2px
const sliderLeft = computed(() => (lang.value === 'ru' ? '2px' : 'calc(50% - 2px)'))
</script>

<template>
  <div class="lang-toggle">
    <div class="slider" :style="{ left: sliderLeft }"></div>

    <button
      class="lang-btn"
      :class="{ active: lang === 'ru' }"
      @click="lang = 'ru'" 
    >
      RU
    </button>
    <button
      class="lang-btn"
      :class="{ active: lang === 'en' }"
      @click="lang = 'en'"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.lang-toggle {
  position: relative;
  width: 104px;
  height: 32px;
  background: #f5f5f5;
  border-radius: 999px;
  display: flex;
  padding: 2px; /* Добавим внутренний отступ для эстетики */
  box-sizing: border-box;
}

.lang-btn {
  flex: 1;
  z-index: 2;
  border: none;
  background: transparent;
  color: #888; /* Сделаем неактивный текст чуть приглушеннее */
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.lang-btn.active {
  color: #000;
}

.slider {
  position: absolute;
  top: 2px;
  width: calc(50%); /* Корректный расчет ширины с учетом padding */
  height: 28px;
  background: #ffffff;
  border-radius: 999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Более «дизайнерская» кривая */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>