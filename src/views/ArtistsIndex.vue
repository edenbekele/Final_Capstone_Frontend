<template>
  <div class="artists-index">
    <br />
    <br />
    <br />
    <section class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex mr-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">Delicious Treats, Good Eats</span>
                <span class="section-heading-lower">Bakery &amp; Kitchen</span>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src="img/products-02.jpg"
            alt=""
          />
          <div class="product-item-description d-flex ml-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or
                lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium
                vendors for specialty goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-for="artist in artists" class="page-section">
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
            src="img/products-01.jpg"
            alt=""
          />
          <div class="product-item-description d-flex mr-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                {{ artist.description }}
                <br />
                <a v-bind:href="`/artists/${artist.id}`">More Info</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <h1>Artists</h1>
      <div v-for="artist in artists">
        <h2>{{ artist.name }}</h2>
        <a v-bind:href="`/artists/${artist.id}`">More Info</a>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<style></style>

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
