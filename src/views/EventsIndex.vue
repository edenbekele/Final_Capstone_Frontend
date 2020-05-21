<template>
  <div class="events-index">
    <div class="container">
      <br />
      <br />
      <br />
      <!-- CALENDAR -->
      <center>
        <vc-calendar
          class="calendar"
          :attributes="attributes"
          :min-date="new Date()"
          mode="range"
          :value="null"
          color="orange"
          is-dark
          is-inline
        />
       </center>
      <section
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        v-for="event in events"
        class="page-section"
      >
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-4 d-flex m-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-lower">{{ event.name }}</span>
                </h2>
              </div>
            </div>
            <img
              class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-5"
              v-bind:src="`/img/${event.image}`"
              alt=""
            />
            <div class="product-item-description d-flex m-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">
                  {{ event.description }}
                </p>
                <br />
                <a class="btn btn-primary btn-xl" v-bind:href="`/events/${event.id}`">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <!-- MAP -->
      <center>
        <div id="map"></div>
      </center>
      <br />
    </div>
  </div>
</template>

<style>
.events-index body {
  margin: 0;
  padding: 0;
}
#map {
  height: 500px;
  width: 500px;
}
.product-item-img {
  height: 40em;
  width: 40em;
}
.calendar {
  height: 17em;
  width: 28em;
}
</style>

<script>
import axios from "axios";
import Vue from "vue";
import VCalendar from "v-calendar";

Vue.use(VCalendar, {
  componentPrefix: "vc",
});

export default {
  data: function() {
    var eventDates = [];

    return {
      events: [],
      attributes: [],
    };
  },
  created: function() {
    this.indexEvents();
  },

  mounted: function() {},

  methods: {
    indexEvents: function() {
      axios.get("/api/events").then(response => {
        console.log("View all events: ", response);
        this.events = response.data;
        mapboxgl.accessToken =
          "pk.eyJ1IjoiZWJla2VsZSIsImEiOiJja2E2MmtwdmgwM2loMnFudzN5ZXo3azVuIn0.kN1OfXN-5MgNqpiTNGsvYQ";
        var mapboxClient = mapboxSdk({
          accessToken: mapboxgl.accessToken,
        });
        var map = new mapboxgl.Map({
          container: "map", // container id
          style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
          center: [-87.6298, 41.8781], // starting position [lng, lat]
          zoom: 10, // starting zoom
        });
        this.events.forEach(event => {
          mapboxClient.geocoding
            .forwardGeocode({
              query: event.location,
              autocomplete: false,
              limit: 1,
            })
            .send()
            .then(response => {
              if (response && response.body && response.body.features && response.body.features.length) {
                var feature = response.body.features[0];
                var popup = new mapboxgl.Popup({ offset: 25 }).setText([event.name, event.location]);
                var marker = new mapboxgl.Marker()
                  .setLngLat(feature.center)
                  .setPopup(popup)
                  .addTo(map);
              }
            });
          this.attributes.push({
            key: "today",
            highlight: true,
            popover: {
              label: event.name,
              visibility: "hover",
            },
            dates: [new Date(event.date)],
          });
        });
      });
    },
  },
};
</script>
