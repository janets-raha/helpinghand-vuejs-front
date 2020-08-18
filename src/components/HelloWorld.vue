<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Whether you want to offer your skills as a volunteer OR need voluntary help with a specific project, this platform will help you make a difference. 
      It faciliates the bringing together of talented and compassionate people for the benefit of all.
    </p>
    
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
