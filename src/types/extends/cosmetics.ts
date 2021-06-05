import { IError } from "..";

// ######  Cosmetics Params ####### //
export interface ICosmeticsSearchParams {
  matchMethod?: "full" | "contains" | "starts" | "ends",
  id?: string,
  name?: string,
  language?: string,
}

// ########## Cosmetics ########## //
export interface ICosmeticsNew extends IError {
  status: number,
  data: {
    build?: string,
    previousBuild?: string,
    hash?: string,
    date?: string,
    lastAddition?: string,
    items?: ICosmeticsItems[],
  }
}

export interface ICosmeticsList extends IError {
  status: number,
  data: ICosmeticsItems[],
}

export interface ICosmeticsSearch extends IError {
  status: number,
  data: ICosmeticsItems,
}

export interface ICosmeticsSearchAll extends IError {
  status: number,
  data: ICosmeticsItems[],
}

// ############ Data ############ //
interface ICosmeticsItems {
  id?: string,
  name?: string,
  description?: string,
  type?: {
    value?: string,
    displayValue?: string,
    backendValue?: string,
  },
  rarity?: {
    value?: string,
    displayValue?: string,
    backendValue?: string,
  },
  series?: {
    value?: string,
    image?: string,
    backendValue?: string,
  },
  set?: {
    value?: string,
    text?: string,
    backendValue?: string,
  },
  introduction?: {
    chapter?: string,
    season?: string,
    text?: string,
    backendValue?: number,
  },
  images?: {
    smallIcon?: string,
    icon?: string,
    featured?: string,
    other?: string,
  },
  variants?: ICosmeticsItemsVariants[],
  gameplayTags?: string[],
  metaTags?: string[],
  showcaseVideo?: string,
  dynamicPakId?: string,
  itemPreviewHeroPath?: string,
  displayAssetPath?: string,
  definitionPath?: string,
  path?: string,
  added?: string,
  shopHistory?: string[],
}

interface ICosmeticsItemsVariants {
  channel?: string,
  type?: string,
  options?: ICosmeticsItemsVariantsOptions[],
}

interface ICosmeticsItemsVariantsOptions {
  tag?: string,
  name?: string,
  image?: string,
}