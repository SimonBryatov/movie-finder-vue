<template>
  <v-card class="movie-card" height="20vw" width="100%" hover @mouseover="visible = true" @mouseleave="visible = false">
    <v-card-media :src="'http://image.tmdb.org/t/p/w500' + this.movieInfo.poster_path" height=100% width="100%">
      <v-container v-if="visible" class="movie-card__info-cover" @click="toggleDialog(movieInfo)" fluid fill-height>
        <v-layout column>
            <v-flex xs10>
          <div class="subheading">{{this.movieInfo.title}}</div>
            </v-flex>
            <v-flex xs3></v-flex>
            <v-flex xs5>
            <v-layout width="100%" column>
                <v-flex>
              <v-btn flat color="green darken-1">Explore</v-btn>
                </v-flex>
                <v-flex>
              <v-btn flat color="green darken-1" @click.stop="addBookmark()">
                <v-icon large>{{this.isBookmarked ? "bookmark" : "bookmark_border"}}</v-icon>
              </v-btn>
              </v-flex>
              </v-layout>
            </v-flex>
            
      </v-layout>
      </v-container>
    </v-card-media>
    <!-- <v-card-actions>
       <v-btn flat color="green darken-1" @click="toggleDialog(movieInfo)">Explore</v-btn>
              <v-btn flat color="green darken-1" @click="addBookmark()">
                <v-icon large>{{this.isBookmarked ? "bookmark" : "bookmark_border"}}</v-icon>
              </v-btn>
    </v-card-actions> -->
  </v-card>
</template>



<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "MovieCard",
    props: ["movieInfo", "openDialog"],
    data() { 
        return {
        visible: false,
        isBookmarked: false
        }
    }, 
    methods: {
        addBookmark () {
            this.isBookmarked = true;
            console.log(213)
        },
        ...mapMutations(['toggleDialog'])
    }
}
</script>

<style>
.movie-card {
  background-color: white;
    transition: .2s outline-color;  
  
}

.movie-card:hover {
  outline: 2px solid rgba(255, 255, 255, 0.897);
   transition: .2s outline-color;
}


.movie-card__info-cover {
  background-color: rgba(0, 0, 0, 0.808) !important;
  color: white !important;
  /* width: 100% !important; */
  /* height: 100% !important; */
  /* display: none !important; */
}

.movie-card__info-cover:hover {
}

.card-actions__container {
  background-color: white;
}

.visible {
  display: flex !important;;
}
</style>