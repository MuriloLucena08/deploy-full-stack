// API Application Programing Interface
import express from "express";
import cors from "cors";
import {db} from "./connect.js";
import path, { dirname } from "path";

const _dirname =path.resolve();

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

app.get("/api/", (req,res) => {
  res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (req,res) => {
  res.send(artists);
});

app.get("/api/songs", async (req,res) => {
  res.send(songs);
});

app.use(express.static(path.join(_dirname,'../front-end/dist')));

app.get("/*",  async (req,res) => {
  res.sendFile(path.join(_dirname,'../front-end/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na parta ${PORT}`);
});