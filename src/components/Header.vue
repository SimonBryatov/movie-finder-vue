<template>
<v-parallax class = "header header__image" src="https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
    <v-container fill-height class = "">
      <v-layout row wrap>
        <v-flex class="header__content">
          <h3 class="display-3">Muvie</h3>
          <span class="subheading">{{quote}}</span>
          <v-divider class="my-3"></v-divider>
          <v-menu dark offset-y class= "search-field__container" transition="slide-y-reverse-transition">
            <input v-model="searchString" type="text" slot="activator" class="search-field" placeholder="Search for awesome movies"/>
      <v-list>
        <v-list-tile v-for="n in 4" :key="n">
          <v-list-tile-title>{{ n }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
import {mapState} from "vuex";
const movieQuotes = require('movie-quotes');
export default {
  name: 'Header',
  data () {
    return {
      quote: ''
    }
  },
  computed: {
    ...mapState({
      showMovieCard: 'showMovieCard'
    }),
    searchString: {
    get () {
      return this.$store.state.searchString
    },
    set (value) {
      this.$store.commit('updateSearchString', value)
    }
  }
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
  width: 17vw;
}
/* .header__image {
  background: no-repeat center center;
 }  */
</style>