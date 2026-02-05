<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'

const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'

    // Применяем тему к тегу html
    document.documentElement.setAttribute('data-theme', theme)
    // Сохраняем, чтобы после перезагрузки не слетало
    localStorage.setItem('theme', theme)
}

// При загрузке проверяем, что было выбрано ранее
onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})

</script>

<template>
    <button class="theme-toggle" @click="toggleTheme">
        <img :src="isDark ? moon : sun" alt="theme icon">
    </button>
</template>

<style scoped>
.theme-toggle {
    height: 32px;
    width: 32px;
    background-color: var(--bg-secondary);
    border-radius: 999px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
        height: 20px;
        transition: filter 0.3s ease;
    }
}

[data-theme="dark"] .theme-toggle img {
    filter: invert(1);
}
</style>