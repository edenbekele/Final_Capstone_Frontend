<template>
  <div class="artist-show">
    <section class="page-section about-heading">
      <div class="container">
        <center>
          <div id="carouselExampleControls" class="carousel slide">
          <div class="carousel-inner">
            <div v-for="(image, idx) in artist.images" class="carousel-item" :class="{ active: idx==0 }">
              <img v-bind:src="`/img/${image.image}`" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </center>
          <div v-for="song in artist.songs" class="song-container">
              <div class="song-name">
                <h4>{{song.name}}</h4>
                <mini-audio class="mini-audio" v-bind:src="`/img/${song.file}`"></mini-audio>
              </div>
          </div>
        <br />
        <br />

        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <br />
                <h2 class="section-heading mb-4">
                  <span class="section-heading-lower">About {{ artist.name }}</span>
                </h2>
                <p>
                  {{ artist.description }}
                </p>
                <p class="mb-0">
                  {{ artist.bio }}
                </p>
                <br>
                <a class="btn btn-primary btn-xl" v-bind:href="`/artists`">Back to all artists</a>

                <br />
                <button v-on:click="favoriteArtist(artist)" v-if="!artist.favorited">☆</button>
                <button v-on:click="unfavoriteArtist(artist)" v-if="artist.favorited">★</button>
                <!-- <link rel="stylesheet" href="artist.instagram">  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.carousel-inner {
  height: 40em;
  width: 40em;
}
.carousel-item {
  height: 40em;
  width: 40em;
}
.song-container {
  height: 15em;
  width: 40em;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 400px;
}
h4 {
  text-align: center;
  padding-left: 100px;
}
</style>

<script>
import axios from "axios";
import Vue from "vue";
import VueAudio from "vue-audio-better";

Vue.use(VueAudio);

export default {
  data: function() {
    return {
      artist: {},
      artists: [],
      image: {},
    };
  },

  created: function() {
    this.showArtist();
  },
  mounted: function() {
    $(".carousel").carousel();
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
        artist_id: artist.id,
      };
      axios
        .post("api/favorited_artists", params)
        .then(response => {
          console.log("Favorite an artist: ", response);
          this.artist.favorited = true;
        })
        .catch(error => console.log(error.response));
    },
    unfavoriteArtist: function(artist) {
      axios
        .delete("api/unfavorite/" + artist.id)
        .then(response => {
          console.log("Unfavorite an artist: ", response);
          this.artist.favorited = false;
        })
        .catch(error => console.log(error.response));
    },
  },
};
</script>

// web request to get fav artists & artist.fav to true & auto refresh // delete request to back end to unfav artist //
artist.fav need ot be set to true or false
