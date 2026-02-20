<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const caseId = route.params.id as string


</script>

<template>
  <div v-if="1" class="case-page">
    <router-link to="/" class="back-link">← Back</router-link>

  </div>
  <div v-else class="case-not-found">
    <h2>Case not found</h2>
    <router-link to="/">← Back to home</router-link>
  </div>
</template>

<style scoped>
.case-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 120px;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 0.7;
}

.case-header {
  margin-bottom: 4rem;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.description {
  font-size: 20px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* STAR Sections */
.case-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
}

.case-section:nth-child(even) {
  grid-template-columns: 1fr 1fr;
}

.case-section:nth-child(even) .section-image-placeholder {
  order: -1;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-text h2 {
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
}

.section-text p {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-primary);
  margin: 0;
}

.section-image-placeholder {
  width: 100%;
  height: 400px;
  background-color: var(--bg-secondary);
  border-radius: 24px;
}

.case-not-found {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 120px;
  text-align: center;
}

.case-not-found h2 {
  font-size: 32px;
  margin-bottom: 2rem;
}

.case-not-found a {
  color: var(--text-primary);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.case-not-found a:hover {
  opacity: 0.7;
}
</style>
