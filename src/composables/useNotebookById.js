import { useNotebooksStore } from '@/stores/notebooksStore';
import { getNotebookById } from '@/helpers/getNotebookById';

export const useNotebookById = async (id) => {
  const store = useNotebooksStore();
  const notebook = await getNotebookById(id);
  store.setNotebook(notebook);
};
