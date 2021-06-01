import FortniteAPI from "../build/";

const fortnite = new FortniteAPI({
  apikey: "70993c518ce03d824996b5b7e1ede0f71f0f9e0f",
  language: "ru",
})

// BrMap
console.log(fortnite.BrMap());

// // Playlists
// console.log(fortnite.Playlists());

// // PlaylistsID
// console.log(fortnite.PlaylistsId("Playlist_DefaultSolo"));

// // Banners
// console.log(fortnite.Banners());

// // BannersColors
// console.log(fortnite.BannersColors());

// // BRStats
// console.log(fortnite.BRStats({ name: "TFue", accountType: "epic", timeWindow: "lifetime", image: "none" }));

// // BRStatsID
// console.log(fortnite.BRStatsID("b9afb91df9964891bd49bfe200ae35c7", { accountType: "epic", timeWindow: "lifetime", image: "none" }));

// // BRShop
// console.log(fortnite.BRShop());

// // BRShopCombined
// console.log(fortnite.BRShopCombined());

// // CreatorCode
// console.log(fortnite.CreatorCode("TFue"));

// // CreatorCodeSearch
// console.log(fortnite.CreatorCodeSearch("TFue"));

// // CreatorCodeSearchAll
// console.log(fortnite.CreatorCodeSearchAll("TFue"));

// // CosmeticsNew
// console.log(fortnite.CosmeticsNew());

// // CosmeticsList
// console.log(fortnite.CosmeticsList());

// // CosmeticsSearch
// console.log(fortnite.CosmeticsSearch({ name: "John", matchMethod: "contains", language: "en" }));

// // CosmeticsSearchAll
// console.log(fortnite.CosmeticsSearchAll({ name: "Gui", matchMethod: "contains", language: "en" }));

// // CosmeticsSearchByIDs
// console.log(fortnite.CosmeticsSearchByIDs(["CID_416_Athena_Commando_M_AssassinSuit", "CID_398_Athena_Commando_M_TreasureHunterFashion"]));

// // News
// console.log(fortnite.News());

// // NewsBR
// console.log(fortnite.NewsBR());

// // NewsSTW
// console.log(fortnite.NewsSTW());

// // NewsCreative
// console.log(fortnite.NewsCreative());