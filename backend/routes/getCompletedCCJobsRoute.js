const {getDbConnection} = require('../database');

const getCompletedCCJobsRoute = {
    path: '/server/cellculture/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let ccCompleteTotal = [];
        const completeTotal = await db.collection('2022').find({"status":"complete"});
        const ccComplete = await db.collection('2022').countDocuments({"status":"complete"});

        await completeTotal.forEach(doc => ccCompleteTotal.push(doc));
        res.status(200).json({ccCompleteTotal, ccComplete});
    }
};

exports.getCompletedCCJobsRoute = getCompletedCCJobsRoute;