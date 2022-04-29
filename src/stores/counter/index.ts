import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return {
      counter: 0,
      name: 'dmoosocool',
    }
  },
})
