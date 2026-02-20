<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import NumberFlow from '@number-flow/vue'  // добавь этот импорт

const props = defineProps({
    min: { default: 0 },
    max: { default: 60 },
    modelValue: { default: 25 }
})

const emit = defineEmits(['update:modelValue'])

const slider = ref<HTMLElement | null>(null)

// Риски — количество черточек по кругу (меняй 60 чтобы изменить кол-во)
const ticks = computed(() => Array.from({ length: props.max }, (_, i) => i))


const lastValue = ref(props.modelValue)

const updateValue = (e: MouseEvent | TouchEvent) => {
    if (!slider.value) return

    const rect = slider.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    let deg = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) + 90
    if (deg < 0) deg += 360

    const clamped = Math.min(props.max, Math.max(props.min, Math.round((deg / 360) * props.max)))

    // Звук только когда значение изменилось
    if (clamped !== lastValue.value) {
        playTick()
        lastValue.value = clamped
    }

    emit('update:modelValue', clamped)
}

const onPointerDown = (e: MouseEvent | TouchEvent) => {
    updateValue(e)
    window.addEventListener('mousemove', updateValue)
    window.addEventListener('touchmove', updateValue, { passive: false })
    window.addEventListener('mouseup', onPointerUp)
    window.addEventListener('touchend', onPointerUp)
}

const onPointerUp = () => {
    window.removeEventListener('mousemove', updateValue)
    window.removeEventListener('touchmove', updateValue)
    window.removeEventListener('mouseup', onPointerUp)
    window.removeEventListener('touchend', onPointerUp)
}

// Создаём аудио контекст
const audioCtx = new AudioContext()

const playTick = () => {
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    // Меняй frequency чтобы изменить высоту звука (выше = писк, ниже = бас)
    oscillator.frequency.value = 600
    oscillator.type = 'sine' // 'sine' | 'square' | 'sawtooth' | 'triangle'

    // Меняй время затухания (0.05 = короткий щелчок, 0.2 = длиннее)
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05)

    oscillator.start(audioCtx.currentTime)
    oscillator.stop(audioCtx.currentTime + 0.05)
}

// Чистим листенеры при размонтировании
onUnmounted(onPointerUp)
</script>

<template>
    <div class="circular-picker" ref="slider" @mousedown="onPointerDown" @touchstart.prevent="onPointerDown">
        <svg class="ticks" viewBox="0 0 200 200">
            <!--
        y1 — где начинается черточка (от края круга)
        y2 — где заканчивается черточка
        Уменьшай y1 чтобы черточки были длиннее, увеличивай чтобы короче
      -->
            <line v-for="tick in ticks" :key="tick" x1="100" y1="8" x2="100" y2="20"
                :class="['tick', { active: tick <= modelValue }]"
                :style="{ transform: `rotate(${(tick / max) * 360}deg)`, transformOrigin: '100px 100px' }" />
        </svg>

        <!-- Ручка вращается вокруг центра круга -->
        <div class="handle-wrapper" :style="{ transform: `rotate(${(modelValue / max) * 360}deg)` }">
            <!-- Меняй .handle в CSS чтобы кастомизировать ручку -->
            <div class="handle"></div>
        </div>

        <!-- Центральная карточка с числом -->
        <div class="center-card">
            <NumberFlow :value="modelValue" class="value" />
        </div>
    </div>
</template>

<style scoped>
/* Общий контейнер — меняй width/height чтобы изменить размер всего компонента */
.circular-picker {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

/* SVG с рисками занимает весь контейнер */
.ticks {
    position: absolute;
    width: 100%;
    height: 100%;
}

/* Неактивная риска — меняй stroke чтобы изменить цвет */
.tick {
    stroke: var(--foreground-secondary);
    stroke-width: 2;
    /* Меняй stroke-linecap на 'round' для скруглённых кончиков */
    stroke-linecap: butt;
}

/* Активная риска (до текущего значения) — меняй stroke для цвета */
.tick.active {
    stroke: #D592FF;
}

/* Обёртка ручки — занимает весь круг и вращается вокруг центра */
.handle-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

/* Сама ручка
   top    — расстояние от края (меняй чтобы двигать ближе/дальше)
   width/height — размер ручки
   background   — цвет ручки
   border-radius: 50% — кружок, 0 — квадрат, убери для треугольника */
.handle {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #D592FF;
    border-radius: 50%;
}

/* Белый круг по центру — меняй width/height чтобы изменить размер
   Должен быть больше чем расстояние до рисок чтобы их перекрывать */
.center-card {
    position: relative;
    width: 200px;
    height: 200px;
    background: var(--bg-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    pointer-events: none;
}

/* Число в центре — меняй font-size, color, font-weight */
.value {
    font-size: 82px;
    font-weight: 600;
    color: var(--text-primary);
}
</style>