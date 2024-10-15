export const useCounterStore = defineStore('filters', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment () {
    count.value++
  }

  watch(name, (newName, oldName) => {
    count.value = 0
  })

  return { count, name, doubleCount, increment }
})
