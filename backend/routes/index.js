const {getFPQ} = require('./getFPQ');
const {getCapacityRoute} = require('./getCapacityRoute');
const {getActiveCCJobsRoute} = require('./getActiveCCJobsRoute');
const {getCompletedCCJobsRoute} = require('./getCompletedCCJobsRoute');
const {getSCJobsInQueueRoute} = require('./getSCJobsInQueueRoute');
const {getTCJobsInQueueRoute} = require('./getTCJobsInQueueRoute');

const routes = [
    getFPQ,
    getCapacityRoute,
    getActiveCCJobsRoute,
    getCompletedCCJobsRoute,
    getSCJobsInQueueRoute,
    getTCJobsInQueueRoute
]

exports.routes = routes;