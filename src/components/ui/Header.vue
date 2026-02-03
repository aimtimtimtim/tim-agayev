<script setup lang="ts">
import LangToggle from './LangToggle.vue';


</script>

<template>
    <header class="header">
        <div class="header__inner">
            <p class="logo">Tim Agayev</p>

            <div class="actions">
                <button class="theme-toggle"><img src="/public/icons/sun.svg" alt=""></button>
                <LangToggle />
            </div>

            <nav class="navigation">
                <a href="nav-link">Telegram</a>
                <a href="nav-link">LinkedIn</a>
                <a href="nav-link">Dribbble</a>
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
    background-color: #F5F5F5;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
        height: 20px;
    }
}

.navigation {
    display: flex;
    gap: 1rem;
    min-width: 200px;
}

.navigation a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
}
</style>