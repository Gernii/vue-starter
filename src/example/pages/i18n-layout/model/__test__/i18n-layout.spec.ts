import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useI18nLayoutStore } from "../i18n-layout";

vi.mock("@/shared/lib/i18n/runtime", () => ({
	setLanguageTag: vi.fn(),
}));

describe("i18nLayout Store", () => {
	let i18nLayoutStore: ReturnType<typeof useI18nLayoutStore>;

	beforeEach(() => {
		// Set up a fresh Pinia instance
		setActivePinia(createPinia());

		// Initialize the store
		i18nLayoutStore = useI18nLayoutStore();
	});

	it("should have a default locale of 'en'", () => {
		expect(i18nLayoutStore.locale).toBe("en");
	});

	it("should set a new locale", () => {
		i18nLayoutStore.setLocale("en");
		expect(i18nLayoutStore.locale).toBe("en");
		expect(localStorage.locale).toBe("en");
	});
});
