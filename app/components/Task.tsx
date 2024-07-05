"use client";
import { ITask } from "@/types/Tasks";
import React, { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal } from "./Modal";
import { deleteTask, updateTask } from "@/api";

interface TaskProp {
  task: ITask;
}

export const Task: FC<TaskProp> = ({ task }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>(task.text);
  const router = useRouter();

  const handleEditSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateTask({
      id: task.id,
      text: newTaskValue,
    });
    setModalOpen(false);
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteTask(task.id);
    router.refresh();
  };

  return (
    <tr>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit
          cursor="pointer"
          className="text-blue-500"
          size={20}
          onClick={() => setModalOpen(true)}
        />
        <Modal isOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleEditSubmit}>
            <div>
              <h1 className="text-center mb-10">Edit Task modal</h1>
              <div className="w-full mt-1 border-spacing-0 border-info-content">
                <input
                  type="text"
                  onChange={(e) => setNewTaskValue(e.target.value)}
                  value={newTaskValue}
                  required
                  placeholder="Type here"
                  className="input input-bordered input-primary max-w-xs"
                />
                <button type="submit" className="btn btn-primary ml-4">
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </Modal>
        <FaTrash
          cursor="pointer"
          className="text-red-500"
          size={20}
          onClick={() => handleDelete(task.id)}
        />
      </td>
    </tr>
  );
};
