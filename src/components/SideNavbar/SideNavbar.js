/* eslint react/prop-types: 0 */
import * as React from 'react'
import { Link } from "react-router-dom";
import { Sidebar, Menu, Input } from 'semantic-ui-react';

type Props = {
  children: React.Element<'div'>,
  onClickToggleSideNav: Function,
  visible: boolean
};
function SideNavbar(props: Props) {

  const { visible, children, onClickToggleSideNav } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        vertical
        visible={visible}
      >
        <Menu.Item>
          <h2>Lost Ark Servant</h2>
        </Menu.Item>
        <Menu.Item>
          <Input placeholder="Search" />
        </Menu.Item>
        <Menu.Item>
          <b>Calendar</b>
          <Menu.Menu>
            <Menu.Item as={Link} to="/">Landing</Menu.Item>
            <Menu.Item as={Link} to="/2">Landing2</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <b>Map</b>
          <Menu.Menu>
            <Menu.Item as={Link} to="/east">east</Menu.Item>
            <Menu.Item as={Link} to="/west">west</Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <b>Character</b>
          <Menu.Menu>
            <Menu.Item as={Link} to="/character">My Character</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item bottom="true">
          <Menu.Item>Developed by bbongg</Menu.Item>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible} onClick={visible ? onClickToggleSideNav : null}>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SideNavbar;