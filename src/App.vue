<template>
  <div id="app">
    <v-app>
    <v-container class="app__container" fluid fill-height>
    <v-layout class="app__layout" row wrap> 
    <v-flex xs12>
    <Header />
    </v-flex>
    <v-flex xs12>
    <MainView />
    </v-flex>
    <v-btn color="pink" dark md fixed bottom right fab @click="$vuetify.goTo(0)"><v-icon>keyboard_arrow_up</v-icon></v-btn>
    <!-- <movie-card >asdasdsd</movie-card> -->
    </v-layout>
    </v-container>
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
   Header, MainView
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
.app__container {
  padding: 0;
}
</style>
