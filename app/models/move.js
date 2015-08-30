'use strict';

import _ from 'lodash';

var currentlySelected;

var all = {

  'Monkey': {
    next: [
      'Monkey Backhook',
      'Monkey Wronghook',
      'Monkey Sunwheel',
    ],
  },

  'Monkey Backhook': {
  },

  'Monkey Wronghook': {
  },

  'Monkey Sunwheel': {
  }
};

var allNames = _.keys(all);

function exists(name) {
  return all[name] !== undefined;
}

function select(move) {
  currentlySelected = move;
}

function selected() {
  return currentlySelected;
}

function get(name) {
  return all[name];
}

export default { get, all, allNames, exists, select, selected };
