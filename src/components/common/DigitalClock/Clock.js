import React from 'react';
import { Statistic } from 'semantic-ui-react';

type Props = {
  hour: number,
  min: number,
  time: String
}
function Clock(props: Props) {
  const { hour, min, time } = props;

  const padding = (int: number) => Math.floor(int / 10) === 0 ? `0${int}` : int;
  const parseHour = (int: number) => padding(int % 12) || 12;

  return (
    <Statistic size="mini" inverted>
      <Statistic.Value>
        {`${time} ${parseHour(hour)}:${padding(min)}`}
      </Statistic.Value>
    </Statistic>
  )
}

export default Clock;