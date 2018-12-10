import React from 'react';

type Props = {
  eventTitle: String,
  location: String,
  spawnTime: String,
  spawnDate: String,
  eventReward: String,
  eventImg: String
}
function EventCard(props: Props) {
  const { eventTitle, location, spawnTime, spawnDate, eventReward, eventImg } = props;

  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">{spawnTime}</div>
        <img className="ui avatar image" src={eventImg} alt="event-img"/> {eventTitle}
        <div className="meta">{location}</div>
      </div>
      <div className="content">
        <div className="right floated">
          {spawnDate}
        </div>
        {eventReward}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  )
}

export default EventCard;