'use strict';

var React = require('react/addons'),
    ComponentsList = require('./components/ComponentsList')();

// Navigation Menu + Buttons
React.render(
  ComponentsList.navigation_menu,
  document.getElementById('navigationMenu')
);

React.render(
  ComponentsList.navigation_buttons,
  document.getElementById('navigationBtn')
);

React.render(
  ComponentsList.navigation_title,
  document.getElementById('navigationTitle')
);
