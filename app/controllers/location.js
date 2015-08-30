'use strict';

import Move     from 'models/move';
import infoCtrl from 'controllers/info';

function fromHash(hash) {
  return hash.replace(/^#/, '').replace(/_/g, ' ');
}

function toHash(hash) {
  hash = hash.replace(/ /g, '_');
  if (hash[0] === '#') {
    return hash;
  } else {
    return '#' + hash;
  }
}

function update(hash) {
  var move = fromHash(hash);
  if (Move.exists(move)) {
    Move.select(move);
    infoCtrl.update();
  }
}

function set(hash) {
  window.location.hash = toHash(hash);
}

function init() {
  window.onhashchange = () => update(window.location.hash);
  update(window.location.hash);
}

export default { init, set };
