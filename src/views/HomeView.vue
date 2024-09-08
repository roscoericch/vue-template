<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter";
  const countStore = useCounterStore();
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
     <header>Home</header>
     <span class="flex gap-1">
      <p v-if="countStore.count > 0">count:</p>
      <p>{{ countStore.count }}</p>
     </span>
     <div class="flex gap-1">
      <button class="bg-white text-black rounded-[6px] p-[0.1rem]" @click="countStore.increment">increment</button>
      <button class="bg-white text-black rounded-[6px] p-[0.1rem]" @click="countStore.decrement">decrement</button>
    </div>
  </main>
</template>
