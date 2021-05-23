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
