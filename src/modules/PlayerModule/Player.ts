import { genId } from '../../Util';

export default class Player {
  public readonly id = genId();
  public distance = 0;
  constructor(public name: string) {}
}
