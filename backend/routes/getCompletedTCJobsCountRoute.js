const {getDbConnection} = require('../database');

const getCompletedTCJobsCountRoute = {
    path: '/server/tissueculture/completedjobscount',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const tcComplete = await db.collection('tissue culture').countDocuments({"status":"complete"});

        res.status(200).json({tcComplete});
    }
};

exports.getCompletedTCJobsCountRoute = getCompletedTCJobsCountRoute;