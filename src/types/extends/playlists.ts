import { IError } from "..";

// ######## Playlists ######## //
export interface IPlaylists extends IError {
  status: number,
  data: IPlaylistsData[],
}

export interface IPlaylistsId extends IError {
  status: number,
  data: IPlaylistsData,
}

// ########### Data ########## //
interface IPlaylistsData {
  id: string,
  name: string,
  subName: string | null,
  description: string,
  gameType: string,
  ratingType: string | null,
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
    showcase: string | null,
    missionIcon: string | null,
  },
  gameplayTags: string[],
  path: string,
  added: string,
}