<template>
  <div>
    <h1>Login</h1>
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
  name: "LoginUser",
  data() {
    return {
        email: "",
        password: "",
        device_name: "browser"
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
        password: this.password,
        device_name:this.device_name
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      //fetch("http://localhost:8000/api/login", requestOptions)
      fetch("http://helpinghand-laravel.herokuapp.com/api/login", requestOptions)
        .then(response => {
          localStorage.setItem("token", response.data);
          this.$router.push({name: "Profile"})
        })
        .then(json => console.log(json))
        //.then(result => (this.validation = result["message"]))
        .catch(error => console.log("error", error))
    }
  }
}
</script>