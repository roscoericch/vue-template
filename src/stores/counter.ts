import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement () {
    if(count.value < 1){
      count.value = 0
      return
    }
    count.value--
  }
  return { count, doubleCount, increment, decrement }
})
