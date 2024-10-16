import { Marquee } from "./marquee";
import { calendar_v3 } from "@googleapis/calendar";

interface EventParams {
    calendarId: string;
    timeMin: string;
    maxResults: number;
    singleEvents: boolean;
    orderBy: string;
}

const EventCard = ({ event }: { event: calendar_v3.Schema$Event }) => {
    return (
        <div className="items-center">
            <p className="text-sm font-mono font-semibold uppercase">
                <span className="font-extrabold">{event.summary}</span>{" "}
                {event.start?.dateTime
                    ? new Date(event.start.dateTime).toLocaleString()
                    : null}
            </p>
        </div>
    );
};

export const UpcomingEvents = async ({events}:{events: calendar_v3.Schema$Event[]}) => {

    return (
        <div className="grid grid-cols-1">
            <Marquee
                className="gap-[3rem] [--duration:25s] motion-reduce:overflow-auto py-12"
                innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
                fade={true}
                pauseOnHover={true}
            >
                {events &&
                    events.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
            </Marquee>
        </div>
    );
};
