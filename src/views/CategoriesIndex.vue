<template>
  <div class="categories-index">
    <section
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      v-for="category in categories"
      class="page-section clearfix"
    >
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" v-bind:src="`/img/${category.image}`" alt="" />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-lower">{{ category.name }}</span>
            </h2>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" v-bind:href="`/categories/${category.id}`">
                View artists in category
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>

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
