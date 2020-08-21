<template>
  <div class="profile">
    <h1>Ngo Profile</h1>
    <div class="card-body" v-if="ngo">
      <h3>Hello, {{ ngo.name }}</h3>
      <h4>Your information</h4>
      <p>{{ ngo.phone }}</p>
      <p>{{ ngo.email }}</p>
      <p>{{ ngo.postalcode }}</p>
      <p>{{ ngo.city }}</p>
    </div>
    <div>
      <b-button variant="success" href="/createmission"
        >Add a new mission</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileNgo",

  data() {
    return {
      ngo: null
    };
  },

  mounted() {
    console.log("We have an Ngo");
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");

    console.log(token);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeaders
    };

    fetch(`https://helpinghand-laravel.herokuapp.com/api/ngo/${id}`, requestOptions)
    //fetch(`http://localhost:8000/api/ngo/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.ngo = data;
      });
  }
};
</script>
