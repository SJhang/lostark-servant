import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

import DigitalClock from "../common/DigitalClock/DigitalClock";

type Props = {
  visible: boolean,
  onClickToggleSideNav: Function
}
function Header(props: Props) {
  const { onClickToggleSideNav, visible } = props;

  return (
    <Menu attached inverted top="true" size="mini">
      <Menu.Item icon={visible ? "caret left" : "caret right"} onClick={onClickToggleSideNav}/>
      <Menu.Item>
        <DigitalClock/>
      </Menu.Item>
      <Menu.Item>
        <div className="ui icon labeled button">
          <i className="camera retro icon"/>
          <span className="text">Screenshot</span>
        </div>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item icon="bell"/>
          <Dropdown item icon="ellipsis vertical" floating>
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Header>Created by bbongg</Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

export default Header;