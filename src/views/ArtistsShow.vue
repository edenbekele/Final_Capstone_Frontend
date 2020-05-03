<template>
  <div>
    <h1>Artist Info</h1>
     <h2>{{ artist.name }}</h2>
      <p>{{ artist.description }}</p>
      <p>{{ artist.bio }}</p>
      <a v-bind:href="`/artists`">Back to all artists</a>
      <br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      artist: {},
    };
  },
  created: function() {
    this.showArtist();
  },
  methods: {
    showArtist: function() {
      axios.get("api/artists/" + this.$route.params.id).then(response => {
        console.log("Get one artist: ", response);
        this.artist = response.data;
      });
    },
  },
};
</script>