import fortniteAPI from "../src/wrapper";

const fortnite = new fortniteAPI({
  apikey: "70993c518ce03d824996b5b7e1ede0f71f0f9e0f",
  language: "ru",
});

(async () =>  {
  // BrMap
  console.log(await fortnite.BrMap());

  // Playlists
  console.log(await fortnite.Playlists());

  // PlaylistsID
  console.log(await fortnite.PlaylistsId("Playlist_DefaultSolo"));

  // Banners
  console.log(await fortnite.Banners());

  // BannersColors
  console.log(await fortnite.BannersColors());

  // BannersColors
  console.log(await fortnite.BannersColors());

  // BRStats
  console.log(await fortnite.BRStats({ name: "TFue", accountType: "epic", timeWindow: "lifetime", image: "none" }));

  // BRStatsID
  console.log(await fortnite.BRStatsID("b9afb91df9964891bd49bfe200ae35c7", { accountType: "epic", timeWindow: "lifetime", image: "none" }));
  
  // BRShop
  console.log(await fortnite.BRShop());
  
  // BRShopCombined
  console.log(await fortnite.BRShopCombined());
  
  // CreatorCode
  console.log(await fortnite.CreatorCode("TFue"));
  
  // CreatorCodeSearch
  console.log(await fortnite.CreatorCodeSearch("TFue"));
  
  // CreatorCodeSearchAll
  console.log(await fortnite.CreatorCodeSearchAll("TFue"));
  
  // CosmeticsNew
  console.log(await fortnite.CosmeticsNew());
  
  // CosmeticsList
  console.log(await fortnite.CosmeticsList());
  
  // CosmeticsSearch
  console.log(await fortnite.CosmeticsSearch({ name: "John", matchMethod: "contains", language: "en" }));
  
  // CosmeticsSearchAll
  console.log(await fortnite.CosmeticsSearchAll({ name: "Gui", matchMethod: "contains", language: "en" }));
  
  // CosmeticsSearchByIDs
  console.log(await fortnite.CosmeticsSearchByIDs(["CID_416_Athena_Commando_M_AssassinSuit", "CID_398_Athena_Commando_M_TreasureHunterFashion"]));
  
  // News
  console.log(await fortnite.News());
  
  // NewsBR
  console.log(await fortnite.NewsBR());
  
  // NewsSTW
  console.log(await fortnite.NewsSTW());
  
  // NewsCreative
  console.log(await fortnite.NewsCreative());
})();