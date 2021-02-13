describe('A Game of Bowling', function() {
  it('hits no pins', function() {
    var game = new Game();
    expect(game.roll(0)).toEqual(0);
  });

  it('rolls a frame of 0, 1', function() {
    var game = new Game;
    game.roll(0);
    expect(game.roll(1)).toEqual(1);
  });
});
