import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let home;
  let onEditGame;

  beforeEach(() => {
    onEditGame = sandbox.spy();
  });

  context('when the user is not editing or creating a game', () => {
    beforeEach(() => {
      home = shallow(
        <Home
          homeTitle={'hola'}
          onEditGame={onEditGame}
        />
      );
    });

    it('renders the title', () => {
      home.find('h1').text().should.eql('React Node Template');
    });
  });
});
