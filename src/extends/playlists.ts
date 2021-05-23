import { Playlists } from "src/endpoints";
import { checkLanguage } from "src/utils/checkLanguage";
import { IHeaders } from "src/utils/Interfaces";
import { preRequest } from "src/utils/preRequest";

export async function playlists(language: string, headers: IHeaders): Promise<IPlaylists> {
  const url = preRequest(Playlists, { language: await checkLanguage(language) });
  const response = await fetch(url, headers);
  return response.json();
}

interface IPlaylists {
  status: number,
  data: IPlaylistsData[]
}

interface IPlaylistsData {
  id: string,
  name: string,
  subName: string,
  description: string,
  gameType: string,
  ratingType: string,
  minPlayers: number,
  maxPlayers: number,
  maxTeams: number,
  maxTeamSize: number,
  maxSquads: number,
  maxSquadSize: number,
  isDefault: boolean,
  isTournament: boolean,
  isLimitedTimeMode: boolean,
  isLargeTeamGame: boolean,
  accumulateToProfileStats: boolean,
  images: {
    showcase: string,
    missionIcon: string,
  },
  gameplayTags: string[],
  path: string,
  added: string,
}