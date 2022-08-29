import {
  addDoc,
  collection,
  CollectionReference,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { reactive } from 'vue';
import { db } from '../firebase';
import Player from './Player';

const col = collection(db, 'players') as CollectionReference<Player>;

class PlayerManager {
  public players = reactive<Player[]>([]);

  constructor() {
    onSnapshot(col, {
      next: (snapshot) => {
        this.players.splice(0);
        this.players.push(
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      },
    });
  }

  public async getAll() {
    const players = (await getDocs(col)).docs.map((doc) => doc.data());
    return players;
  }

  public async insertOne(player: Player) {
    await addDoc(col, { ...player });
  }
}

export default new PlayerManager();
