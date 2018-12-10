import React from 'react';
import { Progress, Card, Image, Dimmer } from 'semantic-ui-react';

type Props = {
  eventTitle: String,
  spawnTime: Array,
  spawnDate: String,
  rewards: Array,
  eventImg: String,
  itemLevel: String,
  location: Array
}
function EventCard(props: Props) {
  const { eventTitle, spawnTime, spawnDate, rewards, eventImg, itemLevel, location } = props;

  return (
    <React.Fragment>
      <Card raised>
        <Card.Content>
          <Card.Header>{eventTitle}</Card.Header>
          <Card.Meta>{spawnDate}</Card.Meta>
          <Card.Description>
            {spawnTime}
          </Card.Description>
          <Card.Description>
            {`${rewards} ${location} ${itemLevel}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Dimmer.Dimmable>
            <Image floated="right" size="mini" src={eventImg}/>
            {/* <Dimmer active={} onClickOutside={}/> */}
          </Dimmer.Dimmable>
        </Card.Content>
      </Card>
      <Progress attached="bottom"/>
    </React.Fragment>
  )
}

export default EventCard;