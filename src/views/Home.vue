<template>
  <div class="home">
    <section 
      data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/Homepage.png" alt="" />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <!-- <span class="section-heading-upper">Fresh Coffee</span> -->
              <span class="section-heading-lower mr-auto">Discover artists and events in your area</span>
            </h2>
            <div class="intro-button m-auto">
              <a class="btn btn-primary btn-xl" v-bind:href="`/artists`">ARTISTS</a>
              <a class="btn btn-primary btn-xl" v-bind:href="`/events`">EVENTS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.btn {
  margin-right: 0.5em;
}
.intro {
  height: 30em;
  width: 60em;
  position: center;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
