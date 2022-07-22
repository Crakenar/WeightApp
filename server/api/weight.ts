import {CompatibilityEvent} from "h3";
import express from "express";
import initDB from "~/server/db";
const app = express();
app.use(express.json())

const database = initDB();


export default async (event: CompatibilityEvent) => {
  const db = await database;
  return new Promise((resolve, reject) => {
    db.query(`select * from weightsdata`, (err: any, results: any) => {
      if (err) return reject(results);
      if (results) return resolve(results)
    });
  })
};