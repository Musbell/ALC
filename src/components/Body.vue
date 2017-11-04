<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs4>
        <StudentList/>
      </v-flex>
      <v-flex xs8>
        <div v-if="this.$route.path == '/'" id="placeholder">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/2a/9e/48/2a9e488107b2f1c396dc697a75d91a42.jpg" alt="">
        </div>
        <transition name="view" mode="out-in" appear>
          <router-view :key="$route.fullPath">
          </router-view>
        </transition>
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
#placeholder{
  margin-left: 100px;
}
</style>
