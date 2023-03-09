<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ ageStore.age }}</h4>
    <button @click="ageStore.increment">+</button>
  </div>
</template>

<script setup>
  import useAboutStore from '@/stores/about';
  const ageStore = useAboutStore();
</script>

