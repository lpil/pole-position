'use strict';

import _     from 'lodash';
import Move from 'models/move';

var nexts = _.chain(Move.all)
             .map(move => move.next)
             .flatten()
             .compact()
             .value();

describe('moves listed as "next"', () => {
  it('must only contain moves that exist in the move list', () => {
    nexts.forEach(move => {
      expect(Move.all[move]).toBeDefined(`${move} is not a known move`);
    });
  });
});


describe('.allNames', () => {
  it('should be an array of move names', () => {
    expect(Move.allNames).toContain('Monkey');
  });

  it('should be the same size as Move.all', () => {
    var expectedLength = _.keys(Move.all).length;
    expect(Move.allNames.length).toBe(expectedLength);
  });
});


describe('.exists()', () => {
  it('should return true for a real move name', () => {
    expect(Move.exists('Monkey')).toBe(true);
  });

  it('should return false for an unknown name', () => {
    expect(Move.exists('foobar')).toBe(false);
  });
});

describe('.select() & .selected', () => {
  it('should retain state', () => {
    expect(Move.selected()).not.toBe('Hello');
    Move.select('Hello');
    expect(Move.selected()).toBe('Hello');
  });
});

describe('.get()', () => {
  it('is a shorthand for all[]', () => {
    var monkey = Move.all['Monkey Sunwheel'];
    expect(Move.get('Monkey Sunwheel')).toBe(monkey);
  });
});
