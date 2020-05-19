<template>
  <div class="artists-index">
    <br />
    <br />
    <br />
    <section
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      v-for="artist in artists"
      v-if="artist.id % 2 === 0"
      class="page-section"
    >
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex mr-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">{{artist.category}}</span>
                <span class="section-heading-lower">{{ artist.name }}</span>
              </h2>
            </div>
          </div>
           <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            v-bind:src="`/img/${artist.image}`"
            alt=""
          />
          <div class="product-item-description d-flex ml-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">{{ artist.description }}</p>
               <br />
                <a class="btn btn-primary btn-xl" v-bind:href="`/artists/${artist.id}`">More Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      v-for="artist in artists"
      v-if="artist.id % 2 !== 0"
      class="page-section"
    >
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex ml-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">Category</span>
                <span class="section-heading-lower">{{ artist.name }}</span>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            v-bind:src="`/img/${artist.image}`"
            alt=""
          />
          <div class="product-item-description d-flex mr-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                {{ artist.description }}
                <br />
                <a class="btn btn-primary btn-xl" v-bind:href="`/artists/${artist.id}`">More Info</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* HEADER BOX */
.bg-faded {
  color: rgb(65, 62, 62);
}
.product-item-img {
  height: 40em;
  width: 40em;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      artists: [],
    };
  },
  created: function() {
    this.indexArtists();
  },
  methods: {
    indexArtists: function() {
      axios.get("/api/artists").then(response => {
        console.log("View all artists: ", response);
        this.artists = response.data;
      });
    },
  },
};
</script>
