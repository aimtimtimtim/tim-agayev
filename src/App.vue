<script setup>

import Header from './components/ui/Header.vue';
import Hero from './components/ui/Hero.vue';

import { Analytics } from '@vercel/analytics/vue';


</script>

<template>
  <Analytics />
  <Header></Header>
  <Hero></Hero>
</template>

<style scoped></style>
