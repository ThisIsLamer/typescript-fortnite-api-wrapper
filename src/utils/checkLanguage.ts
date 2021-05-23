import { Language } from "src/endpoints";

export async function checkLanguage(params: string = "en"): Promise<string> {
  let languageExist = Language.indexOf(params) > -1;
  if (languageExist) {
    return params;
  } else if (!languageExist) {
    console.error("[FortniteAPI.ts]: Unsupported language selected, default search language: 'en'");
    return "en";
  };
}