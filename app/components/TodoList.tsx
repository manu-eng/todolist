"use client";
import { ITask } from "@/types/Tasks";
import React, { FC } from "react";
import { Task } from "./Task";

interface TodoListTaskProps {
  tasks: ITask[];
}

export const TodoList: FC<TodoListTaskProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
