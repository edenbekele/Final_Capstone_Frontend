<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <h1 class="site-heading text-center text-white d-none d-lg-block">
        <span class="site-heading-upper text-primary mb-3">Final Capstone</span>
        <span class="site-heading-lower">Artists and Events</span>
      </h1>
    </header>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/about">About</a>
            </li>

            <li class="dropdown nav-item px-lg-4">
              <a
                class="nav-link text-uppercase text-expanded dropdown-toggle"
                type="nav-link"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Artists
              </a>
              <div class="dropdown-menu text-uppercase text-expanded px-lg-4" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/artists">All Artists</a>
                <a class="dropdown-item" href="/categories">All Categories</a>
                <a class="dropdown-item" href="/artists/new">Submit Artist</a>
              </div>
            </li>
            <li class="dropdown nav-item px-lg-4">
              <a
                class="nav-link text-uppercase text-expanded dropdown-toggle"
                type="nav-link"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Events
              </a>
              <div class="dropdown-menu text-uppercase text-expanded px-lg-4" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/events">All Events</a>
                <a class="dropdown-item" href="/artists/new">Submit Event</a>
              </div>
            </li>
            <li v-if="!jwt" class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/signup">Signup</a>
            </li>
            <li v-if="!jwt" class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/login">Login</a>
            </li>

            <li v-if="jwt" class="dropdown nav-item px-lg-4">
              <a
                class="nav-link text-uppercase text-expanded dropdown-toggle"
                type="nav-link"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Profile
              </a>
              <div class="dropdown-menu text-uppercase text-expanded px-lg-4" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/my_artists">★ Artists</a>
                <a class="dropdown-item" href="#">Saved Events</a>
                <a class="dropdown-item" href="#">Messages</a>
                <a class="dropdown-item" href="/logout">Logout</a>
                <a v-if="user && user.admin === true" class="dropdown-item" href="/admin">ADMIN</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <!-- Footer -->
    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <p class="m-0 small">Copyright &copy; WOC Artists 2020</p>
      </div>
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
  },
  computed: {
    user: function() {
      return this.$store.getters.user;
    },
  },
};
</script>
