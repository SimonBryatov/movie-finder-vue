<template>
<div>
 <v-card class="movie-card" height="30vh" hover @mouseover="visible = true" @mouseleave="visible = false">
        <v-card-media :src="'http://image.tmdb.org/t/p/w500' + this.movieInfo.poster_path" height="100%">
         <v-card :class="{'visible': this.visible, 'movie-card__info-cover': true}" width="100%" height="100%">
             {{this.movieInfo.title}}
         </v-card>
        </v-card-media>
       </v-card>
</div>      
</template>

<script>
export default {
    name: "MovieCard",
    props: ["movieInfo"],
    data() { 
        return {
        visible: false
        }
    }
}
</script>

<style>

</style>