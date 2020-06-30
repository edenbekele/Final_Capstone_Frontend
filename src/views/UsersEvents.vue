<template>
<div class="users-events">
  <div class="container">
  <h2 v-if="user.name != null">
      {{ user.name }}'s Saved Events
  </h2>
    <center>
      <br />
      <br />
      <br />
     <div data-aos="fade-down"
      class="card-columns">
        <div v-for="event in user.events" class="card">
          <img v-bind:src="`/img/${event.image}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text">{{ event.description }}</p>
          </div>
          <a class="btn btn-primary btn-xl" v-bind:href="`/events/${event.id}`">More Info</a>
          <br />
          <br />
        </div>
      </div>
    </center>
    <br />
  </div>
  </div>
</template>

<style>
.users-show h2 {
  background-color: rgba(0, 0, 0, 0.65);
  margin-top: 1rem;
  margin-bottom: 5rem;
  margin-right: 23em;
  margin-left: -5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  text-transform: uppercase;
  line-height: 1;
  font-family: "Raleway";
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      event: [],
    };
  },
  created: function() {
    this.myEvents();
  },
  methods: {
    myEvents: function() {
      axios.get("/api/artist_events/").then(response => {
        this.user = response.data;
        console.log(this.user);
      });
    },
  },
};
</script>