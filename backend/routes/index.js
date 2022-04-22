const {getFPQ} = require('./getFPQ');
const {getActiveSCJobsRoute} = require('./getActiveSCJobsRoute');
const {getActiveTCJobsRoute} = require('./getActiveTCJobsRoute');
const {getCompletedSCJobsRoute} = require('./getCompletedSCJobsRoute');
const {getCompletedTCJobsRoute} = require('./getCompletedTCJobsRoute');
const {getSCJobsInQueueRoute} = require('./getSCJobsInQueueRoute');
const {getTCJobsInQueueRoute} = require('./getTCJobsInQueueRoute');

const routes = [
    getFPQ,
    getActiveSCJobsRoute,
    getActiveTCJobsRoute,
    getCompletedSCJobsRoute,
    getCompletedTCJobsRoute,
    getSCJobsInQueueRoute,
    getTCJobsInQueueRoute
]

exports.routes = routes;