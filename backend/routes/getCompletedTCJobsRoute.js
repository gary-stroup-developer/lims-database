const {getDbConnection} = require('../database');

const getCompletedTCJobsRoute = {
    path: '/server/tissueculture/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const complete = await db.collection('tissue culture').find({"status":"complete"});

        res.status(200).json({complete});
    }
};

exports.getCompletedTCJobsRoute = getCompletedTCJobsRoute;