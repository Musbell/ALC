<template>
  <h3>{{mag}}</h3>

  <router-link to="/students">
    <p>go to dashborad</p>
  </router-link>
</template>

<script>
  export default {
    name: 'landingPage',
    data () {
      return {
        msg: 'This is a landing page'
      }
    }
  }
</script>
