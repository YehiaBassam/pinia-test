import { defineStore } from "pinia";

const useAboutStore = defineStore('aboutStore',{
  state: () => ({
    age: 20,
  }),
  getters: {
    getAge: (state) => state.age
  },
  actions: {
    increment(){
      this.age++;
    },
  }
});

export default useAboutStore