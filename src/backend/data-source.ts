import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entities/User";


const MariaDb = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "boilerplate",
    password: "boilerplate1234",
    database: "boilerplate",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
MariaDb.initialize().then(async () => {
    console.log("Connection initialized with database...");
}).catch((error) => console.log(error));

export const BoilerplateDB = function (): Promise<DataSource> {
    if (MariaDb.isInitialized){
        return Promise.resolve(MariaDb);
    } 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (MariaDb.isInitialized) resolve(MariaDb);
          else reject("Failed to create connection with database");
        }, 3000);
      });
    
}