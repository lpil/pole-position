'use strict';

import Move from 'models/move';
import view from 'views/info';

var dom = document.querySelector('.info');

function update() {
  var name = Move.selected(),
      move = Move.get(name),
      html = view({ name, move });
  dom.innerHTML = html;
}

export default { update };
