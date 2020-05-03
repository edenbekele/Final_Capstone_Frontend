<template>
<div class="events-index">
  <div class="container">
    <h1>Events</h1>
    <div v-for="event in events">
      <h2>{{ event.name }}</h2>
  
      <a v-bind:href="`/events/${event.id}`">More Info</a>
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
      events: [],
    };
  },
  created: function() {
    this.indexEvents();
  },
  methods: {
    indexEvents: function() {
      axios.get("/api/events").then(response => {
        console.log("View all events: ", response);
        this.events = response.data;
      });
    },
  },
};
</script>