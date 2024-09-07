<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter.ts";
  const countStore = useCounterStore();
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
     <header>Home</header>
     <span class="">
      <p v-if="countStore.count > 0">count:</p>
      <p>{{ countStore.count }}</p>
     </span>
     <button @click="countStore.increment">increment</button>
     <button @click="countStore.decrement">decrement</button>
  </main>
</template>
