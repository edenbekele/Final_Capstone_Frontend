<template>
  <div class="events-index">
    <div class="container">
      <br />
      <br />
      <br />
      <!-- CALENDAR -->
      <center>
        <vc-calendar
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
              <div class="bg-faded p-4 d-flex mr-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-lower">{{ event.name }}</span>
                </h2>
              </div>
            </div>
            <img
              class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-5"
              v-bind:src="event.image"
              alt=""
            />
            <div class="product-item-description d-flex ml-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">
                  {{ event.description }}
                </p>
                <br />
                <a v-bind:href="`/events/${event.id}`">More Info</a>
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
body {
  margin: 0;
  padding: 0;
}
#map {
  height: 500px;
  width: 500px;
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
    // do a .map loop to go through events
    var eventDates = [];
    return {
      events: [],
      attributes: [
        {
          key: "today",
          highlight: true,
          popover: {
            label: "You just hovered over today's date!",
          },
          dates: [new Date(), new Date("6/13/2020")],
        },
      ],
    };
  },
  created: function() {
    this.indexEvents();
  },

  mounted: function() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZWJla2VsZSIsImEiOiJja2E2MmtwdmgwM2loMnFudzN5ZXo3azVuIn0.kN1OfXN-5MgNqpiTNGsvYQ";
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
      center: [-87.6298, 41.8781], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    var popup = new mapboxgl.Popup({ offset: 25 }).setText("Construction on the Washington Monument began in 1848.");
    var marker = new mapboxgl.Marker()
      .setLngLat([-87.6298, 41.8781])
      .setPopup(popup)
      .addTo(map);
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
