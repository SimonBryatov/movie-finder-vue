<template>
  <v-card class="movie-card" height="20vw" width="100%" hover @mouseover="visible = true" @mouseleave="visible = false">
    <v-card-media :src="'http://image.tmdb.org/t/p/w500' + this.movieInfo.poster_path" height="100%" width="100%">
      <v-container :class="{'visible': visible, 'movie-card__info-cover': true}" fill-height fluid justify-center>
        <v-layout column fill-height>
            <v-flex>
            <span class="title"> {{this.movieInfo.title}}</span>
            </v-flex>
          
            <v-layout row>
              <v-btn flat color="orange" @click="openDialog(this.movieInfo)">Explore</v-btn>
              <v-btn flat color="orange" @click="addBookmark()">
                <v-icon large>{{this.isBookmarked ? "bookmark" : "bookmark_border"}}</v-icon>
              </v-btn>
              </v-layout>
            
  </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
</template>



<script>
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
        }
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
  background-color: rgba(0, 0, 0, .6) !important;
  color: white !important;
  display: none !important;
}

.movie-card__info-cover:hover {
}

.visible {
  display: flex !important;;
}
</style>