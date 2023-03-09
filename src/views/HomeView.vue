<script setup>
  import useCounterStore from '@/stores/counter';
  const counterStore = useCounterStore();
</script>

<template>
  <main>
    <h1>{{ counterStore.counter }}</h1>
    <button style="margin-right: 20px;" @click="counterStore.decrement">
      <h1>-</h1>
    </button>
    <button @click="counterStore.increment">
      <h1>+</h1>
    </button>

    <div style="margin: 40px 0px;">
      <hr />
      <p style="margin: 10px 0px;">
        {{ counterStore.checkOddEven }}
      </p>
    </div>

    <div>
      <input v-model="counterStore.counter" type="number" />
    </div>
  </main>
</template>
