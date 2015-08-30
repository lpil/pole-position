'use strict';

import _ from 'lodash';

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

var names = _.keys(all);

export default { all, names };
