<template>
  <div class="categories-index">
    <div class="container">
      <h1>Categories</h1>
      <div v-for="category in categories">
        <h2>{{ category.name }}</h2>
        <h3>{{ category.artists }}</h3>
        <br />
        <img v-bind:src="category.image" alt />
        <br />
        <a v-bind:href="`/categories/${category.id}`">View Artists in Category</a>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: [],
    };
  },
  created: function() {
    this.indexCategories();
  },
  methods: {
    indexCategories: function() {
      axios.get("/api/categories").then(response => {
        console.log("View all categories: ", response);
        this.categories = response.data;
      });
    },
  },
};
</script>
