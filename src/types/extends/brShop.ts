import { IError } from "..";

// ########## BRShop ########## //
export interface IBRShop extends IError {
  status: number,
  data: {
    hash?: string,
    date?: string,
    vbuckIcon?: string,
    featured?: IBRShopPayload,
    daily?: IBRShopPayload,
    specialFeatured?: IBRShopPayload,
    specialDaily?: IBRShopPayload,
    votes?: IBRShopPayload,
    voteWinners?: IBRShopPayload,
  },
}

// ########### Data ########### //
interface IBRShopPayload {
  name?: string,
  entries?: IBRShopPayloadEntries[],
}

interface IBRShopPayloadEntries {
  regularPrice?: number,
  finalPrice?: number,
  bundle?: {
    name?: string,
    info?: string,
    image?: string,
  },
  banner?: {
    value?: string,
    intensity?: string,
    backendValue?: string,
  },
  giftable?: boolean,
  refundable?: boolean,
  sortPriority?: number,
  categories?: string[],
  sectionId?: string,
  section?: {
    id?: string,
    name?: string,
    index?: number,
    landingPriority?: number,
    sortOffersByOwnership?: boolean,
    showIneligibleOffers?: boolean,
    showIneligibleOffersIfGiftable?: boolean,
    showTimer?: boolean,
    enableToastNotification?: boolean,
    hidden?: boolean,
  },
  devName?: string,
  offerId?: string,
  displayAssetPath?: string,
  tileSize?: string,
  newDisplayAssetPath?: string,
  newDisplayAsset?: {
    id?: string,
    materialInstances?: IBRShopPayloadEntriesMaterialInstances[],
  },
  items?: IBRShopPayloadEntriesItems[],
}

interface IBRShopPayloadEntriesMaterialInstances {
  id?: string,
  images?: {
    OfferImage?: string,
  },
  colors?: {
    Background_Color_A?: string,
    Background_Color_B?: string,
    FallOff_Color?: string,
    ColorCircuitBackground?: string,
    ColorCircuitBackground2?: string,
    ColorCircuitDots?: string,
    ColorCircuitHighlights?: string,
    ColorCircuitLines?: string,
    ColorCircuitLines2?: string,
  },
  scalings?: {
    "Global UV Background"?: number,
    "lobal UV Foreground"?: number,
    "Localized UV"?: number,
    "Time Factor"?: number,
    "Ember Intensity"?: number,
    "Ember-Scale"?: number,
    "Falloff-Edge"?: number,
    "Falloff-Subtract"?: number,
    "Smoke-Distortion-Intensity"?: number,
    "Smoke-Intensity"?: number,
    "Smoke-Offset"?: number,
    "Background-Balance"?: number,
    "Vignette Density"?: number,
    "Vignette Radius"?: number,
    "Vignette-Strength"?: number,
    Vignette_G_Position_Y?: number,
    Vignette_G_Power?: number,
    Vignette_G_Radius?: number,
    Vignette_G_Scale_X?: number,
    Vignette_R_Power?: number,
    Vignette_R_Radius?: number,
    Vignette_R_Scale_Y?: number,
    Gradient_Position_X?: number,
    Gradient_Position_Y?: number,
    Spotlight_Position_X?: number,
    SizeCircuitPattern?: number,
    FallOffColor_Fill_Percent?: number,
    OffsetImage_X?: number,
    OffsetImage_Y?: number,
    ZoomImage_Percent?: number,
    RefractionDepthBias?: number,
    Gradient_Hardness?: number,
    Gradient_Size?: number,
    Spotlight_Hardness?: number,
    Spotlight_Intensity?: number,
    Spotlight_Position_Y?: number,
    Spotlight_Size?: number,
    FallOffColor_DecayRate?: number,
    FallOffColor_Postion?: number,
    OffsetImage_Y_Compensation?: number,
    Skew?: number,
  }
}

interface IBRShopPayloadEntriesItems {
  id?: string,
  name?: string,
  description?: string,
  type?: IBRShopPayloadEntriesItemsPayload,
  rarity?: IBRShopPayloadEntriesItemsPayload,
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
  variants?: IBRShopPayloadEntriesItemsVariants[],
  gameplayTags?: string[],
  metaTags?: string[],
  showcaseVideo?: string,
  dynamicPakId?: string,
  displayAssetPath?: string,
  definitionPath?: string,
  path?: string,
  added?: string,
  shopHistory?: string[],
}

interface IBRShopPayloadEntriesItemsPayload {
  value?: string,
  displayValue?: string,
  backendValue?: string,
}

interface IBRShopPayloadEntriesItemsVariants {
  channel?: string,
  type?: string,
  options?: IBRShopPayloadEntriesItemsVariantsOptions[],
}

interface IBRShopPayloadEntriesItemsVariantsOptions {
  tag?: string,
  name?: string,
  image?: string,
}