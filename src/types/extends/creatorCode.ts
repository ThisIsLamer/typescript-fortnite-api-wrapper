// ########## CreatorCode ########## //
export interface ICreatorCode {
  status: number,
  data: ICreatorCodeData,
}

export interface ICreatorCodeAll {
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