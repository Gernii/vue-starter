import type { Task } from "@/example/entities/tasks";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModal = defineStore("modal", () => {
	const newTask = reactive<Pick<Task, "title" | "description">>({
		title: "",
		description: "",
	});

	const visible = ref(false);

	const showModal = () => {
		visible.value = true;
	};

	const closeModal = () => {
		visible.value = false;
	};

	return { newTask, visible, showModal, closeModal };
});
