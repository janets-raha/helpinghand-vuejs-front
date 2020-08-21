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
      device_name: "accesstoken"
    };
  },

  methods: {
    verifyData() {},

    login() {
      console.log("registration method has been called");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      const raw = JSON.stringify({
        email: this.email,
        password: this.password,
        device_name: this.device_name
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      };

      //fetch("http://localhost:8000/api/login", requestOptions)
        fetch("https://helpinghand-laravel.herokuapp.com/api/login", requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.$root.$emit("login", true);
          localStorage.setItem("token", data[0]);
          localStorage.setItem("id", data[1]);
          this.$router.push({ name: "Profile" });
        })
        .catch(error => console.log("error", error));
    }
  }
};
</script>
