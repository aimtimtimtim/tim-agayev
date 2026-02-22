<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguageStore } from '../../stores/language'

const langStore = useLanguageStore()
const isAnimating = ref(false)

const sliderLeft = computed(() => (langStore.lang === 'ru' ? '2px' : 'calc(50% - 2px)'))

const handleLangChange = (lang: string) => {
    isAnimating.value = true
    langStore.setLang(lang)
    setTimeout(() => {
        isAnimating.value = false
    }, 600)
}
</script>

<template>
    <div class="lang-toggle">
        <div class="slider" :style="{ left: sliderLeft }" :class="{ animating: isAnimating }"></div>

        <button class="lang-btn" :class="{ active: langStore.lang === 'ru' }" @click="handleLangChange('ru')">
            RU
        </button>
        <button class="lang-btn" :class="{ active: langStore.lang === 'en' }" @click="handleLangChange('en')">
            EN
        </button>
    </div>
</template>

<style scoped>
.lang-toggle {
    position: relative;
    width: 104px;
    height: 32px;
    background: var(--bg-secondary);
    border-radius: 999px;
    display: flex;
    padding: 2px;
    box-sizing: border-box;
}

.lang-btn {
    flex: 1;
    z-index: 2;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 12px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.lang-btn.active {
    color: var(--text-primary);
}

.slider {
    position: absolute;
    top: 2px;
    width: calc(50%);
    height: 28px;
    background: var(--bg-tertiary);
    border-radius: 999px;
    transition: left 600ms var(--spring);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.slider.animating {
    animation: sliderCompress 600ms var(--spring);
}

@keyframes sliderCompress {
    0% {
        width: calc(50%);
    }
    50% {
        width: calc(50% - 12px);
        /* сжимается в середине движения */
    }
    100% {
        width: calc(50%);
        /* восстанавливается */
    }
}
</style>