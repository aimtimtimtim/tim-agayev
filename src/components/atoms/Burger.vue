<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();
defineEmits<{
  toggle: [];
}>();
</script>

<template>
    <div class="lang-toggle">
        <button class="lang-btn" @click="$emit('toggle')">
            <img 
              v-if="!isOpen"
              src="@/assets/icons/burger.svg" 
              alt="menu"
              class="burger-icon"
            >
            <img 
              v-if="isOpen"
              src="@/assets/icons/close.svg" 
              alt="close"
              class="close-icon"
            >
        </button>
    </div>
</template>

<style scoped>
.lang-toggle {
    width: 32px;
    height: 32px;
    background: var(--bg-secondary);
    border-radius: 999px;
    display: flex;
    padding: 2px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.lang-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lang-btn img {
    width: 20px;
    height: 20px;
    transition: transform 1000ms var(--spring), opacity 1000ms var(--spring);
}

.burger-icon {
    animation: slideDown 1000ms var(--spring);
}

.close-icon {
    animation: slideUp 1000ms var(--spring);
}

@keyframes slideDown {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

[data-theme="dark"] .lang-btn img {
    filter: invert(1);
}
</style>