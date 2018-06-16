import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import movies from './movies'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  modules: {
    movies: movies
  },
  state: {
    showMovieCard: false,
    searchString: '',
    searchResults: {},
    movieDialog: false,
    observedMovieInfo: '',
    popularMovies: {}
  },
  mutations: {
    toggleDialog (state, info) {
      state.movieDialog = !state.movieDialog
      state.observedMovieInfo = info
    }
  }

})
