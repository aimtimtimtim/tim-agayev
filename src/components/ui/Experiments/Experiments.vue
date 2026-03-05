<script setup lang="ts">

import { useI18n } from '../../../composables/useI18n'

const i18n = useI18n({
    experiments: { ru: 'Мои эксперименты', en: "My experiments" },
    experimentsDescription: {
        ru: 'Экспериментирую с визуалом и прокачиваю UI',
        en: "Experimenting with visuals and leveling up UI"
    },
})

</script>

<template>
    <h2>{{ i18n.experiments }}</h2>
    <p>{{ i18n.experimentsDescription }}</p>
    <img src="/src/assets/experiments/otcstats.webp" alt="">
</template>

<style scoped>
h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 8px;
}

p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 32px;
    color: var(--foreground-secondary);
}

img {
    width: 100%;
    border-radius: 20px;
}
</style>