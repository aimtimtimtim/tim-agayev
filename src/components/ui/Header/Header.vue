<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import LangToggle from '../LangToggle.vue';
import NavLink from '../../atoms/NavLink.vue';
import PrimaryBtn from '../../atoms/PrimaryBtn.vue';

import { useI18n } from '../../../composables/useI18n'
import { useLinksStore } from '../../../stores/links'
import { useLanguageStore } from '../../../stores/language'
import ThemeToggle from '../../atoms/ThemeToggle.vue';

const linksStore = useLinksStore()
const langStore = useLanguageStore()

const i18n = useI18n({
  logo: { ru: 'Тим Aгаев', en: 'Tim Agayev' },
  resumeButton: { ru: 'Резюме', en: 'Resume' }
})

const showResume = ref(false)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const handleScroll = () => {

    // Если проскроллили больше 200px — показываем кнопку

    showResume.value = window.scrollY > 310

}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {

    window.removeEventListener('scroll', handleScroll)

})

const getLinkedInUrl = () => {
    return langStore.lang === 'ru' ? linksStore.links.ruLinkedin : linksStore.links.enLinkedin
}

const getResumeLink = () => {
    return langStore.lang === 'ru' ? linksStore.links.ruResume : linksStore.links.enResume
}

const socialLinks = computed(() => [
    { id: 1, text: 'Telegram', href: linksStore.links.telegram },
    { id: 2, text: 'LinkedIn', href: getLinkedInUrl() },
    { id: 3, text: 'Dribbble', href: linksStore.links.dribbble },
    { id: 4, text: 'Mail', href: linksStore.links.mail }
])

</script>

<template>
    <header class="header">
        <div class="header__inner">
            <button class="logo" @click="scrollToTop">
                <img src="/src/assets/icons/logo.svg" alt="Logo">
                <p>{{ i18n.logo }}</p>
            </button>

            <div class="actions">
                <ThemeToggle></ThemeToggle>
                <LangToggle />
            </div>

            <div class="right">
                <nav class="navigation">
                    <NavLink v-for="link in socialLinks" :key="link.id" :href="link.href" :text="link.text" />
                </nav>
                <a v-if="showResume" :href="getResumeLink()" target="_blank" rel="noopener noreferrer" class="resume-link">
                    <PrimaryBtn :text="i18n.resumeButton"></PrimaryBtn>
                </a>
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
    z-index: 1000;

    display: flex;
    align-items: start;
    padding: 1.5rem 1rem;

    background-color: var(--bg-primary);
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
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.2s ease;

    img {
        max-width: 14px;
        margin-right: .3rem;
        transition: filter 0.3s ease;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-primary);
    }

    &:hover {
        opacity: 0.7;
    }
}

[data-theme="dark"] .logo img {
    filter: invert(1);
}

.actions {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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

.navigation:hover .nav-link {
    color: var(--text-secondary);
    opacity: 0.6;
}

.navigation .nav-link:hover {
    color: var(--text-primary);
    opacity: 1;
}

.navigation a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
}

.resume-link {
    text-decoration: none;
    color: inherit;
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