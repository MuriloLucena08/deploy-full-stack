import {MongoClient} from "mongodb";
import {password} from "./key.js";



const URI = 
  `mongodb+srv://murilo-lucena:${password}@cluster0.jbmfvrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("spotifyDB");
