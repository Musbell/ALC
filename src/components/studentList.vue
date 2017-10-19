<template>
  <v-card>
    <v-text-field
      solo
      label="Search"
      prepend-icon="search"
      v-model="searchText"
    ></v-text-field>
    <v-list two-line>
      <template>
        <v-subheader>student list</v-subheader>
        <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        <transition-group
          name="staggered-fade"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
        <StudentDetail
        v-for="student in allStudents"
        :key="student.id"
        :student="student"
        ></StudentDetail>
        </transition-group>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import StudentDetail from './studentDetail.vue'
  import {ALL_STUDENTS_QUERY, ALL_STUDENTS_SEARCH_QUERY } from '../constants/graphql'
  export default {
    name: 'studentList',
    data () {
      return {
        allStudents: [],
        loading: 0,
        searchText: 'A'
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 1, height: '5em'},
            {complete: done}
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 0, height: 0},
            {complete: done}
          )
        }, delay)
      }
    },
      components: {
      StudentDetail
    },
    apollo: {
      allStudents: {
        query: ALL_STUDENTS_SEARCH_QUERY,
        variables () {
          return {
            searchText: this.searchText
          }
        },
        skip () {
          return !this.searchText
        },
        pollInterval: 300
      }
    }
  }

</script>


<style>

</style>
