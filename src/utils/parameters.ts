import { Parameters } from "src/endpoints";
import { IDefault } from "./Interfaces";

export async function parameters(): Promise<IDefault[]> {
  return Parameters;
}
