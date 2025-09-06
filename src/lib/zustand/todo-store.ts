import { Todo } from '@/app/todos/page'
import { create } from 'zustand'


export type TodoStoreType = {
    todos: Todo[];
    getTodos: () => void | Todo[];
    setTodo: (newTodo: Todo | undefined) => void;
    changeStatus: (id: string | number) => void;
    deleteTodo: (id: number | string) => void;
}

const useTodoStore = create<TodoStoreType>((set, get) => ({
    todos: [],
    getTodos: () => get().todos,
    setTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo as Todo] })),
    changeStatus: (id) => set(state => ({
        todos: state.todos.map(todo => todo?.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : (todo))
    })),
    deleteTodo: (id) => set(state => ({
        todos: state.todos?.filter(todo => todo?.id !== id)
    }))
}))

export default useTodoStore;