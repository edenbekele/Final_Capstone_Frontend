<template>
  <div>
    <h1>{{ category.name }}</h1>
    <!-- <div v-for="artist in artists">
      {{ artist.name }}
      {{ artist.image }}
    </div> -->
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
        console.log("Show one category: ", response);
        this.category = response.data;
      });
    },
  },
};
</script>
