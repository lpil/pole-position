'use strict';

import Move from 'models/move';

import searchCtrl   from 'controllers/search';
import locationCtrl from 'controllers/location';

import datalistView from 'views/datalist';

function populateDatalist() {
  var body = document.querySelector('body'),
      html = datalistView({ listID: 'moves-list', list: Move.allNames });
  body.insertAdjacentHTML('beforeend', html);
}

export default function app() {
  populateDatalist();
  searchCtrl.init();
  locationCtrl.init();
}
