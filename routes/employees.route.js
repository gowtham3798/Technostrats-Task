import express from 'express';
import service from '../services/employee.service.js';

const route = express.Router();

route.get('/',service.getEmployee)
route.get('/:id',service.getEmployeesbyId)
route.post('/',service.addEmployees)

export default route;