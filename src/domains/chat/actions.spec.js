import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import { thunk } from '~/store/configureStore';
import * as actions from './actions';
import actionTypes from './actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Chat actions', () => {
  let store;
  let initialState;
  let expectedActions;

  beforeEach(() => {
    initialState = {
      username: '',
      members: [],
      messages: []
    };
  });

  describe('setUserName()', () => {
    beforeEach(() => {
      store = mockStore(initialState);
    });

    context('when the games are retrieved successfully', () => {
      beforeEach(() => {
        expectedActions = [{ type: actionTypes.SET_USER_NAME, username: 'lucas' }];
        return store.dispatch(actions.setUserName({ username: 'lucas' }));
      });

      it('executes the expected actions', () => (
        expect(store.getActions()).to.deep.equal(expectedActions)
      ));
    });
  });
});
