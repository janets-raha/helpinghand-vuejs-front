<template>
  <div>
    <h1>Login-Ngo</h1>
    <form @submit.prevent="login">
      <input type="email" name="email" placeholder="email" v-model="email" />
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginNgoForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    verifyData() {},

    login() {
      console.log("registration method has been called");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      var raw = JSON.stringify({
        email: this.email,
        password: this.password
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
        // redirect: "follow"
      };

      //fetch("http://localhost:8000/api/login-ngo", requestOptions)
        fetch("https://helpinghand-laravel.herokuapp.com/api/login-ngo", requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.$root.$emit("loginngo", true);
          localStorage.setItem("token", data[0]);
          localStorage.setItem("id", data[1]);
          this.$router.push({ name: "ProfileNgo" });
        })
        .catch(error => console.log("error", error));

      /* .then(response => {
          if (response.status !== 200) {
            //this.$router.push({ name: "ProfileNgo" });
          }
        })
        .then(json => console.log(json))
        //.then(result => (this.validation = result["message"]))
        .catch(error => console.log("error", error));*/
    }
  }
};
</script>
