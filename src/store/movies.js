import movies from 'themoviedb-javascript-library'

movies.common.api_key = '096b038054f533fbebc17d8270c01387'
movies.common.base_uri = 'https://api.themoviedb.org/3/'
movies.common.images_uri = 'https://image.movies.org/t/p/'
export default {
//   namespaced: true,
  state: {
    chosenCategory: 'popular',
    movieLists: {
      pagesLoaded: 0,
      list: []
    }
  },
  mutations: {
    updateSearchString (state, value) {
      state.searchString = value
    },
    updateSearchResults (state, value) {
      state.searchResults = JSON.parse(value).results
    },
    updateMoviesList (state, data) {
    //   console.log(this.state.movieLists)
      state.movieLists.list.push(...data)
      state.movieLists.pagesLoaded++
    },
    updateCategory (state, value) {
      state.chosenCategory = value
      state.movieLists.list = []
      state.movieLists.pagesLoaded = 0
    }
  },

  getters: {
    getPopularMovies: (state) => {

    }
  },

  actions: {
    searchMovieByName(ctx, mName) {
      mName = encodeURI(mName)
      console.log(mName)
      let cbSuccess = (res) => {
        ctx.commit("updateSearchResults", res)
      }
      let cbError = (err) => {

      }
      movies.search.getMovie({"query": mName}, cbSuccess, cbError)  
    },

    setCategory ({state, commit, dispatch}, category) {
      commit('updateCategory', category)
      dispatch('getNextPageByCategory', category)
    },
    getNextPageByCategory (ctx, category) {
      return new Promise(resolve => {
        switch (category) {
          case 'popular':
            movies.movies.getPopular({page: ctx.state.movieLists.pagesLoaded + 1}, (data) => {
            // console.log(category)
              ctx.commit('updateMoviesList', JSON.parse(data).results)
              resolve()
            }, () => {})
            break
          case 'upcoming':
            movies.movies.getUpcoming({page: ctx.state.movieLists.pagesLoaded + 1}, (data) => {
            // console.log(category)
              ctx.commit('updateMoviesList', JSON.parse(data).results)
              resolve()
            }, () => {})
            break
          case 'topRated':
            movies.movies.getTopRated({page: ctx.state.movieLists.pagesLoaded + 1}, (data) => {
            // console.log(category)
              ctx.commit('updateMoviesList', JSON.parse(data).results)
              resolve()
            }, () => {})
            break
        }
      }
      )
    }
  }
}
