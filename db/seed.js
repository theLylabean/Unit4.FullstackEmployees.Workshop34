import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

  await createEmployee("Justin Lynn", '1991-03-01', 207000)
  await createEmployee("Larry Maxwell", '1956-01-01', 150000)
  await createEmployee("Emma Maxwell", '1963-02-01', 141000)
  await createEmployee("Kathryn Wolk", '1988-05-01', 117000)
  await createEmployee("Collin Alexander", '1994-04-01', 180000)
  await createEmployee("Kurt Hall", '1994-06-01', 172000)
  await createEmployee("Sarah Widowski", '1983-10-01', 107000)
  await createEmployee("Tyler Maxwell", '1989-04-01', 196000)
  await createEmployee("Joey Maxwell", '1983-03-01', 123000)
  await createEmployee("Lyla Lynn", '1988-07-01', 5000000)

}
