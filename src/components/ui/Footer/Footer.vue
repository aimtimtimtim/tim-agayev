<script setup lang="ts">
import { useI18n } from '../../../composables/useI18n'
import { useLinksStore } from '../../../stores/links'
import PrimaryBtn from '@/components/atoms/PrimaryBtn.vue';
import SecondaryBtn from '@/components/atoms/SecondaryBtn.vue';
import TGDarkIcon from '@/assets/icons/tg-logo-dark.svg';
import TGLightIcon from '@/assets/icons/tg-logo-light.svg';
import { useLanguageStore } from '@/stores/language';
import { useThemeStore } from '@/stores/theme';


const linksStore = useLinksStore()
const langStore = useLanguageStore()
const themeStore = useThemeStore()

const i18n = useI18n({
    logo: { ru: 'Тим Aгаев', en: 'Tim Agayev' },
    contactMe: { ru: 'Написать мне', en: 'Contact me' },
    footerName: { ru: 'Тим Агаев', en: 'Tim Agayev' },
})

const getResumeLink = () => {
    return langStore.lang === 'ru' ? linksStore.links.ruResume : linksStore.links.enResume
}
</script>

<template>
    <footer class="footer">
        <!-- CTA -->
        <div class="footer__content">
            <h3>Давайте поработаем вместе</h3>
            <div class="buttons">
                <PrimaryBtn :text="i18n.contactMe" :href="linksStore.links.telegram" :icon="themeStore.isDark ? TGDarkIcon : TGLightIcon" :newTab="true">
                </PrimaryBtn>
                <SecondaryBtn text="CV" :href="getResumeLink()" :newTab="true"></SecondaryBtn>
            </div>
        </div>

        <!-- Нижняя часть -->
        <div class="footer__inner">
            <div class="logo">
                <img src="/src/assets/icons/logo.svg" alt="Logo">
                <p>{{ i18n.logo }}</p>
            </div>

            <p class="copyright">© 2026</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: 120px;
    position: relative;
    /* Указываем толщину границы */
    border-top: 1px solid;

    /* Создаем градиент: прозрачный -> основной цвет -> прозрачный */
    border-image: linear-gradient(to right,
            transparent,
            var(--bg-secondary) 50%,
            transparent) 1;
}

.footer__content {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    h3 {
        font-size: 56px;
        font-weight: 400;
    }
}

.buttons {
    display: flex;
    gap: 0.5rem;
}

/* ===== Нижняя часть ===== */

.footer__inner {
    position: relative;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-secondary);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    max-width: 14px;
    margin-right: 0.3rem;
    transition: filter 0.3s ease;
}

.logo p {
    min-width: 200px;
    font-size: 14px;
    font-weight: 600;
}
</style>