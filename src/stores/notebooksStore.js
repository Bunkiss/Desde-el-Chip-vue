import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotebooksStore = defineStore('notebooks', () => {
    const data = ref([])
    const setData = (dat) => {
      data.value = dat;
    }
    return { data, setData };
});
