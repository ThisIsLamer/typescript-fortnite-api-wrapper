import fetch from "node-fetch";
import endpoints from "./endpoints.json";

import { IDefault, IAes, IFortniteAPI } from "./types";
import { IBanners, IBannersColors } from "./types/extends/banners";
import { IBrMap } from "./types/extends/brMap";
import { IBRStatsParams } from "./types/extends/brstats";
import { IPlaylists } from "./types/extends/playlists";


export class FortniteAPI {
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
    let url: string;
    if (params?.language) url = this._preRequest(uri, { language: this._checkLanguage(params.language) })
    else url = this._preRequest(uri);

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

  public async PlaylistsId(id: string, language: string = this._language) {
    return await this._requestHandler(endpoints.Playlists_ID + id, { language: language });
  }

  public async Banners(language: string = this._language): Promise<IBanners> {
    return await this._requestHandler(endpoints.Banners, { language: language });
  }

  public async BannersColors(): Promise<IBannersColors> {
    return await this._requestHandler(endpoints.Banners_Colors);
  }

  public async BRStats(params: IBRStatsParams) {
    return await this._requestHandler(endpoints.BR_Stats, params);
  }


}