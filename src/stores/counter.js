import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ 
    counter: 0,
  }),
  getters: {
    checkOddEven: (state) => {
      if (state.counter < 1){
        return '< 1'
      } else {
        return state.counter % 2 == 0 ? 'even' : 'odd';
      }  
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
})

export default useCounterStore;
