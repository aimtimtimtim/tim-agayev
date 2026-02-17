<script setup lang="ts">
import Case from './Case.vue'
import { useCasesStore } from '../../../stores/cases'

const casesStore = useCasesStore()
</script>

<template>
  <div class="cases">
    <Case v-for="caseItem in casesStore.cases" :key="caseItem.id" :case-item="caseItem" />
  </div>
</template>

<style scoped>
.cases {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
