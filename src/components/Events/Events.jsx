// src/components/Events/Events.jsx
import "./Events.css";
import events from "../../data/events";
import Title from "../Title/Title";

function EventCard({
  eventImage,
  eventName,
  eventTime,
  eventLocation,
  eventLeader,
  eventDescription,
}) {
  return (
    <div className="event-card">
      <img src={eventImage} alt={eventName} className="event-card-image" />
      <h4 className="event-card-name">{eventName}</h4>
      <p className="event-card-time">{eventTime}</p>
      <p className="event-card-location">{eventLocation}</p>
      <p className="event-card-leader">Led by: {eventLeader}</p>
      <p className="event-card-description">{eventDescription}</p>
    </div>
  );
}

function Events() {
  return (
    <section>
      <Title
        maintitle="Upcoming Events"
        subtitle="Join Us for Exciting Learning Opportunities"
      />
      <div className="events-container">
        {events.map((event, index) => (
          <EventCard
            key={index}
            eventImage={event.eventImage}
            eventName={event.eventName}
            eventTime={event.eventTime}
            eventLocation={event.eventLocation}
            eventLeader={event.eventLeader}
            eventDescription={event.eventDescription}
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
