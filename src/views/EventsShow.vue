<template>
  <div class="events-show">
     <section class="page-section">
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
                {{ event.date }}
                <br>
                {{ event.location }}
                <br>

                {{ event.description }}
              </p>
              <br>
                <a v-bind:href="`/events`">Back to all events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
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