export let Base = `https://fortnite-api.com/`;

export let AES = `https://fortnite-api.com/v2/aes`;

export let Language = ["ar", "de", "en", "es", "es-419", "fr", "it", "ja", "ko", "pl", "pt-BR", "ru", "tr", "zh-CN", "zh-Hant"];

export let BR_Map = `https://fortnite-api.com/v1/map`;

export let Playlists = `https://fortnite-api.com/v1/playlists`;
export let Playlists_ID = `https://fortnite-api.com/v1/playlists/`;

export let Banners = `https://fortnite-api.com/v1/banners`;
export let Banners_Colors = `https://fortnite-api.com/v1/banners/colors`;

export let BR_Stats = `https://fortnite-api.com/v1/stats/br/v2`;
export let BR_StatsID = `https://fortnite-api.com/v1/stats/br/v2/`;

export let BR_Shop = `https://fortnite-api.com/v2/shop/br`;
export let BR_ShopCombined = `https://fortnite-api.com/v2/shop/br/combined`;

export let Creator_Code = `https://fortnite-api.com/v2/creatorcode`;
export let Creator_CodeSearch = `https://fortnite-api.com/v2/creatorcode/search`;
export let Creator_CodeSearchAll = `https://fortnite-api.com/v2/creatorcode/search/all`;

export let Cosmetics_New = `https://fortnite-api.com/v2/cosmetics/br/new`;
export let Cosmetics_List = `https://fortnite-api.com/v2/cosmetics/br`;
export let Cosmetics_Search = `https://fortnite-api.com/v2/cosmetics/br/search`;
export let Cosmetics_SearchAll = `https://fortnite-api.com/v2/cosmetics/br/search/all`;
export let Cosmetics_SearchByID = `https://fortnite-api.com/v2/cosmetics/br/`;
export let Cosmetics_SearchByIDs = `https://fortnite-api.com/v2/cosmetics/br/search/ids`;

export let News = `https://fortnite-api.com/v2/news`;
export let News_BR = `https://fortnite-api.com/v2/news/br`;
export let News_STW = `https://fortnite-api.com/v2/news/stw`;
export let News_Creative = `https://fortnite-api.com/v2/news/creative`;

export let Parameters = [{
  "Name": "language",
  "Type": "string",
  "Description": "Sets the output language",
  "Default": "en",
  "Required": "no"
}, {
  "Name": "searchLanguage",
  "Type": "string",
  "Description": "Sets the search language",
  "Default": "en",
  "Required": "no"
}, {
  "Name": "matchMethod",
  "Type": "string",
  "Description": "Sets the match method for strings\n (full / contains / starts / ends)",
  "Default": "full",
  "Required": "no"
}, {
  "Name": "id",
  "Type": "string",
  "Description": "Sets the id",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "name",
  "Type": "string",
  "Description": "Sets the name",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "description",
  "Type": "string",
  "Description": "Sets the description",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "type",
  "Type": "string",
  "Description": "Sets the type",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "displayType",
  "Type": "string",
  "Description": "Sets the display type",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "backendType",
  "Type": "string",
  "Description": "Sets the backend type",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "rarity",
  "Type": "string",
  "Description": "Sets the rarity",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "displayRarity",
  "Type": "string",
  "Description": "Sets the display rarity",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "backendRarity",
  "Type": "string",
  "Description": "Sets the backend rarity",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasSeries",
  "Type": "boolean",
  "Description": "Sets whether there is a series",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "series",
  "Type": "string",
  "Description": "Sets the series",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "backendSeries",
  "Type": "string",
  "Description": "Sets the backend series",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasSet",
  "Type": "boolean",
  "Description": "Sets whether there is a set",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "set",
  "Type": "string",
  "Description": "Sets the set",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "setText",
  "Type": "string",
  "Description": "Sets the set text",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "backendSet",
  "Type": "string",
  "Description": "Sets the backend set",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasIntroduction",
  "Type": "boolean",
  "Description": "Sets whether there is an introduction",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "introductionChapter",
  "Type": "string",
  "Description": "Sets the introduction chapter",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "introductionSeason",
  "Type": "string",
  "Description": "Sets the introduction season",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasFeaturedImage",
  "Type": "boolean",
  "Description": "Sets whether there is a featuredImage",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasVariants",
  "Type": "boolean",
  "Description": "Sets whether there are variants",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "hasGameplayTags",
  "Type": "boolean",
  "Description": "Sets whether there are gameplay tags",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "gameplayTag",
  "Type": "string",
  "Description": "Sets the gameplay tag",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "added",
  "Type": "unix timestamp",
  "Description": "Sets the added date",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "addedSince",
  "Type": "unix timestamp",
  "Description": "Sets the date since it was added",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "unseenFor",
  "Type": "integer",
  "Description": "Sets for how long its unseen",
  "Default": "none",
  "Required": "yes"
}, {
  "Name": "lastAppearance",
  "Type": "unix timestamp",
  "Description": "Sets the last appearance date",
  "Default": "none",
  "Required": "yes"
}];