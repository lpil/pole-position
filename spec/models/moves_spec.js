'use strict';

import _     from 'lodash';
import moves from 'models/moves';

var nexts = _.chain(moves.all)
             .map(move => move.next)
             .flatten()
             .compact()
             .value();

describe('moves listed as "next"', () => {
  it('must only contain moves that exist in the move list', () => {
    nexts.forEach(move => {
      expect(moves.all[move]).toBeDefined(`${move} is not a known move`);
    });
  });
});

describe('.names', () => {
  it('should be an array of move names', () => {
    expect(moves.names).toContain('Monkey');
  });

  it('should be the same size as moves.all', () => {
    var expectedLength = _.keys(moves.all).length;
    expect(moves.names.length).toBe(expectedLength);
  });
});
