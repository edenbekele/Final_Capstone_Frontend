<template>
  <div class="signup">
    <div class="container">
   
    <form v-on:submit.prevent="submit()">
      <h1>New Artist</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
    <div>
      <label>Name:</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div>
     <label>Description:</label>
      <input type="text" class="form-control" v-model="description">
    </div>
     <div>
      <label>Bio:</label> 
      <input type="text" class="form-control" v-model="bio">
    </div>
     <div>
      <label>Image:</label> 
      <input type="text" class="form-control" v-model="image">
    </div>
      <input type="submit" class="btn btn-primary" value="Submit">

    </form>
    </div>
  </div>
</template>   

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
      axios
        .post("/api/artists/new", params)
        .then(response => {
          this.$router.push("/artists");
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>