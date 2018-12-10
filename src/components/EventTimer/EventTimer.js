import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import { getRequest } from "../../api/api.mock";
import EventCard from "./EventCard";

class EventTimer extends React.Component {
  constructor() {
    super();

    this.state = { events: [] };
  }

  componentDidMount() {
    getRequest('/events').then((res: Object) => this.setState({ events: res.data.events }));
  }

  renderEventCards = () => {
    const { events } = this.state;

    return events.map((el: Object) => {
      console.log(el);
      return <EventCard {...el} key={el.id}/>;
    });
  };

  render() {
    return (
      <Card.Group as={Segment} itemsPerRow={3}>
        {this.renderEventCards()}
      </Card.Group>
    );
  }
}

export default EventTimer;