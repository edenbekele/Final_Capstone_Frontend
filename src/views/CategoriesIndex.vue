<template>
  <div class="categories-index">
    <div class="container">
      <h1>Categories</h1>
      <div v-for="category in categories">
        {{ category.image }}
        {{ category.name }}
      </div>
    <br>
      <a v-bind:href="`/categories/${categories.id}`">View Artists</a>

    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: [],
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      console.log("View all categories: ", response);
      this.categories = response.data;
    });
  },
};
</script>