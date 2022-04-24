const {getDbConnection} = require('../database');

const getCapacityRoute = {
    path:'/server/capacity',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let ccActiveJobs = [];
        let totalCCapacity = 0;
        let cc_indiv_capacity = [];

        const activeJobs = await db.collection('2022').find({"status":"active"});

        const indiv_capacity = await db.collection('2022').aggregate( [
            // Stage 2: Group remaining documents by pizza name and calculate total quantity
            {
               $group: { _id: "$requestor", individualCapacity: { $sum: "$weight" } }
            }
         ]);
        
        await activeJobs.forEach(doc => ccActiveJobs.push(doc));
        await indiv_capacity.forEach(doc => cc_indiv_capacity.push({name:doc._id,individualCapacity: doc.individualCapacity}));
        ccActiveJobs.forEach(doc => totalCCapacity += doc.weight);

        
        res.status(200).json({totalCCapacity, cc_indiv_capacity});
    }
};

exports.getCapacityRoute = getCapacityRoute;