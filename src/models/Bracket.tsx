import { Round } from "./Round";

export interface Bracket {
    id: string,
    name: string,
    rounds: Round[]
}