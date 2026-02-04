<script setup>

import Cases from './components/ui/Cases.vue';
import Footer from './components/ui/Footer.vue';
import Header from './components/ui/Header.vue';
import Hero from './components/ui/Hero.vue';

import { Analytics } from '@vercel/analytics/vue';


</script>

<template>
  <Analytics />
  <Header></Header>
  <Hero></Hero>
  <Cases></Cases>
  <Footer></Footer>
</template>

<style scoped></style>
