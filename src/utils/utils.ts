import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  host: "db",
  port: 5432,
  username: "sqlite",
  password: "example",
  database: "sqlite",
  synchronize: true,
  entities: [],
});

export default dataSource;