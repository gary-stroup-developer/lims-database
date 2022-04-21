const {getFPQ} = require('./getFPQ');
const {getActiveSCJobsRoute} = require('./getActiveSCJobsRoute');
const {getActiveTCJobsRoute} = require('./getActiveTCJobsRoute');
const {getCompletedSCJobsCountRoute} = require('./getCompletedSCJobsCountRoute');
const {getCompletedTCJobsCountRoute} = require('./getCompletedTCJobsCountRoute');
const {getCompletedSCJobsRoute} = require('./getCompletedSCJobsRoute');
const {getCompletedTCJobsRoute} = require('./getCompletedTCJobsRoute');
const {getSCJobsInQueueRoute} = require('./getSCJobsInQueueRoute');
const {getTCJobsInQueueRoute} = require('./getTCJobsInQueueRoute');

const routes = [
    getFPQ,
    getCompletedSCJobsCountRoute,
    getCompletedTCJobsCountRoute,
    getActiveSCJobsRoute,
    getActiveTCJobsRoute,
    getCompletedSCJobsRoute,
    getCompletedTCJobsRoute,
    getSCJobsInQueueRoute,
    getTCJobsInQueueRoute
]

exports.routes = routes;