import { genId } from '../../Util';
import Player from '../PlayerModule/Player';

export default class Team {
  id = genId();
  players: Player[] = [];
}
