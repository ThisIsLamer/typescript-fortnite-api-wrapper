// ########## News ########## //
export interface INews {
  status: number,
  data: {
    br?: INewsMods,
    stw?: INewsMods,
    creative?: INewsMods,
  }
}

export interface INewsMod {
  status: number,
  data: INewsMods,
}

// ########## Data ########## //
interface INewsMods {
  hash?: string,
  date?: string,
  image?: string,
  motds?: INewsModsMotds[],
  messages?: INewsModsMessages[],
}

interface INewsModsMotds {
  id?: string,
  title?: string,
  tabTitle?: string,
  body?: string,
  image?: string,
  tileImage?: string,
  sortingPriority?: number,
  hidden?: boolean,
  videoString?: string,
  videoId?: string,
}

interface INewsModsMessages {
  title?: string,
  body?: string,
  image?: string,
  adspace?: string,
}