import type { Locale } from "@/app/i18n.config";
import en from "../dictionaries/en.json";
import tr from "../dictionaries/tr.json";

const dictionaries = {
    en: en,
    tr: tr,
};

export const getDictionary = async (locale: Locale) => {
    const lang = (locale === "tr" ? "tr" : "en") as keyof typeof dictionaries;
    return dictionaries[lang];
};
