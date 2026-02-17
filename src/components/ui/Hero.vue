<script setup lang="ts">
import PrimaryBtn from '../atoms/PrimaryBtn.vue';
import SecondaryBtn from '../atoms/SecondaryBtn.vue';

import { useLanguageStore } from '../../stores/language'
import { useLinksStore } from '../../stores/links'

const langStore = useLanguageStore()
const linksStore = useLinksStore()

const getResumeLink = () => {
  return langStore.lang === 'ru' ? linksStore.links.ruResume : linksStore.links.enResume
}
</script>

<template>
    <div class="container">
        <div class="top">
            <div class="name">
                <h1>{{ langStore.content.hero.hello }}</h1>
                <img src="/pic.png" alt="Tim Agayev">
                <h1>{{ langStore.content.hero.name }}</h1>
            </div>
            <p>{{ langStore.content.hero.description }}</p>
        </div>
        <div class="buttons">
            <a :href="getResumeLink()" target="_blank" rel="noopener noreferrer">
                <PrimaryBtn :text="langStore.content.hero.resume"></PrimaryBtn>
            </a>
            <a :href="linksStore.links.telegram" target="_blank" rel="noopener noreferrer">
                <SecondaryBtn text="Telegram"></SecondaryBtn>
            </a>
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

a {
  text-decoration: none;
  color: inherit;
  display: flex;
}

</style>