"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useTodoStore from "@/lib/zustand/todo-store";
import { Todo } from "@/app/todos/page";
import TodoCard from "./TodoCard";

const TodoForm = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    todoRef.current?.focus();
  }, []);

  const { setTodo: addTodo, getTodos } = useTodoStore((store) => store);

  const [todo, setTodo] = useState<string | undefined>(undefined);

  const todos = getTodos();

  const submitTodo = () => {
    if (!todo) return null;
    const newTodo: Todo = {
      id: (todos as Array<Todo>).length + 1,
      task: todo,
      isCompleted: false,
      date: new Date(),
    };
    addTodo(newTodo || undefined);
    setTodo("");
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <section className="flex sm:w-[500px] items-center gap-2">
          <Input
            ref={todoRef}
            type="text"
            placeholder="Task"
            className="py-5"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitTodo()}
          />
          <Button
            type="submit"
            variant="outline"
            className="py-5"
            onClick={() => submitTodo()}
          >
            Add ➕
          </Button>
        </section>
        <section>
          {(todos as Todo[]).map((t) => {
            return <TodoCard key={t.id} todo={t} />;
          })}
        </section>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
