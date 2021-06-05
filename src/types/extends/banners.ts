import { IError } from "..";

// ########## Banners ########## //
export interface IBanners extends IError {
  status: number,
  data: IBannersData[],
}

// ###### Banners Colors ###### //
export interface IBannersColors {
  status: number,
  data: IBannersColorsData[]
}

// ########### Data ########### //
interface IBannersData {
  id?: string,
  devName?: string,
  name?: string,
  description?: string,
  category?: string,
  fullUsageRights?: boolean,
  images?: {
    smallIcon?: string,
    icon?: string,
  },
}

interface IBannersColorsData {
  id?: string,
  color?: string,
  category?: string,
  subCategoryGroup?: number,
}