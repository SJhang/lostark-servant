import React from 'react';
import EventCard from "./EventCard";

type Props = { events: Object };
class EventTimer extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  renderEventCards = () => {
    this.props.events.map((el: Object) => {
      return (
        <React.Fragment>

        </React.Fragment>
      )
    })
  };

  render() {
    return (
      <div>
        {this.renderEventCards()}
      </div>
    );
  }
}

export default EventTimer;