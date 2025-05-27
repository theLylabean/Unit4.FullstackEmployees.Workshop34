import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

  await createEmployee({ name: "Justin Lynn", birthday: '1991-03-01', salary: 207000 })
  await createEmployee({ name: "Larry Maxwell", birthday: '1956-01-01', salary: 150000 })
  await createEmployee({ name: "Emma Maxwell", birthday: '1963-02-01', salary: 141000 })
  await createEmployee({ name: "Kathryn Wolk", birthday: '1988-05-01', salary: 117000 })
  await createEmployee({ name: "Collin Alexander", birthday: '1994-04-01', salary: 180000 })
  await createEmployee({ name: "Kurt Hall", birthday: '1994-06-01', salary: 172000 })
  await createEmployee({ name: "Sarah Widowski", birthday: '1983-10-01', salary: 107000 })
  await createEmployee({ name: "Tyler Maxwell", birthday: '1989-04-01', salary: 196000 })
  await createEmployee({ name: "Joey Maxwell", birthday: '1983-03-01', salary: 123000 })
  await createEmployee({ name: "Lyla Lynn", birthday: '1988-07-01', salary: 5000000 })

}
