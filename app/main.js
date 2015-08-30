'use strict';

import moves        from 'models/moves';
import datalistView from 'views/datalist';

function populateDatalist() {
  var body = document.querySelector('body'),
      html = datalistView({ listID: 'moves-list', list: moves.names });
  body.insertAdjacentHTML('beforeend', html);
}

export default function app() {
  populateDatalist();
}
