// create connection is deprecated
// import {createConnection} from 'typeorm'
import { DataSource } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";

const main = async () => {
  try {
    const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "typeorm",
      entities: [Client, Banker],
      synchronize: true, // pretty much a migration
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
};

main();

// tables == entity
