<template>
  <div class="register mb-24">
    <!-- component -->
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <p>
            You are an NGO and need expert help with a specific project? If so
            then advertise on this platform to find those special people. It
            might be that you don't need specific expertise, you simply need an
            extra pair of hands to provide general help and support at a rescue
            shelter, for example. That’s fine, as there are many compassionate
            people who would jump at the opportunity to help you.
          </p>
          <h1 class="mb-8 text-3xl text-center">
            Sign up and find volunteers for your missions
          </h1>
          <form v-on:submit.prevent="onSubmit">
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              v-model="name"
              placeholder="Ngo-Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="description"
              v-model="description"
              placeholder="Description"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone"
              v-model="phone"
              placeholder="Phone"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              v-model="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              v-model="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              v-model="confirm_password"
              placeholder="Confirm Password"
            />
            <small v-if="this.password !== this.confirm_password"
              >The confirmation has to be identic to the password</small
            >

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="postalcode"
              v-model="postalcode"
              placeholder="Postal code"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="city"
              v-model="city"
              placeholder="City"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
          <div class="text-center text-sm text-gray-600 mt-4">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </div>
          <!--<div
            v-html="validation"
            class="text-center bg-green-200 rounded text-green-700 border border-green-700 mt-2 "
          ></div>-->

          <div class=" mt-6">
            Already have an account?
            <router-link class="text-green-600" to="/login-ngo">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterNgoForm",
  props: {
    msg: String
  },
  data() {
    return {
      name: "",
      description: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
      postalcode: "",
      city: ""
      //validation: ""
    };
  },
  beforeMount() {},

  methods: {
    verifyData() {},

    onSubmit() {
      console.log("registration method has been called");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      var raw = JSON.stringify({
        name: this.name,
        description: this.description,
        phone: this.phone,
        email: this.email,
        password: this.password,
        //confirm_password: this.confirm_password,
        postalcode: this.postalcode,
        city: this.city
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      //fetch("http://localhost:8000/api/ngo", requestOptions)
      fetch("https://helpinghand-laravel.herokuapp.com/api/ngo", requestOptions)
        .then(() => {
          this.$router.push({ name: "LoginNgo" });
        })
        //.then(response => console.log(response.status))
        // .then(json => console.log(json))
        //.then(result => (this.validation = result["message"]))
        .catch(error => console.log("error", error));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
