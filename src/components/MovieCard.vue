<template>
 <v-card class="movie-card" height="30vh" hover @onmouseover>
        <v-card-media :src="'http://image.tmdb.org/t/p/w500' + movie-info.poster_path" height="100%">
         <v-card class="movie-card__info-cover" width="100%" height="100%">
         </v-card>
        </v-card-media>
       </v-card>
</template>

<script>
export default {
    name: "movie-card",
    props: ["movie-info"],
    data() {
        visible: false;
    }
}
</script>

<style>

</style>