<template>
    <div class="container">
      <div data-aos="fade-center"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        class="artists-new rounded"> 
    <form v-on:submit.prevent="submit()">
      <h1>New Events</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
    <div class="form-group">
      <label>Aritst Name:</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group">
     <label>Description:</label>
      <input type="text" class="form-control" v-model="description">
    </div>
    <div class="form-group">
      <label>Date:</label> 
      <input type="date" class="form-control" v-model="date">
    </div>
    <div class="form-group">
      <label>Location:</label> 
      <input type="textarea" class="form-control" v-model="location">
    </div>
    <div class="form-group">
      <label>Image:</label> 
      <input type="text" class="form-control" v-model="image">
      <!-- <input type="file" class="form-control" @change="onFileSelection"> -->
    </div>
    <br>
     <br>
    <input type="submit" class="btn btn-primary" value="submit">

    </form>
    </div>
    </div>
</template>   

<style>
.artists-new {
  width: 40%;
  margin-bottom: 7em;
  margin-top: 6em;
  margin-left: 20em;
  background-image: linear-gradient(rgba(53, 49, 49, 0.65), rgba(0, 0, 0, 0.65));
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      description: "",
      bio: "",
      image: "",
      errors: [],
    };
  },

  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        bio: this.bio,
        image: this.image,
      };
      var myVariable = 0;
      console.log(params);
      axios
        .post("/api/users/admin", params)
        .then(response => {
          this.$router.push("/users/admin");
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    },
    // onFileSelection(event) {
    //   console.log(event);
    // },
  },
};
</script>