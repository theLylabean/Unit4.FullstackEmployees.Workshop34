/** @returns the employee created according to the provided details */
import db from "#db/client"

export async function createEmployee({ name, birthday, salary }) {
  const result = await db.query(
    'INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *;', [name, birthday, salary]
  )
  return result
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = `
    SELECT * FROM employees
  `
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const sql = `
    SELECT * FROM movies WHERE id = $1;
  `
  const { rows: employee } = await db.query(sql, [id])
  return employee[0]
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const sql = `
    UPDATE employees
    SET name = $1, bithday = $2, salary = $3
    WHERE id = $4
    RETURNING *;
  `
  const { rows: employee } =  await db.query(sql, [name, birthday, salary, id])
  return employee[0]
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const sql = `
    DELETE FROM employees WHERE id = $1 RETURNING *;
  `
  const { rows: employee } = await db.query(sql, [id])
  return employee
}
