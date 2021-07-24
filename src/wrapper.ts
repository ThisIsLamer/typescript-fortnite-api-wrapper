import fetch from "node-fetch";
import endpoints from "./endpoints.json";

import { IDefault, IAes, IFortniteAPI, IError } from "./types";
import { IBanners, IBannersColors } from "./types/extends/banners";
import { IBrMap } from "./types/extends/brMap";
import { IBRShop } from "./types/extends/brShop";
import { IBRStats, IBRStatsIdParams, IBRStatsParams } from "./types/extends/brStats";
import { ICosmeticsList, ICosmeticsNew, ICosmeticsSearch, ICosmeticsSearchAll, ICosmeticsSearchParams } from "./types/extends/cosmetics";
import { ICreatorCode, ICreatorCodeAll } from "./types/extends/creatorCode";
import { INews, INewsMod } from "./types/extends/news";
import { IPlaylists } from "./types/extends/playlists";


export default class FortniteAPI {
  public _headers: { headers: { "x-api-key": string } };
  public _language: string;
  public _debug: boolean;
  public _version: number;

  constructor(option: IFortniteAPI) {
    this._headers = { headers: { "x-api-key": option.apikey } };
    this._language = option.language;
    this._debug = option.debug;
    this._version = option.version;
  }

  protected _preRequest(uri: string, query?: IDefault | []): string {
    let params: string;
    if (query) {
      for (let prop in query) {
        if (Array.isArray(query[prop])) {
          for (let item of query[prop]) {
            params += prop + "=" + encodeURI(item) + "&";
          }
        } else {
          params += prop + "=" + encodeURI(query[prop]) + "&";
        }
      }
      if (params.length > 0) {
        params = "?" + params.substr(0, params.length - 1);
      }
    }
    let url = uri + params;
    return url;
  }

  protected async _requestHandler(uri: string, params?) {
    let url: string = params?.language
      ? this._preRequest(uri, { language: this._checkLanguage(params.language) })
      : this._preRequest(uri);

    const response = await fetch(url, this._headers);
    return response.json();
  }

  protected _checkLanguage(param: string = this._language) {
    if (param) {
      if (endpoints.Language.indexOf(param) > -1) {
        return param;
      } else {
        console.error("[FortniteAPI.ts]: Unsupported language selected, default search language: 'en'");
        return "en";
      }
    } else return "en";
  }

  protected _fortniteAPI(): string {
    return endpoints.Base;
  }

  protected _parameters(): IDefault[] {
    return endpoints.Parameters;
  }

  protected async _AES(): Promise<IAes> {
    const response = await fetch(endpoints.AES, this._headers);
    return response.json();
  }

  public async BrMap(language: string = this._language): Promise<IBrMap> {
    return await this._requestHandler(endpoints.BR_Map, { language: language });
  }

  public async Playlists(language: string = this._language): Promise<IPlaylists> {
    return await this._requestHandler(endpoints.Playlists, { language: language });
  }

  public async PlaylistsId(id: string, language: string = this._language): Promise<IPlaylists> {
    return await this._requestHandler(endpoints.Playlists_ID + id, { language: language });
  }

  public async Banners(language: string = this._language): Promise<IBanners> {
    return await this._requestHandler(endpoints.Banners, { language: language });
  }

  public async BannersColors(): Promise<IBannersColors> {
    return await this._requestHandler(endpoints.Banners_Colors);
  }

  public async BRStats(params: IBRStatsParams): Promise<IBRStats> {
    return await this._requestHandler(endpoints.BR_Stats, params);
  }

  public async BRStatsID(id: string, params: IBRStatsIdParams): Promise<IBRStats> {
    return await this._requestHandler(endpoints.BR_StatsID + id, params);
  }

  public async BRShop(language: string = this._language): Promise<IBRShop> {
    return await this._requestHandler(endpoints.BR_Shop, { language: language });
  }
  public async BRShopCombined(language: string = this._language): Promise<IBRShop> {
    return await this._requestHandler(endpoints.BR_ShopCombined, { language: language });
  }

  public async CreatorCode(name: string): Promise<ICreatorCode> {
    return await this._requestHandler(endpoints.Creator_Code, { name: name });
  }

  public async CreatorCodeSearch(name: string): Promise<ICreatorCode> {
    return await this._requestHandler(endpoints.Creator_CodeSearch, { name: name });
  }

  public async CreatorCodeSearchAll(name: string): Promise<ICreatorCodeAll> {
    return await this._requestHandler(endpoints.Creator_CodeSearchAll, { name: name });
  }

  public async CosmeticsNew(language: string = this._language): Promise<ICosmeticsNew> {
    return await this._requestHandler(endpoints.Cosmetics_New, { language: language });
  }

  public async CosmeticsList(language: string = this._language): Promise<ICosmeticsList> {
    return await this._requestHandler(endpoints.Cosmetics_List, { language: language });
  }

  public async CosmeticsSearch(params: ICosmeticsSearchParams): Promise<ICosmeticsSearch> {
    return await this._requestHandler(endpoints.Cosmetics_Search, params);
  }

  public async CosmeticsSearchAll(params: ICosmeticsSearchParams): Promise<ICosmeticsSearchAll> {
    return await this._requestHandler(endpoints.Cosmetics_SearchAll, params);
  }

  public async CosmeticsSearchByIDs(id: string[], language: string = this._language): Promise<ICosmeticsSearchAll> {
    return await this._requestHandler(endpoints.Cosmetics_SearchByIDs, { id: id, language: language });
  }

  public async News(language: string = this._language): Promise<INews> {
    return await this._requestHandler(endpoints.News, { language: language });
  }

  public async NewsBR(language: string = this._language): Promise<INewsMod> {
    return await this._requestHandler(endpoints.News_BR, { language: language });
  }

  public async NewsSTW(language: string = this._language): Promise<INewsMod> {
    return await this._requestHandler(endpoints.News_STW, { language: language });
  }

  public async NewsCreative(language: string = this._language): Promise<INewsMod> {
    return await this._requestHandler(endpoints.News_Creative, { language: language });
  }
}
