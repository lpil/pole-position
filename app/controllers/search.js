'use strict';

import Move     from 'models/move';
import location from 'controllers/location';

var search = document.querySelector('.search');

function update() {
  var move = search.value;
  if (Move.exists(move)) {
    Move.select(move);
    location.set(move);
  }
}

function init() {
  search.oninput = update;
}

export default { init };
