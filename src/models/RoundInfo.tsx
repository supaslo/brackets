import { MatchInfo } from "./MatchInfo";

export interface RoundInfo {
    id: string,
    final: boolean,
    matches: MatchInfo[]
}