'use strict';

const CouldNotParseError = require('./error/could-not-parse');

module.exports = {
    /**
     * GTFS IDs are used to identify stops, routes and
     * other HSL entities. They are the same between
     * the Realtime and Routing APIs, except in the Routing API
     * they are prefixed with "HSL:".
     *
     * @see https://en.wikipedia.org/wiki/General_Transit_Feed_Specification
     *
     * @param {string} realtimeId - Realtime API ID, eg. "1010419"
     * @returns {string} Routing API ID, eg. "HSL:1010419"
     * @throws CouldNotParseError - If no Realtime API GTFS ID given.
     */
    convertRealtimeApiForRoutingApi(realtimeId) {
        if (!realtimeId) {
            throw new CouldNotParseError(
                'Could not parse empty Realtime API ID to Routing API GTFS ID.'
            );
        }

        return `HSL:${realtimeId}`;
    },
};
