<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LangToggle from './LangToggle.vue';
import NavLink from '../atoms/NavLink.vue';

import { content } from '../../content/i18n';

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

// Данные для ссылок лучше вынести в массив, чтобы шаблон был чище
const socialLinks = [
    { id: 1, text: 'Telegram', href: 'https://t.me/aimtimtimtim' },
    { id: 2, text: 'LinkedIn', href: 'https://linkedin.com/in/tim-agayev/ru/' },
    { id: 3, text: 'Dribbble', href: 'https://dribbble.com/aimtimtimtim' },
    { id: 4, text: 'Mail', href: 'mailto:agayevtim@gmail.com' }
]
</script>

<template>
    <header class="header">
        <div class="header__inner">
            <p class="logo">{{ content.logo }}</p>

            <div class="actions">
                <button class="theme-toggle" @click="toggleTheme">
                    <img :src="isDark ? '/icons/moon.svg' : '/icons/sun.svg'" alt="theme icon">
                </button>
                <LangToggle />
            </div>

            <nav class="navigation">
                <NavLink v-for="link in socialLinks" :key="link.id" :href="link.href" :text="link.text" />
            </nav>
        </div>
    </header>
</template>

<style>
.header {
    height: 60px;
    display: flex;
    align-items: center;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    min-width: 200px;
    font-size: 14px;
}

.actions {
    display: flex;
    gap: 0.5rem;
}

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

.navigation {
    display: flex;
    gap: 1rem;
    min-width: 200px;
}

/* Когда мы наводим на список, МЕНЯЕМ ВСЕ ссылки внутри на серый цвет.
  Это сработает сразу на все NavLink, как только мышь пересечет границу .navigation
*/
.navigation:hover .nav-link {
    color: var(--text-secondary);
    /* Можно добавить легкую прозрачность для пущего эффекта */
    opacity: 0.6;
}

/* Но та ссылка, на которую наведена мышь В ДАННЫЙ МОМЕНТ, 
  перебивает общее правило и остается белой.
*/
.navigation .nav-link:hover {
    color: var(--text-primary);
    opacity: 1;
}

.navigation a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
}
</style>