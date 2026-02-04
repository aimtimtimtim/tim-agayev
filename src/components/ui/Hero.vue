<script setup lang="ts">
import PrimaryBtn from '../atoms/PrimaryBtn.vue';
import SecondaryBtn from '../atoms/SecondaryBtn.vue';

import { content } from '../../content/i18n'

</script>

<template>
    <div class="container">
        <div class="top">
            <div class="name">
                <h1>{{ content.hero.hello }}</h1>
                <img src="/pic.png" alt="Tim Agayev">
                <h1>{{ content.hero.name }}</h1>
            </div>
            <p>{{ content.hero.description }}</p>
        </div>
        <div class="buttons">
            <PrimaryBtn :text="content.hero.resume"></PrimaryBtn>
            <SecondaryBtn text="Telegram"></SecondaryBtn>
        </div>
    </div>
</template>

<style>
h1 {
    font-size: 56px;
    font-weight: 500;
}

p {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
}

.container {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 120px;
}

.name {
    display: flex;
    align-items: center;
    gap: 1rem;
}

img {
    width: 60px;
}

.top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

</style>