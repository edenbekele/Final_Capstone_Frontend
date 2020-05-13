<template>
  <div class="favorited-artists-index">
    {{ favorited_artists }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      favorited_artists: [],
    };
  },
  created: function() {
    this.indexFavoritedArtists();
  },
  methods: {
    indexFavoritedArtists: function() {
      axios.get("/api/favorited_artists").then(response => {
        console.log("View all favorited artists: ", response);
        this.favorited_artists = response.data;
      });
    },
  },
};
</script>