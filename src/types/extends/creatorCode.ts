import { IError } from "..";

// ########## CreatorCode ########## //
export interface ICreatorCode extends IError {
  status: number,
  data: ICreatorCodeData,
}

export interface ICreatorCodeAll extends IError {
  status: number,
  data: ICreatorCodeAll[],
}

// ############# Data ############## //
interface ICreatorCodeData {
  code?: string,
  account?: {
    id?: string,
    name?: string,
  },
  status?: string,
  verified?: boolean,
}