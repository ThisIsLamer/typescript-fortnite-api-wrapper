// ####### BRStats Params ####### //
export interface IBRStatsParams {
  name?: string,
  accountType?: "epic" | "psn" | "xbl",
  timeWindow?: "season" | "lifetime",
  image?: "all" | "keyboardMouse" | "gamepad" | "touch" | "none",
}

// ###### BRStatsId Params ###### //
export interface IBRStatsIdParams {
  accountType?: "epic" | "psn" | "xbl",
  timeWindow?: "season" | "lifetime",
  image?: "all" | "keyboardMouse" | "gamepad" | "touch" | "none",
}

// ########## BRStats ########## //
export interface IBRStats {
  status: number,
  data: {
    account?: {
      id?: string,
      name?: string,
    },
    battlePass?: {
      level?: number,
      progress?: number,
    },
    image?: string,
    stats?: {
      all?: IBRStatsMode,
      keyboardMouse?: IBRStatsMode,
      gamepad?: IBRStatsMode,
      touch?: IBRStatsMode,
    }
  }
}

// ########### Data ########### //
interface IBRStatsMode {
  overall?: IBRStatsStat,
  solo?: IBRStatsStat,
  duo?: IBRStatsStat,
  trio?: IBRStatsStat,
  squad?: IBRStatsStat,
  ltm?: IBRStatsStat,
}

interface IBRStatsStat {
  score?: number,
  scorePerMin?: number,
  scorePerMatch?: number,
  wins?: number,

  top3?: number,
  top5?: number,
  top6?: number,
  top10?: number,
  top12?: number,
  top25?: number,


  kills?: number,
  killsPerMin?: number,
  killsPerMatch?: number,
  deaths?: number,
  kd?: number,
  matches?: number,
  winRate?: number,
  minutesPlayed?: number,
  playersOutlived?: number,
  lastModified?: string,
}