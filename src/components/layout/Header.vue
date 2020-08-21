<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"
      ><img src="" alt="Logo HelpingHand"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/registeruser">Volunteers</b-nav-item>
        <b-nav-item to="/ngos">Ngos</b-nav-item>
        <b-nav-item to="/createmission"></b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!--<header class="header">
    <div>
      <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/volunteers">Become a volunteer</router-link> |
          <router-link to="/ngos">Recruit Volunteers</router-link>
          <router-link to="/createmission">Create Mission</router-link>

      </div>
    </div>
  </header>-->
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>
