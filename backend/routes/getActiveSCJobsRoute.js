const {getDbConnection} = require('../database');

const getActiveSCJobsRoute = {
    path:'/server/stemcells/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let scActiveJobs = [];

        const activeJobs = await db.collection('stem cells').find({"status":"active"});
        await activeJobs.forEach(doc => scActiveJobs.push(doc));
        
        res.status(200).json({scActiveJobs});
    }
};

exports.getActiveSCJobsRoute = getActiveSCJobsRoute;