<script setup lang="ts">

import { useI18n } from '../../composables/useI18n'
import PrimaryBtn from '@/components/atoms/PrimaryBtn.vue';
import SecondaryBtn from '@/components/atoms/SecondaryBtn.vue';
import TGDarkIcon from '@/assets/icons/tg-logo-dark.svg';
import TGLightIcon from '@/assets/icons/tg-logo-light.svg';
import { useThemeStore } from '@/stores/theme';
import { useLinksStore } from '@/stores/links';
import { useLanguageStore } from '@/stores/language';

const themeStore = useThemeStore()
const linksStore = useLinksStore()
const langStore = useLanguageStore()

const i18n = useI18n({
    сontactMe: { ru: 'Написать мне', en: 'Contact me' }
})

const getResumeLink = () => {
    return langStore.lang === 'ru' ? linksStore.links.ruResume : linksStore.links.enResume
}

interface Props {
    isOpen: boolean;
    links: Array<{ id: number; text: string; href: string }>;
}

defineProps<Props>();
defineEmits<{
    close: [];
}>();
</script>

<template>
    <div class="mobile-menu" :class="{ active: isOpen }" @click="$emit('close')">
        <Transition name="menu">
            <div v-if="isOpen" class="mobile-menu__content" @click.stop>
                <nav class="mobile-nav">
                    <a v-for="link in links.filter(l => l.text !== 'CV')" :key="link.id" :href="link.href"
                        target="_blank" rel="noopener noreferrer" class="mobile-link" @click="$emit('close')">
                        {{ link.text }}
                    </a>
                </nav>

                <div class="buttons">
                    <PrimaryBtn :text="i18n.сontactMe" :href="linksStore.links.telegram"
                        :icon="themeStore.isDark ? TGDarkIcon : TGLightIcon" :newTab="true"></PrimaryBtn>
                    <SecondaryBtn text="CV" :href="getResumeLink()" :newTab="true"></SecondaryBtn>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
    display: flex;
    align-items: flex-start;
    z-index: 999;
    transition: background-color 800ms cubic-bezier(0.34, 1.3, 0.64, 1),
                backdrop-filter 800ms cubic-bezier(0.34, 1.3, 0.64, 1);
    pointer-events: none;
}

.mobile-menu.active {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);  /* размытие фона */
    pointer-events: auto;
}

.mobile-menu__content {
    background-color: var(--bg-primary);
    width: 100%;
    padding: 1.5rem;
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0 0 30px 30px;
}

/* Transition классы */
/* Transition только для контента */
.menu-enter-active,
.menu-leave-active {
    transition: transform 1000ms cubic-bezier(0.34, 1.3, 0.64, 1);
}

.menu-enter-from,
.menu-leave-to {
    transform: translateY(-100%);
}

.menu-enter-active .mobile-menu__content,
.menu-leave-active .mobile-menu__content {
    transition: transform 1000ms cubic-bezier(0.34, 1.3, 0.64, 1);
}

.menu-enter-from .mobile-menu__content,
.menu-leave-to .mobile-menu__content {
    transform: translateY(-100%);
}

.close-btn:hover {
    transform: scale(1.1);
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.mobile-link {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 28px;
    padding: 0.5rem 0;
    transition: var(--transition-spring);
    display: block;
}

.mobile-link:hover {
    transform: scale(1.05);
    color: var(--accent);
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>