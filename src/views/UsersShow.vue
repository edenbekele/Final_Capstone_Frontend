<template>
  <div class="container">
    <br />
    <br />
    <h1>
      <strong>{{ user.name }}'s Favorited Artists</strong>
    </h1>
    <center>
      <br />
      <br />
      <br />
      <div data-aos="fade-down"
      class="card-columns">
        <div v-for="artist in user.artists" class="card">
          <img v-bind:src="`/img/${artist.image}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ artist.name }}</h5>
            <p class="card-text">{{ artist.description }}</p>
          </div>
          <a class="btn btn-primary btn-xl" v-bind:href="`/artists/${artist.id}`">More Info</a>
          <br />
          <br />
        </div>
      </div>
    </center>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      artist: [],
    };
  },
  created: function() {
    this.showUser();
  },
  methods: {
    showUser: function() {
      axios.get("/api/users/" + this.$route.params.id).then(response => {
        this.user = response.data;
        console.log(this.user);
      });
    },
  },
};
</script>
