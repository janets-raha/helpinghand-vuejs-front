<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="card-body" v-if="user">
      <h3> Hello, {{user.name}}</h3>
      <h4> Your personal information </h4>
      <p>{{user.phone}}</p>
      <p>{{user.email}}</p>
      <p>{{user.postalcode}}</p>
      <p>{{user.city}}</p>
    </div>
    <div>
      <b-button variant="success" href="#">Edit my profile</b-button>
      <b-button variant="danger" href="#">Delete my profile</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      user: null
    }
  },

  mounted() {
    console.log("We have a user")
    let token = localStorage.getItem("token");
    console.log(token);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeaders
    }

    fetch("http://localhost:8000/api/user/{id}", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.user = data;
      })
  }
  
};
</script>
