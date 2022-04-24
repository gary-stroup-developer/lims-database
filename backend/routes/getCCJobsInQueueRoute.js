const {getDbConnection} = require('../database');

const getCCJobsInQueueRoute = {
    path: '/server/queue',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const year = new Date(Date.now()).getFullYear().toString();
        const queue = await db.collection(year).find({"status":"queue"});
        res.status(200).json({queue});
    }
};

exports.getCCJobsInQueueRoute = getCCJobsInQueueRoute;