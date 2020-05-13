<template>
<div class="events-index">
  <div class="container">
  <section v-for="event in events" class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex mr-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-lower">{{ event.name }}</span>
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
                {{ event.description }}
              </p>
              <br>
                <a v-bind:href="`/events/${event.id}`">More Info</a>

            </div>
          </div>
        </div>
      </div>
    </section>
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