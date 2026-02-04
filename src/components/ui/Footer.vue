<script setup lang="ts">
import { content } from '../../content/i18n';
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="logo">
                <img src="/src/assets/icons/logo.svg" alt="Logo">
                <p>{{ content.logo }}</p>
            </div>
            <p class="copyright">© 2026</p>
        </div>
    </footer>
</template>

<style scoped>
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