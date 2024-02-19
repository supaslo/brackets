import http from "../common/http-common";
import { MatchPlayerList } from "../models/MatchPlayerList";

const getAll = () => {
  return http.get<Array<MatchPlayerList>>("matches.json")
}

const MatchService = {
  getAll
};
 
export default MatchService;