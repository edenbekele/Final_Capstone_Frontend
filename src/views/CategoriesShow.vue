<template>
  <div>
    <h1>{{ category.name }}</h1>
    <br />
    <div v-for="artist in category.artists">
      <h2>{{ artist.name }}</h2>
      <br />
      <h4>{{ artist.image }}</h4>
      <br />
      <h4>{{ artist.description }}</h4>
      <br />
      <a v-bind:href="`/artists/${artist.id}`">View More</a>
    </div>
    <br />
    <a v-bind:href="`/categories`">Back to all categories</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: {},
    };
  },
  created: function() {
    this.showCategory();
  },
  methods: {
    showCategory: function() {
      axios.get("/api/categories/" + this.$route.params.id).then(response => {
        this.category = response.data;
        console.log(this.category);
      });
    },
  },
};
</script>
