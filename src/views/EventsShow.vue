<template>
  <div class="events-show">
    <section class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex m-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-lower">{{ event.name }}</span>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            v-bind:src="`/img/${event.image}`"
            alt=""
          />
          <div class="product-item-description d-flex m-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                <center><h3>DETAILS</h3></center>
                <br />
                <strong>When:</strong>
                {{ event.date }}
                <br />
                <br />
                <strong>Where:</strong>
                {{ event.location }}
                <br />
                <br />
                {{ event.description }}
              </p>
              <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <br />
              <center><a class="btn btn-primary btn-xl" v-bind:href="`/events`">Back to all events</a></center>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

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
