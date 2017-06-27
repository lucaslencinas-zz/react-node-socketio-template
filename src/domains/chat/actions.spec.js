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
      user: {},
      members: [],
      messages: []
    };
  });

  describe('setUser()', () => {
    beforeEach(() => {
      store = mockStore(initialState);
    });

    context('when the games are retrieved successfully', () => {
      beforeEach(() => {
        expectedActions = [{ type: actionTypes.SET_USER, user: { name: 'lucas' } }];
        return store.dispatch(actions.setUser({ user: { name: 'lucas' } }));
      });

      it('executes the expected actions', () => (
        expect(store.getActions()).to.deep.equal(expectedActions)
      ));
    });
  });
});
