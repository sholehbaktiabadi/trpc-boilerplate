import { DataSource } from "typeorm";

export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "protaige_intro",
    synchronize: false,
})