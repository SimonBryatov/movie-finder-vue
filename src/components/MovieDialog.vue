<template>
<v-layout row justify-center>
    <v-dialog v-model="movieDialog" max-width="500px">
      <v-card>
       <v-card-media :src="'http://image.tmdb.org/t/p/original' + observedMovieInfo.poster_path"  height="200px"></v-card-media>
        <v-card-title class="headline">{{observedMovieInfo.title}}</v-card-title>
        <v-card-text>{{observedMovieInfo.overview}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "MovieDialog",
    props: ["movieInfo"],
    data () {
        return {
            dialog: false
        }
    },
    computed: {
      movieDialog:{
        get(){ return this.$store.state.movieDialog; },
        set(){ this.$store.commit("toggleDialog", "");},
    },
     ...mapState(['observedMovieInfo'])
    }
    
}
</script>

<style>
/* .cl {
  background-color: aqua;
} */
</style>