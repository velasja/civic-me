import React from 'react';
import AppBar from 'material-ui/AppBar';
import { render }  from 'react-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="CivicMe"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

render(<AppBarExampleIcon/>, document.getElementById('#app');
