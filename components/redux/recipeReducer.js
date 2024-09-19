import {
  GET_POPULAR_RECIPES,
  GET_POPULAR_RECIPES_ERROR,
  GET_POPULAR_RECIPES_SUCCESS,
  GET_TRENDING_RECIPES,
  GET_TRENDING_RECIPES_ERROR,
  GET_TRENDING_RECIPES_SUCCESS,GET_RECOMMENDED_RECIPES,GET_RECOMMENDED_RECIPES_SUCCESS,GET_RECOMMENDED_RECIPES_ERROR
} from "./action";

const initialState = {
  loading: false,
  popularRecipes: [],
  trendingRecipes: [],
  recommendedRecipes:[],
  error: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_RECIPES:
      return { ...state, loading: true, error: null };
    case GET_POPULAR_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularRecipes: action.payload,
        error: null,
      };
    case GET_POPULAR_RECIPES_ERROR:
      return { ...state, loading: false, error: action.payload };
    //trending
    case GET_TRENDING_RECIPES:
      return { ...state, loading: true, error: null };
    case GET_TRENDING_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        trendingRecipes: action.payload,
        error: null,
      };
    case GET_TRENDING_RECIPES_ERROR:
      return { ...state, loading: false, error: action.payload };

      // recommened recipes
      case GET_RECOMMENDED_RECIPES:
        return { ...state, loading: true, error: null };
      case GET_RECOMMENDED_RECIPES_SUCCESS:
        return {
          ...state,
          loading: false,
          recommendedRecipes: action.payload,
          error: null,
        };
      case GET_RECOMMENDED_RECIPES_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
