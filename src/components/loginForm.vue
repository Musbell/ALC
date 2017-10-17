<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3>
        <form>
          <v-text-field
            label="email"
            append-icon="email"
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            append-icon="https"
            v-model="password"
            :error-messages="passwordErrors"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            required
          ></v-text-field>
          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { USER_ID, AUTH_TOKEN } from '../constants/settings'
  import { SIGNIN_USER_MUTATION } from '../constants/graphql'
  import { validationMixin } from 'vuelidate'
  import { required, minLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      email: { required, email },
      password: {
        required,
        minLength: minLength(6)
      },
    },
    name: 'loginForm',
    data () {
      return {
        password: '',
        email: '',
        login: true
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
        const { email, password } = this.$data
        if (this.login) {
          this.$apollo.mutate({
            mutation: SIGNIN_USER_MUTATION,
            variables: {
              email,
              password
            }
          }).then((result) => {
            location.reload(true);
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.saveUserData(id, token)
            this.$router.push({path: '/students'})
          }).catch((error) => {
            alert(error)
          })
        }
      },
      clear () {
        this.$v.$reset()
        this.password = ''
        this.email = ''
      },
      saveUserData (id, token) {
        localStorage.setItem(USER_ID, id)
        localStorage.setItem(AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(USER_ID)
      }
    },
    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must not  be less than 6 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    }
  }
</script>


<style>


</style>
