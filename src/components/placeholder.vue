<template>
  <div id="placeholder-container">
    <img src="../assets/Placeholder_Profile.png" alt="" id="placeholder">
  </div>
</template>

<script>
  export default {
    name: 'placeholder',
    data () {
      return {
        msg: 'This is a placeholder'
      }
    }
  }
</script>

<style scoped="">
  #placeholder{
    width: 50%;
  }
  #placeholder-container{
    text-align: center;
  }
</style>
