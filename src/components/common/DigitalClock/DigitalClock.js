import React from 'react';
import moment from 'moment-timezone';
import { Popup } from 'semantic-ui-react';
import Clock from "./Clock";

class DigitalClock extends React.Component {
  constructor() {
    super();
    this.state = {
      now: moment(),
      timeZone: 'Asia/Seoul'
    };

    this.getCurrentTimeZoneAbbr();
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentTimeZoneAbbr() {
    const localTimezone = moment.tz.guess();
    return localTimezone === 'Asia/Seoul' || this.setState({ timeZone: localTimezone })
  }

  tick = () => {
    const { now } = this.state;
    this.setState({ now: now.add('1', 'seconds') });
  };

  parseTimeZone = (timeZone: String) => {
    if (timeZone.includes("Seoul")) return "Seoul";
    return timeZone.split("/")[1];
  };

  renderLocalTime = () => {
    const { now, timeZone } = this.state;

    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const currentMoment = timeZone.includes("Seoul") ? now : moment(now).tz("Asia/Seoul");

    return (
      <Popup
        trigger={
          <Clock
            hour={currentMoment.hour()}
            min={currentMoment.minute()}
            sec={currentMoment.second()}
            time={currentMoment.format('A')}
          />
        }
        position="bottom left"
        header='대한민국'
        content={`${currentMoment.year()}.${currentMoment.month()}.${currentMoment.date()} ${days[currentMoment.day()]}`}
        on={['hover', 'click']}
      />
    )
  };

  render() {
    return (
      <React.Fragment>
        {this.renderLocalTime()}
      </React.Fragment>
    )
  }
}

export default DigitalClock;