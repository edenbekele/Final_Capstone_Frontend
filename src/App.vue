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
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/artists">Artists</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/categories">Categories</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/events">Events</a>
            </li>
            <li v-if="!jwt" class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/signup">Signup</a>
            </li>
            <li v-if="!jwt" class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/login">Login</a>
            </li>
            <li v-if="jwt" class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/logout">Logout</a>
            </li>
           
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="/users/:id">★</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <!-- Footer -->
    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <p class="m-0 small">Copyright &copy; Your Website 2019</p>
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
};
</script>
