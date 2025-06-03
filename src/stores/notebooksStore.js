import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotebooksStore = defineStore('notebooks', () => {

  //GET
  const data = ref([])
  const setData = (dat) => {
    data.value = dat;
  }

  //GET ID
  const notebook = ref(null);
  const setNotebook = (data) => {
    notebook.value = data;
  };

  return { data, setData, notebook, setNotebook };
});

// Crea un store llamado notebooks usando Pinia.
// Guarda un estado global data (que será el array de notebooks).
// Expone una función setData(dat) para modificar ese estado.
// defineStore: función de Pinia para crear un almacén de datos.
// ref([]): hace reactivo el array de notebooks.

