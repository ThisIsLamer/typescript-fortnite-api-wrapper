import { IDefault } from "./Interfaces";

export function preRequest(uri: string, query: IDefault | []) {
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
