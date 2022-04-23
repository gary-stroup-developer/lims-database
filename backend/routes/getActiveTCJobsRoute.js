const {getDbConnection} = require('../database');

const getActiveTCJobsRoute = {
    path: '/server/tissueculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let tcActiveJobs = [];
        let totalTCCapacity = 0;
        let tc_indiv_capacity = [];

        const activeJobs = await db.collection('tissue culture').find({"status":"active"},{"date_needed":1,"requestor":1,"weight":1});

        const indiv_capacity = await db.collection('tissue culture').aggregate( [
            // Stage 2: Group remaining documents by pizza name and calculate total quantity
            {
               $group: { _id: "$requestor", individualCapacity: { $sum: "$weight" } }
            }
         ]);

        await activeJobs.forEach(doc => tcActiveJobs.push(doc));
        await indiv_capacity.forEach(doc => tc_indiv_capacity.push(doc));
        tcActiveJobs.forEach(doc => totalTCCapacity += doc.weight);

      
        res.status(200).json({totalTCCapacity,tcActiveJobs, tc_indiv_capacity});
    }
};

exports.getActiveTCJobsRoute = getActiveTCJobsRoute;