import { setLanguageTag } from "@/shared/lib/i18n/runtime";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Locale } from "./types";

export const useI18nLayoutStore = defineStore("i18n-layout", () => {
	// default locale
	const locale = ref<Locale>(localStorage.locale ?? "en");

	const setLocale = (newLocale: Locale) => {
		locale.value = newLocale;
		localStorage.locale = newLocale;
	};

	watch(locale, (newLocale) => {
		// TODO: Remove this line if we support more locales
		if (newLocale !== "en") {
			return;
		}

		setLanguageTag(() => newLocale);
	});

	return { locale, setLocale };
});
