'use strict';

import _     from 'lodash';
import moves from 'moves';

describe(`Moves listed as "next"`, () => {
  it('must only contain moves that exist in the move list', () => {
    var nexts = _.chain(moves)
                 .map(move => move.next)
                 .flatten()
                 .compact()
                 .value();
    nexts.forEach(moveName => {
      expect(moves[moveName]).toBeDefined(`${moveName} is not a known move`);
    });
  });
});
