const {getDbConnection} = require('../database');

const getCompletedTCJobsRoute = {
    path: '/server/tissueculture/completedjobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const completedjobs = await db.collection('tissue-culture').find({"status":"complete"},{"job_id":1,"description":1,"user":1});

        res.status(200).json({completedjobs});
    }
};

exports.getCompletedTCJobsRoute = getCompletedTCJobsRoute;