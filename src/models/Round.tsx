import { Match } from "./Match";

export interface Round {
    id: string,
    finalRound: boolean,
    matches: Match[]
}