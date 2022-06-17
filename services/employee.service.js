import db from '../mongo.js'

const service = {
    async getEmployee(req,res){
        try{
            const data = await db.batch
            .find()
            .toArray();
            console.log('Employee data fetched')
            // res.json({status: 'Success' , data})
            res.send(data)
            
        }
        catch(err){
            res.json({status: 404, message: "Cannot fetch Employees"})
        }
    },

    async getEmployeesbyId(req,res){
        try{
            const id = req.params.id
            const emply =await db.batch.findOne({id:id})
            console.log(emply)
            res.json({status:'Success' , data:emply})
        }
        catch{
            res.json({status: 404, message: "Cannot fetch Employees by Id"})
        }
    },

    async addEmployees(req,res){
        try{
            const {insertedId : _id} = await db.batch
            .insertMany(req.body);
            console.log('Batch Inserted',_id,req.body);
            res.json({status: 'Success' , data : [{_id,...req.body}]})
        }
       catch(err){
           console.log(err)
           res.json({status: 404, message:'Cannot Insert Batch'})}
    }
}

export default service