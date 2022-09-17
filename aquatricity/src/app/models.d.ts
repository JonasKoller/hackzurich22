import * as firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Userdata {
  currentPath: string;
  environmentalCoins: number;
  interests: string[];
  readArticles: string[];
}

export interface Path {
  articles: string[];
  category: string;
  duration: string;
  rewardEnvironmentalCoins: number;
  title: string;
  uid: string;
}

export interface Article {
  pointToEarn: number;
  readingTime: string;
  textParts: string[];
  title: string;
  uid: string;
  category: 'water' | 'electricity';
  creationDate: Timestamp;
}
