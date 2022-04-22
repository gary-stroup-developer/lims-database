const {getDbConnection} = require('../database');

const getActiveTCJobsRoute = {
    path: '/server/tissueculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let tcActiveJobs = [];
        
        const activeJobs = await db.collection('tissue culture').find({"status":"active"});
        await activeJobs.forEach(doc => tcActiveJobs.push(doc));

        res.status(200).json({tcActiveJobs});
    }
};

exports.getActiveTCJobsRoute = getActiveTCJobsRoute;