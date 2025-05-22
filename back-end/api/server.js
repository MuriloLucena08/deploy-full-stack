// API Application Programing Interface
import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path"

const __dirname = path.resolve();
console.log(__dirname);


const app = express();
const PORT = 3000;

app.use(cors());

let artists = await db.collection("artists").find({}).toArray();
let songs = await db.collection("songs").find({}).toArray();

app.get("/api/", (req, res) => {
  res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (req, res) => {
  res.send(artists);
});

app.get("/api/songs", async (req, res) => {
  res.send(songs);
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("/*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na parta ${PORT}`);
});
