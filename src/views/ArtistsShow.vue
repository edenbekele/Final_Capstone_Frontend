<template>
  <div class="artist-show">
    <section class="page-section about-heading">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/about.jpg" alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h1>Artist Info</h1>
    <h2>{{ artist.name }}</h2>
    <p>{{ artist.description }}</p>
    <p>{{ artist.bio }}</p>
    <a v-bind:href="`/artists`">Back to all artists</a>
    <br />
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
