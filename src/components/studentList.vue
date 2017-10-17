<template>
  <v-card>
    <v-text-field
      solo
      label="Search"
      prepend-icon="search"
    ></v-text-field>
    <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
    <v-list two-line>
      <template>
        <!-- todo: add student detail -->
        <StudentDetail
        v-for="student in allStudents"
        :key="student.id"
        :student="student"
        ></StudentDetail>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import StudentDetail from './studentDetail.vue'
  import {ALL_STUDENTS_QUERY} from '../constants/graphql'
  export default {
    name: 'studentList',
    data () {
      return {
        allStudents: [],
        loading: 0
      }
    },
    components: {
      StudentDetail
    },
    apollo: {
      allStudents: {
        query: ALL_STUDENTS_QUERY
      }
    }
  }

</script>


<style>

</style>
