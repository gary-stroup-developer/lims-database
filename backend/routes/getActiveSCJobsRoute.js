const {getDbConnection} = require('../database');

const getActiveSCJobsRoute = {
    path:'/server/stemcells/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let scActiveJobs = [];
        let totalSCCapacity = 0;
        let sc_indiv_capacity = [];

        const activeJobs = await db.collection('stem cells').find({"status":"active"},{"date_needed":1,"requestor":1,"weight":1});

        const indiv_capacity = await db.collection('stem cells').aggregate( [
            // Stage 2: Group remaining documents by pizza name and calculate total quantity
            {
               $group: { _id: "$requestor", individualCapacity: { $sum: "$weight" } }
            }
         ]);
        
        await activeJobs.forEach(doc => scActiveJobs.push(doc));
        await indiv_capacity.forEach(doc => sc_indiv_capacity.push(doc));
        scActiveJobs.forEach(doc => totalSCCapacity += doc.weight);

       
        
        res.status(200).json({totalSCCapacity, scActiveJobs,sc_indiv_capacity});
    }
};

exports.getActiveSCJobsRoute = getActiveSCJobsRoute;