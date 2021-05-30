export interface IFortniteAPI {
  apikey: string,
  language?: string;
  debug?: boolean;
  version?: number;
}

// ####################################### //

export interface IError {
  status: number,
  error: string,
}

export interface IDefault {
  [ibdex: string]: string,
}

export interface IHeaders {
  headers: {
    "x-api-key": string,
  },
}

// ####################################### //

export interface IAes {
  status: number,
  data: {
    build: string,
    mainKey: string,
    dynamicKeys: IDefault[],
    updated: string,
  },
}