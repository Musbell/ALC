<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs4>
        <StudentList/>
      </v-flex>
      <v-flex xs8>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import StudentList from './studentList.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      StudentList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
