import { axiosFetcher } from '@/libs/axiosFetcher';
import { type Todo } from '@/models/todo';

export const fetchTodos = async (): Promise<Todo[]> =>
  await axiosFetcher('/todos');
