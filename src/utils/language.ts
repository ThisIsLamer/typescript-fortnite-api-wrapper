import { Language } from "src/endpoints";

export async function language(): Promise<string[]> {
  return Language;
}