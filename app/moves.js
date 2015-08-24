'use strict';

var moves = {

  monkey: {
    name: 'Monkey',
    next: [
      'monkeyBackhook',
      'monkeyWronghook',
      'monkeySunwheel',
    ],
  },

  monkeyBackhook: {
    name: 'Monkey Backhook',
  },
  
  monkeyWronghook: {
    name: 'Monkey Wronghook',
  },
  
  monkeySunwheel: {
    name: 'Monkey Sunwheel',
  }
};

export default moves;
