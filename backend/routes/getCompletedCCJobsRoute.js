const {getDbConnection} = require('../database');

const getCompletedCCJobsRoute = {
    path: '/server/cellculture/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const year = new Date(Date.now()).getFullYear().toString();

        let ccCompleteTotal = [];
        const completeTotal = await db.collection(year).find({"status":"complete"});
        const ccComplete = await db.collection(year).countDocuments({"status":"complete"});

        await completeTotal.forEach(doc => ccCompleteTotal.push(doc));
        res.status(200).json({ccCompleteTotal, ccComplete});
    }
};

exports.getCompletedCCJobsRoute = getCompletedCCJobsRoute;