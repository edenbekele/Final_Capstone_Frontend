import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  created() {
    AOS.init();
  },
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
}).$mount("#app");
