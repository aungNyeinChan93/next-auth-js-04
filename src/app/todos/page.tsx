import TodoCard from "@/components/share/TodoCard";
import TodoForm from "@/components/share/TodoForm";
import { isAuth } from "@/utils/helper";
import { redirect } from "next/navigation";
import React from "react";

export type Todo = {
  id?: string | number;
  task: string;
  isCompleted?: boolean;
  date?: Date | null;
};

const TodosPage = async () => {
  // if (!(await isAuth())) {
  //   return redirect("/auth/login");
  // }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-gray-50">
        <div className="flex flex-col gap-6 p-3">
          <h1 className="text-2xl font-bold text-center p-5">Todos Page</h1>
          <section className="flex justify-center">
            <TodoForm />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TodosPage;
