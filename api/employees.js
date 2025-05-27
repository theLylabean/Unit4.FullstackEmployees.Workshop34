import { createEmployee, getEmployees } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

router.route("/").get(async ( req,res ) => {
    const employees = await getEmployees();
    res.send(employees);
});

router.route("/").post(async ( req, res ) => {
    if(!req.body){
        return res.status(400).send({error: 'Missing req.body'})
    }
    const { name, birthday, salary } = req.body;
    if(!name || !birthday || !salary){
        return res.status(400).send({error: 'Missing one or more required fields'})
    }
    const employee = await createEmployee ({ name, birthday, salary })
    res.status(201).send(employee)
})

