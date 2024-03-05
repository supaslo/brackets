import { Round } from "./Round";

export interface Bracket {
    id: string,
    finalRound: boolean,
    rounds: Round[]
}