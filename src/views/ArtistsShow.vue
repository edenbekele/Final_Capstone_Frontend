<template>
  <div class="artist-show">
    <section class="page-section about-heading">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" v-bind:src="`/img/${artist.image}`" alt="" />
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">Category?</span>
                  <span class="section-heading-lower">About {{ artist.name }}</span>
                </h2>
                <p>
                  {{ artist.description }}
                </p>
                <p class="mb-0">
                  {{ artist.bio }}
                </p>
                <br />
               <button v-on:click="favoriteArtist(artist)" v-if="!artist.favorite">Favorite</button>
               <button v-on:click="unfavoriteArtist(artist)" v-if="artist.favorite">Unfavorite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    favoriteArtist: function(artist) {
      var params = {
        id: artist.id,
        name: artist.name,
        description: artist.description,
        bio: artist.bio,
        image: artist.image,
      };
      axios.post("api/favorited_artists", params).then(response => {
        console.log("Favorite an artist: ", response);
        this.artist.favorite = true;
      });
    },
    unfavoriteArtist: function(artist) {
      axios.delete("api/unfavorite/" + artist.id).then(response => {
        console.log("Unfavorite an artist: ", response);
        this.artist.favorite = false;
      });
    },
  },
};
</script>


// web request to get fav artists & artist.fav to true & auto refresh 
// delete request to back end to unfav artist
// artist.fav need ot be set to true or false