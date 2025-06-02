import { useNotebooksStore } from '@/stores/notebooksStore';
import { getNotebooks } from '@/helpers/getNotebooks';

export const useNotebooks = async () => {
  const data = await getNotebooks();
  const notebooksStore = useNotebooksStore();
  notebooksStore.setData(data);
};


