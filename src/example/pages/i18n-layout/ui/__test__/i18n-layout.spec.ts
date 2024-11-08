import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import I18nLayout from "../i18n-layout.vue";

describe("I18nLayout", () => {
	it("renders the default slot content", () => {
		const wrapper = mount(I18nLayout, {
			slots: {
				default: "<p>Slot Content</p>",
			},
		});

		// Check if the default slot content is rendered
		expect(wrapper.html()).toContain("<p>Slot Content</p>");
	});

	it("renders the static text 'hello'", () => {
		const wrapper = mount(I18nLayout);

		// Check if the static text 'hello' is rendered
		expect(wrapper.text()).toContain("hello");
	});
});
