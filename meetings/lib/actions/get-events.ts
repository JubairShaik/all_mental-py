'use server'

import {cal} from '@/lib/calendar'

export const getEvents = async ({
    calendarId,
    maxResults,
    timeMin,
    singleEvents,
    orderBy="startTime",
}: {
    calendarId: string;
    maxResults?: number;
    timeMin?: string;
    singleEvents?: boolean;
    orderBy?: "startTime" | "updated";
}) => {
    /** query calendar API for events
     * @param {string} calendarId id of the calendar, looks like s9ajkhr604dfrmvm7185lesou0@group.calendar.google.com
     * @param {number} [maxResults=1000] maximum number of events returned, can be up to 2500, currently doesn't support more events
     * @param {string} [timeMin] RFC3339 timestamp to only show events that start after this time, defaults to now
     * @param {boolean} [singleEvents=true] whether to expand recurring events into instances and only return single events (not the full recurring event), only needed for recurring events
     * @param {'startTime' | 'updated'} [orderBy='startTime'] how to order the events, defaults to startTime
     * @returns {Object} see https://developers.google.com/calendar/v3/reference/events/list for shape of response object
     */

    try {
        const events = await cal.events.list({
            calendarId,
            maxResults,
            timeMin,
            singleEvents,
            orderBy,
        });

        return events;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch calendar events");
    }
};