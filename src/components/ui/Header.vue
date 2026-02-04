<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LangToggle from './LangToggle.vue';
import NavLink from '../atoms/NavLink.vue';

import { content } from '../../content/i18n';

const isDark = ref(false)

const showResume = ref(false)

const handleScroll = () => {
    // Если проскроллили больше 200px — показываем кнопку
    showResume.value = window.scrollY > 310
}

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
    window.addEventListener('scroll', handleScroll)
})

// Данные для ссылок лучше вынести в массив, чтобы шаблон был чище
const socialLinks = [
    { id: 1, text: 'Telegram', href: 'https://t.me/aimtimtimtim' },
    { id: 2, text: 'LinkedIn', href: 'https://linkedin.com/in/tim-agayev/ru/' },
    { id: 3, text: 'Dribbble', href: 'https://dribbble.com/aimtimtimtim' },
    { id: 4, text: 'Mail', href: 'mailto:agayevtim@gmail.com' }
]

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
    <header class="header">
        <div class="header__inner">
            <div class="logo">
                <img src="/src/assets/icons/logo.svg" alt="Logo">
                <p>{{ content.logo }}</p>
            </div>

            <div class="actions">
                <button class="theme-toggle" @click="toggleTheme">
                    <img :src="isDark ? '/src/assets/icons/moon.svg' : '/src/assets/icons/sun.svg'" alt="theme icon">
                </button>
                <LangToggle />
            </div>

            <div class="right">
                <nav class="navigation">
                    <NavLink v-for="link in socialLinks" :key="link.id" :href="link.href" :text="link.text" />
                </nav>

                <button v-if="showResume" class="resume-button">
                    {{ content.hero.resume }}
                </button>

            </div>
        </div>
    </header>
</template>

<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* Увеличил чуть высоту, чтобы фейд был заметнее */
    z-index: 1000;

    display: flex;
    align-items: start;
    padding: 1rem;

    background-color: var(--bg-primary);

    /** **/

    /* 1. Делаем фон градиентом от основного цвета к прозрачному */
    /* background: linear-gradient(to bottom,
            var(--bg-primary) 0%,
            var(--bg-primary) 40%,
            rgba(0, 0, 0, 0) 100%); */

    /* 2. Блюрим то, что находится ПОД хедером */
    /* backdrop-filter: blur(8px); */
    /* -webkit-backdrop-filter: blur(8px); */

    /* 3. Маска, которая плавно "отрезает" сам хедер снизу, 
       создавая эффект таяния контента */
    /* mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%); */
    /* -webkit-mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%); */

    /* Убираем любые резкие границы */
    /* border: none; */
}


.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
}

.logo {

    display: flex;

    img {
        max-width: 14px;
        margin-right: .3rem;
        transition: filter 0.3s ease;
        /* Плавный переход при смене темы */
    }

    p {
        min-width: 200px;
        font-size: 14px;
    }
}

/* Если в темной теме логотип должен стать белым */
[data-theme="dark"] .logo img {
    filter: invert(1);
}

.actions {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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


.right {
    display: flex;
    align-items: center;
    height: 32px;
    gap: 1rem;
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

.resume-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent);
    color: var(--on-accent);
    border: none;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.2s ease;
    white-space: nowrap;
    /* Чтобы текст не обрывался */
}

.resume-button:hover {
    background-color: var(--bg-primary-hover);
}

.resume-button:active {
    transform: scale(0.98);
}
</style>