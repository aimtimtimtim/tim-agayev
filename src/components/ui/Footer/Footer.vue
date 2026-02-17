<script setup lang="ts">
import { useI18n } from '../../../composables/useI18n'
import { useLinksStore } from '../../../stores/links'

const linksStore = useLinksStore()

const i18n = useI18n({
  logo: { ru: 'Тим Aгаев', en: 'Tim Agayev' }
})
</script>

<template>
    <footer class="footer">
        <div class="footer__content">
            <a :href="linksStore.links.telegram" target="_blank" rel="noopener noreferrer" class="contact-link">
                <h2 class="contact-text">Написать мне</h2>
            </a>
        </div>

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
    padding: 4rem 0;
    border-top: 1px solid var(--bg-secondary);
}

.footer__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
}

.contact-link {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
}

.contact-link:hover {
    opacity: 0.7;
}

.contact-text {
    font-size: 56px;
    font-weight: 600;
    margin: 0;
    text-align: center;
    color: var(--text-primary);
}

.footer__inner {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright{
        font-size: 14px;
        font-weight: 400;
        color: var(--text-secondary);
    }
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
        font-weight: 600;
    }
}
</style>