<template>
  <div>
    <br />
    <section v-for="artist in category.artists" class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" v-bind:src="`/img/${artist.image}`" alt="" />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">{{category.name}}</span>
              <span class="section-heading-lower">{{ artist.name }}</span>
            </h2>
            <p class="mb-3">
              {{ artist.description }}
            </p>
            <br />
            <br>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" v-bind:href="`/artists/${artist.id}`">More Info</a>
              <br />
              <a class="btn btn-primary btn-xl" v-bind:href="`/categories`">Back to all categories</a>
            </div>
            <br>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.intro-img {
  height: 40em;
  width: 40em;
}
</style>


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
