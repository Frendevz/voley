import {
  addDoc,
  collection,
  CollectionReference,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import Player from './Player';

const col = collection(db, 'players') as CollectionReference<Player>;

class PlayerManager {
  public players: Player[] = [];

  public async getAll() {
    const players = (await getDocs(col)).docs.map((doc) => doc.data());
    return players;
  }

  public async insertOne(player: Player) {
    await addDoc(col, player);
  }
}

export default new PlayerManager();
