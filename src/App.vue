<template>
  <div id="app">
    <v-app>
    <v-layout column> 
    <Header />
    <MainView />
    <!-- <movie-card >asdasdsd</movie-card> -->
    </v-layout>
    </v-app>
  </div>
</template>

<script>
import MainView from './components/MainView'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
// console.log("Movie", MovieCard)
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
   Header, MainView, MovieCard
  },

  methods: {...mapActions(['getNextPageByCategory'])
    },
  created() {
    // this.$store.dispatch("getPopularMovies");
    this.getNextPageByCategory("popular");
  }
}
</script>

<style>
body {
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #06e023;
}
</style>
