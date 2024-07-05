"use client";
import React, { FormEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Modal } from "./Modal";
import { createTask } from "@/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // Add task logic here
    await createTask({
      id: `${uuidv4()}`, // Generate random id
      text: newTaskValue, // Get task text from input field
    });
    setNewTaskValue("");
    setModalOpen(false); // Close modal after task added
    router.refresh();
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new Task <FaPlus size={18} />
      </button>
      <Modal isOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-center mb-10">Add Task modal</h1>
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
    </div>
  );
};
