import { ITask } from "./types/Tasks";

const baseUrl = "http://localhost:3001";

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  return await response.json();
};

export const createTask = async (task: ITask): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, { method: "DELETE" });
};

export const updateTask = async (task: ITask): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};
