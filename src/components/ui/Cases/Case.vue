<script setup lang="ts">
import { computed } from 'vue'

interface CaseItem {
  id: string
  title: string
  description: string
  image: string
}

const props = defineProps<{
  caseItem: CaseItem
}>()

const routeLink = computed(() => `/case/${props.caseItem.id}`)
</script>

<template>
  <router-link :to="routeLink" class="case-link">
    <div class="case">
      <div class="case-image-placeholder"></div>
      <div class="case-content">
        <h3>{{ caseItem.title }}</h3>
        <p>{{ caseItem.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.case-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.case {
  display: flex;
  padding: 2rem;
  border-radius: 24px;
  width: 100%;
  height: 700px;
  background-color: var(--bg-secondary);
  gap: 2rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.case-image {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.case-image-placeholder {
  width: 50%;
  height: 100%;
  background-color: var(--bg-tertiary);
  border-radius: 16px;
}

.case-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

h3 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: var(--text-secondary);
}
</style>
