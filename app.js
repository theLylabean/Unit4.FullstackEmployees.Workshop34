import employeeRouter from './api/employees.js'
import express from "express";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
})
app.use("/employees", employeeRouter);

app.route('/').get(async ( req, res ) => {
        res.send('Welcome to the Fullstack Employees API.')
    })

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('AN ERROR OCCURED' + err);
})

export default app;