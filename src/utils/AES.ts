import fetch from "node-fetch";
import { IHeaders, IDefault } from "src/utils/Interfaces";
import { AES } from "../endpoints";

export async function aes(headers: IHeaders): Promise<IAes> {
  const response = await fetch(AES, headers);
  return response.json();
}

interface IAes {
  status: number,
  data: {
    build: string,
    mainKey: string,
    dynamicKeys: IDefault[],
    updated: string,
  },
}
