<template>
  <div class="mission mb-24">
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
            Add a new mission you need volunteers for
          </h1>
          <form v-on:submit.prevent="onSubmit">
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="title"
              v-model="title"
              placeholder="Title"
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
              name="skills"
              v-model="skills"
              placeholder="Skills and Knowledge necessary"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="availability"
              v-model="availability"
              placeholder="Availability necessary"
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="date_time"
              v-model="date_time"
              placeholder="date and time of mission"
            />

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
              Create Mission
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateMissionForm",
  props: {
    msg: String
  },
  data() {
    return {
      title: "",
      description: "",
      skills: "",
      availability: "",
      date_time: "",
      postalcode: "",
      city: ""
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
        title: this.title,
        description: this.description,
        skills: this.skills,
        availability: this.availability,
        date_time: this.date_time,
        postalcode: this.postalcode,
        city: this.city
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      //fetch("http://localhost:8000/api/mission", requestOptions)
      fetch("https://helpinghand-laravel.herokuapp.com/api/mission", requestOptions)
        .then(() => {
          this.$router.push({ name: "ProfileNgo" });
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
