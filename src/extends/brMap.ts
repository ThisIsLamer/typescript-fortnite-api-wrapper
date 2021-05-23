import { BR_Map } from "src/endpoints";
import { checkLanguage } from "src/utils/checkLanguage";
import { IHeaders } from "src/utils/Interfaces";
import { preRequest } from "src/utils/preRequest";

export async function brMap(language: string, headers: IHeaders): Promise<IBrMap> {
  const url = preRequest(BR_Map, { language: await checkLanguage(language) });
  const response = await fetch(url, headers);
  return response.json();
}

interface IBrMap {
  status: number,
  data: {
    images: {
      [index: string]: string,
    },
    pois: IBrMapPois[],
  },
}

interface IBrMapPois {
  id: string,
  name: string,
  location: {
    x: number,
    y: number,
    z: number,
  },
}