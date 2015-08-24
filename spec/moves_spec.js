'use strict';

import moves from 'moves';

var nexts;

function forEachMove(fun) {
  for (var name in moves) {
    if (moves.hasOwnProperty(name)) { 
      fun(moves[name]);
    }
  }
}

function forEachNext(move, fun) {
  var i;
  nexts = move.next;
  if (nexts) { 
    i = nexts.length;
    while (i--) {
      fun(nexts[i]);
    }
  }
}

describe(`Moves listed as "next"`, () => {
  it('must only contain moves that exist in the move list', () => {
    forEachMove(move => {
      forEachNext(move, (x) => {
        if (!moves[x]) {
          // Hacky. I don't like JS.
          expect(`${x} is in the moves list`).toBe(true);
        }
      });
    });
  });
});
