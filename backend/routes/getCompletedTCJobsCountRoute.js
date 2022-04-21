const {getDbConnection} = require('../database');

const getCompletedTCJobsCountRoute = {
    path: '/server/tissueculture/completedjobscount',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const completedjobs = await db.collection('tissue culture').find({"status":"complete"}).count();

        res.status(200).json({completedjobs});
    }
};

exports.getCompletedTCJobsCountRoute = getCompletedTCJobsCountRoute;