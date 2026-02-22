<script setup lang="ts">
import PrimaryBtn from '../atoms/PrimaryBtn.vue';
import SecondaryBtn from '../atoms/SecondaryBtn.vue';

import { useI18n } from '../../composables/useI18n'
import { useLanguageStore } from '../../stores/language'
import { useLinksStore } from '../../stores/links'
import TGDarkIcon from '@/assets/icons/tg-logo-dark.svg';
import TGLightIcon from '@/assets/icons/tg-logo-light.svg';
import { useThemeStore } from '@/stores/theme';

const langStore = useLanguageStore()
const linksStore = useLinksStore()
const themeStore = useThemeStore()

const i18n = useI18n({
    hello: { ru: 'Привет, я Тим', en: "Hi, I'm Tim" },
    jobTitle: { ru: 'Product designer', en: 'Product designer' },
    description: { ru: 'Создаю пользовательский опыт и дизайн, которым приятно пользоваться. Живу в Туркменистане', en: 'Product designer who creates user experience and design that is a pleasure to use. Based in Turkmenistan' },
    сontactMe: { ru: 'Написать мне', en: 'Contact me' }
})

const getResumeLink = () => {
    return langStore.lang === 'ru' ? linksStore.links.ruResume : linksStore.links.enResume
}
</script>

<template>
    <div class="container">
        <div class="top">
            <div class="avatar">
                <img src="/pic.png" alt="Tim Agayev">
                <img src="/pic2.png" alt="Tim Agayev">
            </div>
            <div class="name">
                <h1>{{ i18n.hello }}</h1>
                <h1>{{ i18n.jobTitle }}</h1>
            </div>
            <p>{{ i18n.description }}</p>
        </div>
        <div class="buttons">
            <PrimaryBtn :text="i18n.сontactMe" :href="linksStore.links.telegram" :icon="themeStore.isDark ? TGDarkIcon : TGLightIcon" :newTab="true"></PrimaryBtn>
            <SecondaryBtn text="CV" :href="getResumeLink()" :newTab="true"></SecondaryBtn>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 72px;
    font-weight: 500;
}

p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    text-align: center;
    color: var(--foreground-secondary);
    max-width: 560px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 120px;
    padding: 50px 0;
}

.name {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0;
}

.name>* {
    margin: -2px 0;
    /* отрицательный margin для сближения */
}

.avatar {
    position: relative;
    width: 120px;
    height: 120px;
    cursor: pointer;
}

.avatar img {
    position: absolute;
    width: 120px;
    transition:
        scale 1200ms var(--spring),
        opacity 300ms var(--spring);
}

.avatar img:first-child {
    opacity: 1;
    scale: 1;
}

.avatar img:last-child {
    opacity: 0;
    scale: 0;
}

.avatar:hover img:first-child {
    opacity: 0;
    scale: 0;
}

.avatar:hover img:last-child {
    opacity: 1;
    scale: 1;
}

.top {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.buttons {
    display: flex;
    gap: 0.5rem;
}

a {
    text-decoration: none;
    color: inherit;
    display: flex;
}
</style>