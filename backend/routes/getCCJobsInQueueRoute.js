const {getDbConnection} = require('../database');

const getCCJobsInQueueRoute = {
    path: '/server/queue',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const year = new Date(Date.now()).getFullYear().toString();
        let jobsInQueue = [];
        const queue = await db.collection(year).find({"status":"queue"});
        await queue.forEach((doc) => jobsInQueue.push(doc));
  
        res.status(200).json({jobsInQueue});
    }
};

exports.getCCJobsInQueueRoute = getCCJobsInQueueRoute;