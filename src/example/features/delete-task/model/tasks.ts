import { useTaskModel } from "@/example/entities/tasks";
import { defineStore } from "pinia";

export const useDeleteTaskStore = defineStore("deleteTask", () => {
	const taskStore = useTaskModel();

	const deleteTask = (id: string) => {
		taskStore.taskItems = taskStore.taskItems.filter((task) => task.id !== id);
	};

	return { deleteTask, taskStore };
});
