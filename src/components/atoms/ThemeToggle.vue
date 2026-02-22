<script setup lang="ts">
import { useThemeStore } from '../../stores/theme'
import sun from '@/assets/icons/sun.svg'
import moon from '@/assets/icons/moon.svg'

const themeStore = useThemeStore()
</script>

<template>
    <button class="theme-toggle" @click="themeStore.toggleTheme()">
        <img :src="sun" alt="sun" :class="{ active: !themeStore.isDark }">
        <img :src="moon" alt="moon" :class="{ active: themeStore.isDark }">
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
    position: relative;
    overflow: hidden;
}

.theme-toggle img {
    position: absolute;
    width: 20px;
    height: 20px;
    transition: transform 1200ms var(--spring), opacity 600ms var(--spring);
}

/* Солнце (изначально visible, потом уходит вправо) */
.theme-toggle img:first-child {
    transform: translateX(0);
    opacity: 1;
}

.theme-toggle img:first-child:not(.active) {
    transform: translateX(10px);
    opacity: 0;
}

/* Луна (изначально hidden слева, потом появляется) */
.theme-toggle img:last-child {
    transform: translateX(-10px);
    opacity: 0;
}

.theme-toggle img:last-child.active {
    transform: translateX(0);
    opacity: 1;
}

[data-theme="dark"] .theme-toggle img {
    filter: invert(1);
}
</style>