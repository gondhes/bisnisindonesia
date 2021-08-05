import axios from 'axios'

let baseUrl = 'http://localhost:4000'

export function setArticles(payload) {
  return { type: 'articles/setArticles', payload }
}

export function setArticlesAsync() {
  const url = baseUrl + '/articles'

  return (dispatch) => {
    axios({
      method: 'GET',
      url
    })
      .then(({data}) => {
        dispatch(setArticles(data))
      })
      .catch(err => console.log(err))
  }
}