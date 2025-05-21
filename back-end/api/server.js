// API Application Programing Interface
import express from "express";
import cors from "cors";
import {db} from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

let artists = await db.
  collection("artists").
  find({}).
  toArray();
let songs = await db.
  collection("songs").
  find({}).
  toArray();

app.get('/', (req,res) => {
  res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get('/artists', async (req,res) => {
  res.send(artists);
});

app.get('/songs', async (req,res) => {
  res.send(songs);
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na parta ${PORT}`);
});