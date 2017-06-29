import { RECIVE_SEARCH } from '../actions/search_action';

const SearchReducer = (state = {}, action) => {
    switch(action.type){
      case RECIVE_SEARCH:
        return action.projects;
      default:
        return state;
    }
  };

  export default SearchReducer;
