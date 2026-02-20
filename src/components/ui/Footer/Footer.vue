<script setup lang="ts">
import { useI18n } from '../../../composables/useI18n'
import { useLinksStore } from '../../../stores/links'

import TelegramIcon from '@/assets/icons/TelegramLarge.svg'

const linksStore = useLinksStore()

const i18n = useI18n({
    logo: { ru: 'Тим Aгаев', en: 'Tim Agayev' }
})
</script>

<template>
    <footer class="footer">
        <!-- CTA -->
        <div class="footer__content">
            <a :href="linksStore.links.telegram" target="_blank" rel="noopener noreferrer" class="contact-btn">
                <span class="contact-text">
                    Написать
                    <span class="icon-wrapper">
                        <img :src="TelegramIcon" alt="Telegram" />
                    </span>
                    сообщение
                </span>
            </a>
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

    /* Указываем толщину границы */
    border-top: 1px solid;

    /* Создаем градиент: прозрачный -> основной цвет -> прозрачный */
    border-image: linear-gradient(to right,
            transparent,
            var(--bg-secondary) 50%,
            transparent) 1;
}

/* ===== CTA ===== */

.footer__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
}

.contact-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem 3rem;
    max-height: 100px;
    border-radius: 999px;

    background-color: var(--accent);
    color: var(--on-accent);

    text-decoration: none;

    transform: scale(1);

    transition:
        var(--transition-spring),
        background-color 250ms ease;
}

.contact-btn:hover {
    transform: scale(1.08);
    background-color: var(--bg-primary-hover);
}

/* ===== TEXT ===== */

.contact-text {
    display: inline-flex;
    align-items: center;

    font-size: 32px;
    font-weight: 400;
}

/* ===== ICON WRAPPER ===== */
/* фиксируем место, чтобы ничего не прыгало */

/* 2. Обертка иконки теперь сама управляет отступами */
.icon-wrapper {
    width: 12px;
    margin: 0;
    /* В покое отступов нет */
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Чтобы иконка не вылазила раньше времени */
    transition:
        width 300ms ease,
        margin 300ms ease,
        /* Добавляем транзишн для margin */
        opacity 200ms ease;
}

/* ===== ICON ===== */

.icon-wrapper img {
    transform: scale(0);
    opacity: 0;
    transform-origin: center;
    transition:
        transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1),
        opacity 200ms ease;
}

/* hover */

.contact-btn:hover .icon-wrapper img {
    transform: scale(1);
    opacity: 1;

    transition:
        transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1),
        opacity 250ms ease;
}

/* un-hover (важно!) */

/* 3. При ховере добавляем и ширину, и отступы по бокам */
.contact-btn:hover .icon-wrapper {
    width: 64px;
    height: 64px;
    margin: 0 0.75rem;
    /* Тот самый gap, но только при активации */
    opacity: 1;
}

/* ===== Нижняя часть ===== */

.footer__inner {
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