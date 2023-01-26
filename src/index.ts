// create connection is deprecated
// import {createConnection} from 'typeorm'
import { DataSource } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transactions";

import express from "express";
import { CreateClientRouter } from "./routes/create_client";
const app = express();
const main = async () => {
  try {
    const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "typeorm",
      entities: [Client, Banker, Transaction],
      synchronize: true, // pretty much a migration
    });
    console.log("Connected to Postgres");

    app.listen(8000, () => {
      console.log("now running on port 8000");
    });
    app.use(express.json());
    app.use(CreateClientRouter);
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};

main();

// tables == entity
