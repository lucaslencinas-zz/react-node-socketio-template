import selectors from './selectors';

describe('Chat Selectors', () => {
  let state;

  beforeEach(() => {
    state = { username: 'lucas' };
  });

  it('the username retrieves the username string', () => {
    selectors.username(state).should.eql('lucas');
  });
});
