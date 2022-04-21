const {getDbConnection} = require('../database');

const getSCJobsInQueueRoute = {
    path: '/server/stemcells/queue',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const queue = await db.collection('stem cells').find({"status":"queue"});
        res.status(200).json({queue});
    }
};

exports.getSCJobsInQueueRoute = getSCJobsInQueueRoute;