<template>
<div class="artists-index">
  <div class="container">
    <h1>Artists</h1>
    <div v-for="artist in artists">
      <h2>{{ artist.name }}</h2>
  
      <a v-bind:href="`/artists/${artist.id}`">More Info</a>
      <br>
      <br>
    </div>
  </div>
</div>
</template>


<style>
</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      artists: [],
    };
  },
  created: function() {
    this.indexArtists();
  },
  methods: {
    indexArtists: function() {
      axios.get("/api/artists").then(response => {
        console.log("View all artists: ", response);
        this.artists = response.data;
      });
    },
  },
};
</script>