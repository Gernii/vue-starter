import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import TaskList from "../task-list.vue";

describe("TaskList", () => {
	beforeEach(() => {
		// Set up a fresh Pinia instance
		setActivePinia(createPinia());
	});
	it("renders the task list properly", () => {
		const wrapper = mount(TaskList, {
			// Provide necessary props or slots if needed
		});

		// Add assertions based on the expected behavior of TaskList
		// Example:
		expect(wrapper.html()).toMatchSnapshot();
	});

	// Add more test cases as needed
});
