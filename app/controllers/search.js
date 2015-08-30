'use strict';

import Move     from 'models/move';
import infoCtrl from 'controllers/info';

var search = document.querySelector('.search');

function update() {
  var move = search.value;
  if (Move.exists(move)) {
    Move.select(move);
    infoCtrl.update();
  }
}

function init() {
  search.oninput = update;
}

export default { init };
