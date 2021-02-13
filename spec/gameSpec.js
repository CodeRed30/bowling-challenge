describe('A Game of Bowling', function() {
  it('hits no pins', function() {
    var game = new Game();
    expect(game.roll(0)).toEqual(0);
  });
});
