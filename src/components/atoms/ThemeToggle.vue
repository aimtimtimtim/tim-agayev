<script setup lang="ts">
import { useThemeStore } from '../../stores/theme'

import sun from '@/assets/icons/sun.svg'
import moon from '@/assets/icons/moon.svg'

const themeStore = useThemeStore()
</script>

<template>
    <button class="theme-toggle" @click="themeStore.toggleTheme()">
        <img v-if="!themeStore.isDark" :src="sun" alt="sun">
        <img v-else :src="moon" alt="moon">
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