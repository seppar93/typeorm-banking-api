// create connection is deprecated
// import {createConnection} from 'typeorm'
import { DataSource } from "typeorm";

const main = async () => {
  try {
    const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "typeorm",
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to database')
  }
};

main();
