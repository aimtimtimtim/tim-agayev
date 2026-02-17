import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLinksStore = defineStore('links', () => {
    // Social media links
    const links = ref({
        ruResume: 'https://hirehi.ru/resume/v5zW7xuV5o',
        enResume: 'https://hirehi.ru/resume/RqGZJAEBGe',

        telegram: 'https://t.me/aimtimtimtim',

        enLinkedin: 'https://linkedin.com/in/tim-agayev/en/',
        ruLinkedin: 'https://linkedin.com/in/tim-agayev/ru/',

        mail: 'mailto:agayevtim@gmail.com',

        dribbble: 'https://dribbble.com/aimtimtimtim'
    })

    // Get all socials
    const getSocials = () => links.value


    return {
        links,
        getSocials,
    }
})
