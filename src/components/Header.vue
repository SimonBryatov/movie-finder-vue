<template>
<v-parallax class = "header header__image" src="https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
    <v-container fill-height class="header__content">
      <v-layout column >
        <v-flex xs4 />
        <v-flex xs1>
          <h3 class="display-3">Muvie</h3>
        </v-flex>
        <v-flex xs1>
        </v-flex>
        <v-flex xs1 fluid fill-height>
          <span class="subheading">{{quote}}</span>
           </v-flex>
            <v-flex xs1>
        </v-flex>
          <v-flex xs1 >
          <v-divider class="my-3"></v-divider>
          <v-menu dark offset-y class= "search-field__container" transition="slide-y-reverse-transition">
            <input v-model="searchString" type="text" slot="activator" class="search-field" placeholder="Search for awesome movies"/>
      <v-list>
        <v-list-tile :res="this.movies.searchResults" v-for="n in res" :key="n">
          <v-list-tile-title>{{ n.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
     </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
import {mapState, mapActions} from "vuex";
import _ from "lodash"
const movieQuotes = require('movie-quotes');
export default {
  name: 'Header',
  data () {
    return {
      quote: ''
    }
  },
  computed: {
    ...mapState([
     'showMovieCard',
      'movies'
    ]),
    searchString: {
    get () {
      return this.$store.state.searchString
    },
    set:
      // this.$store.commit('updateSearchString', value)
       _.debounce(function(val) {this.$store.dispatch('searchMovieByName', val)}, 200)
    },
  },
  created () {
    this.quote = movieQuotes.random();
  },
}
</script>

<style>
.header {
    /* top: 0px; */
    color: rgb(255, 255, 255);
    font-size: 30px;
    height: 40vmin !important;
}

.header__content{
background: linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7));
}
.header h3 {
  font-size: 90px !important;
}
.search-field__container{
  /* width: 7vh; */
}
.search-field {
  background-color: rgba(255, 255, 255, 0.178);
  text-align: center;
  width: 60vw;
}
/* .header__image {
  background: no-repeat center center;
 }  */
</style>