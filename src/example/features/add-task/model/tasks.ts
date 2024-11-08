import { type Task, useTaskModel } from "@/example/entities/tasks";
import { defineStore } from "pinia";

export const useAddTaskStore = defineStore("add-task", () => {
	const taskStore = useTaskModel();

	const addTask = (task: Task) => {
		taskStore.taskItems.push(task);
	};

	return { taskStore, addTask };
});
