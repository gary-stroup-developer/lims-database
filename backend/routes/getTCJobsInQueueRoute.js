const {getDbConnection} = require('../database');

const getTCJobsInQueueRoute = {
    path: '/server/tissueculture/queue',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const queue = await db.collection('tissue culture').find({"status":"queue"});
        res.status(200).json({queue});
    }
};

exports.getTCJobsInQueueRoute = getTCJobsInQueueRoute;