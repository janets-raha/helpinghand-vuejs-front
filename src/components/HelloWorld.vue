<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Whether you want to offer your skills as a volunteer OR need voluntary
      help with a specific project, this platform will help you make a
      difference. It faciliates the bringing together of talented and
      compassionate people for the benefit of all.
    </p>
    <h3>Categories</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener"
          >Advocacy & Human Rights</a
        >
        <img alt="category advocacy" src="../assets/Categories/Advocacy.png" />
      </li>

      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Animals</a
        >
        <img alt="category animals" src="../assets/Categories/Animals.png" />
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Arts & Culture</a
        >
        <img
          alt="category arts and culture"
          src="../assets/Categories/Arts.png"
        />
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Children & Youth</a
        >
        <img
          alt="category children and youth"
          src="../assets/Categories/Children.png"
        />
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener"
          >Community</a
        >
        <img
          alt="category community"
          src="../assets/Categories/Community.png"
        />
      </li>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >Computers & Technology</a
        >
        <img
          alt="category computers and technology"
          src="../assets/Categories/Computers.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >Education & Literacy</a
        >
        <img
          alt="category education and literacy"
          src="../assets/Categories/Education.png"
        />
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >Health & Medicine</a
        >
        <img
          alt="category health and medicine"
          src="../assets/Categories/Health.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >Seniors</a
        >
        <img alt="category seniors" src="../assets/Categories/Seniors.png" />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >Emloyment</a
        >
        <img
          alt="category employment"
          src="../assets/Categories/Employment.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >Environment</a
        >
        <img
          alt="category environment"
          src="../assets/Categories/Environment.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >Homeless & Housing</a
        >
        <img
          alt="category homeless and housing"
          src="../assets/Categories/Homeless.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >Immigrants & Refugees</a
        >
        <img
          alt="category immigrants and refugees"
          src="../assets/Categories/Immigrants.png"
        />
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >People with Disabilities</a
        >
        <img
          alt="category people with disabilities"
          src="../assets/Categories/PeopleWithDisabilities.png"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
