import React from "react";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Todo } from "@/app/todos/page";
import useTodoStore from "@/lib/zustand/todo-store";

interface Props {
  todo?: Todo | null;
}

const TodoCard = ({ todo }: Props) => {
  const { changeStatus, deleteTodo } = useTodoStore((store) => store);
  return (
    <React.Fragment>
      <section className="w-[300px] sm:w-[500px] mx-auto my-3">
        <Card className={todo?.isCompleted ? "bg-green-50" : "bg-red-50"}>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-start items-center gap-4">
                <Input
                  type="checkbox"
                  className="w-6"
                  onChange={() => changeStatus(Number(todo?.id))}
                  checked={todo?.isCompleted ? true : false}
                />
                <span>{todo?.task}</span>
              </div>
            </CardTitle>
            <CardAction>
              <div className="flex justify-around space-x-2 lg:mt-1.5">
                <span>🎗️</span>
                <button
                  type="button"
                  onClick={() => deleteTodo(Number(todo?.id))}
                >
                  <span>❌</span>
                </button>
              </div>
            </CardAction>
          </CardHeader>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default TodoCard;
