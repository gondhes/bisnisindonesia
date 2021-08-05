const initialState = {
  data: []
}

function articleReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'articles/setArticles') {
    return { ...state, data: payload }
  } 
  return state
}

export default articleReducer
