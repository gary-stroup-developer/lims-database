const {getDbConnection} = require('../database');

const getActiveSCJobsRoute = {
    path:'/server/stemcells/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const activeJobs = await db.collection('stemcells').find({"status":"active"},{"job_id":1,"description":1,"user":1});

        res.status(200).json({activeJobs});
    }
};

exports.getActiveSCJobsRoute = getActiveSCJobsRoute;