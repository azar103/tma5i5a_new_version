import {GET_RECIPES} from '../actions/actionTypes';

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
