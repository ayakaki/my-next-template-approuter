import { fetchTodos } from '@/features/api/fetchTodos';
import { type Todo } from '@/models/todo';
import { UserTodo } from './userTodo';

export const UserTodos = async (): Promise<JSX.Element> => {
  const todos: Todo[] = await fetchTodos();

  return (
    <>
      {todos?.map((todo) => {
        return <UserTodo key={todo.id} id={todo.id} />;
      })}
    </>
  );
};
