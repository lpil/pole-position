'use strict';

import Move from 'models/move';

function update() {
  var move = Move.selected();
  console.log(`The current move is ${move}`);
}

export default { update };
