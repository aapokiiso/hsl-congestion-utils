'use strict';

const gtfsIdLib = require('./gtfs-id');

module.exports = {
    /**
     * @see https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions-2/
     *      Search for "next_stop"
     */
    END_OF_LINE_ID: 'EOL',

    /**
     * @param {string} realtimeNextStopId - Next stop ID in the Realtime API
     * @returns {boolean}
     */
    isEndOfLine(realtimeNextStopId) {
        return realtimeNextStopId === this.END_OF_LINE_ID;
    },

    /**
     * Converts a Realtime API GTFS ID for the next stop to Routing API
     * format. Firstly checks the route is not end of line.
     *
     * @param {string} realtimeNextStopId - Next stop ID in the Realtime API
     * @returns {string}
     * @throws If trip is in end of line
     */
    convertRealtimeApiForRoutingApi(realtimeNextStopId) {
        if (this.isEndOfLine(realtimeNextStopId)) {
            throw new Error(
                'Could not parse next stop GTFS ID, the trip is in end of line.'
            );
        }

        return gtfsIdLib.convertRealtimeApiForRoutingApi(realtimeNextStopId);
    },
};
