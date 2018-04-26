<template>
  <v-container class="main-view" column>
     <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
            ></v-btn>
       <v-tabs
        centered
        grow
        color="pink"
        slot="extension"
        slider-color="yellow"
      >
        <v-tab class = "main-view__option" @click="setCategory('popular')">
          Popular
        </v-tab>
         <v-tab class = "main-view__option" @click="setCategory('upcoming')">
          Upcoming
        </v-tab>
         <v-tab class = "main-view__option" @click="setCategory('topRated')">
          Top Rated
        </v-tab>
      </v-tabs>
    <v-container class = "movie-cards__container" fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs3 md2 class="" v-for="n in this.movies.movieLists.list" :key="n.id">
          <movie-card :movie-info="n" />
        </v-flex>
         <infinite-loading @infinite="infiniteHandler" spinner = "spiral"></infinite-loading>
       </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading';
import MovieCard from "./MovieCard"
export default {
  name: 'MainView',
  components: {MovieCard}, 
  data () {
    return {
      chosenCategory: 'popular'
    }
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    ...mapActions([
      "getNextPageByCategory",
      'setCategory'
    ]),
    async infiniteHandler($state) {
      await this.getNextPageByCategory(this.chosenCategory);
      $state.loaded();
      console.log("yay");
    },
    ...mapMutations([])
  },
  components: {
    InfiniteLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-view {
background-size: cover;
width: 100%;
/* height: 750px; */
/* background: url(https://images.pexels.com/photos/131637/pexels-photo-131637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center; */
background-color: rgb(31, 31, 31);
}

.movie-cards__container{
  width: 75%;
}

.movie-card {
  background-color: white;
    transition: .2s outline-color;  
  
}

.movie-card:hover {
  outline: 5px solid rgba(255, 255, 255, 0.897);
   transition: .2s outline-color;
}


.movie-card__info-cover {
  background-color: rgba(0, 0, 0, .6);
  visibility: hidden;
}

.movie-card__info-cover:hover {
  
}

.visible {
  visibility: visible; 
}

.main-view__option{
  font-size: 3vh;
  color: rgb(243, 243, 243);
   transition: .2s color;
  /* font-family: monosapace; */
}

.main-view__option:hover{
  color: #00E5FF;
  transition: .2s color;
  /* font-family: monosapace; */
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
</style>
