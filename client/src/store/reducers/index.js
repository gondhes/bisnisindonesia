import { combineReducers } from 'redux'
import articles from './articlesReducer'

const reducer = combineReducers({
  articles,
})

export default reducer
