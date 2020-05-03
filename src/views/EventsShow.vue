<template>
  <div>
    <h1>Event Info</h1>
     <h2>{{ event.name }}</h2>
      <p>{{ event.date }}</p>
      <p>{{ event.location }}</p>
      <p>{{ event.description }}</p>
      <a v-bind:href="`/events`">Back to all events</a>
      <br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event: {},
    };
  },
  created: function() {
    this.showEvent();
  },
  methods: {
    showEvent: function() {
      axios.get("api/events/" + this.$route.params.id).then(response => {
        console.log("Get one event: ", response);
        this.event = response.data;
      });
    },
  },
};
</script>