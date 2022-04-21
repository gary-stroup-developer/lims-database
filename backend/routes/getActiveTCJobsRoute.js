const {getDbConnection} = require('../database');

const getActiveTCJobsRoute = {
    path: '/server/tissueculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const activeJobs = await db.collection('tissue-culture').find({"status":"active"},{"job_id":1,"description":1,"user":1});

        res.status(200).json({activeJobs});
    }
};

exports.getActiveTCJobsRoute = getActiveTCJobsRoute;