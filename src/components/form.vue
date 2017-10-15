<template>
  <v-card>
    <v-card-media src="https://hdqwalls.com/wallpapers/material-design-blue-and-white-to.jpg" height="200px">
      <v-layout column align-center justify-center>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""
             id="profile">
      </v-layout>
    </v-card-media>

    <div class="container">
      <form id="form">
        <!--<v-text-field-->
        <!--label="Name"-->
        <!--v-model="name"-->
        <!--:error-messages="nameErrors"-->
        <!--:counter="10"-->
        <!--@input="$v.name.$touch()"-->
        <!--@blur="$v.name.$touch()"-->
        <!--required-->
        <!--&gt;</v-text-field>-->
        <!--<v-text-field-->
        <!--label="E-mail"-->
        <!--v-model="email"-->
        <!--:error-messages="emailErrors"-->
        <!--@input="$v.email.$touch()"-->
        <!--@blur="$v.email.$touch()"-->
        <!--required-->
        <!--&gt;</v-text-field>-->
        <!--<v-select-->
        <!--label="Item"-->
        <!--v-model="select"-->
        <!--:items="items"-->
        <!--:error-messages="selectErrors"-->
        <!--@change="$v.select.$touch()"-->
        <!--@blur="$v.select.$touch()"-->
        <!--required-->
        <!--&gt;</v-select>-->
        <!--<v-checkbox-->
        <!--label="Do you agree?"-->
        <!--v-model="checkbox"-->
        <!--:error-messages="checkboxErrors"-->
        <!--@change="$v.checkbox.$touch()"-->
        <!--@blur="$v.checkbox.$touch()"-->
        <!--required-->
        <!--&gt;</v-checkbox>-->

        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Last name"
                v-model="lastName"
                :error-messages="lastNameErrors"
                :counter="10"
                @input="$v.lastName.$touch()"
                @blur="$v.lastName.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="firstName"
                :error-messages="firstNameErrors"
                :counter="10"
                @input="$v.firstName.$touch()"
                @blur="$v.firstName.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Other name"
                v-model="otherName"
                :error-messages="otherNameErrors"
                :counter="10"
                @input="$v.otherName.$touch()"
                @blur="$v.otherName.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-select
                label="Gender"
                v-model="gender"
                :items="genderEnum"
                :error-messages="genderErrors"
                @change="$v.gender.$touch()"
                @blur="$v.gender.$touch()"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-dialog
                persistent
                v-model="modal"
                lazy
                full-width
              >
                <v-text-field
                  slot="activator"
                  label="Date of birth"
                  v-model="date"
                  prepend-icon="event"
                  readonly
                  :error-messages="dateOfBirthErrors"
                  @change="$v.date.$touch()"
                  @blur="$v.date.$touch()"
                  required
                ></v-text-field>
                <v-date-picker v-model="date" scrollable actions>
                  <template scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs6>
              <v-select
                label="Nationality"
                prepend-icon="map"
                v-model="nationality"
                :items="nationalityEnum"
                :error-messages="nationalityErrors"
                @change="$v.nationality.$touch()"
                @blur="$v.nationality.$touch()"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Last name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-dialog
                persistent
                v-model="modal"
                lazy
                full-width
              >
                <v-text-field
                  slot="activator"
                  label="Date of admission"
                  v-model="date"
                  prepend-icon="event"
                  readonly
                  :error-messages=" dateOfAdmissionErrors"
                  @change="$v. dateOfAdmission.$touch()"
                  @blur="$v. dateOfAdmission.$touch()"
                  required
                ></v-text-field>
                <v-date-picker v-model="date" scrollable actions>
                  <template scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Last name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Last name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
                label="Last name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="First name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </div>
  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      lastName: { required, maxLength: maxLength(10) },
      firstName: { required, maxLength: maxLength(10) },
      otherName: { required, maxLength: maxLength(10) },
      gender: { required },
      dateOfBirth: { required },
      nationality: { required },
      sessionOfAdmission: { required },
      dateOfAdmission: { required },
      stateOfOrigin: { required },
      religion: { required },
      address: {required},
      city: {required},
      state: {required},
      email: { required, email },
      phone: { required }
    },
    data () {
      return {
        lastName: '',
        firstName: '',
        otherName: '',
        dateOfBirth: null,
        gender: null,
        nationality: null,
        sessionOfAdmission: null,
        dateOfAdmission: null,
        stateOfOrigin: null,
        religion: null,
        address: '',
        city: null,
        state: null,
        email: '',
        phone: '',
        genderEnum: [
          'Male',
          'Female'
        ],
        nationalityEnum: [
          'Nigeria'
        ],
        date: null,
        menu: false,
        modal: false
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.lastName = ''
        this.firstName = ''
        this.otherName = ''
        this.dateOfBirth = null
        this.gender = null
        this.nationality = null
        this.sessionOfAdmission = null
        this.dateOfAdmission = null
        this.stateOfOrigin = null
        this.religion = null
        this.address = ''
        this.city = null
        this.state = null
        this.email = ''
        this.phone = ''
      }
    },
    computed: {
//      selectErrors () {
//        const errors = []
//        if (!this.$v.select.$dirty) return errors
//        !this.$v.select.required && errors.push('Item is required')
//        return errors
//      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.maxLength && errors.push('last name must be at most 10 characters long')
        !this.$v.lastName.required && errors.push('Last name is required.')
        return errors
      },
      firstNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.firstName.maxLength && errors.push('First name must be at most 10 characters long')
        !this.$v.firstName.required && errors.push('First name is required.')
        return errors
      },
      otherNameErrors () {
        const errors = []
        if (!this.$v.otherName.$dirty) return errors
        !this.$v.otherName.maxLength && errors.push('Other name must be at most 10 characters long')
        !this.$v.otherName.required && errors.push('Other name is required.')
        return errors
      },
      genderErrors () {
        const errors = []
        if (!this.$v.gender.$dirty) return errors
        !this.$v.gender.required && errors.push('Gender name is required.')
        return errors
      },
      dateOfBirthErrors () {
        const errors = []
        if (!this.$v.dateOfBirth.$dirty) return errors
        !this.$v.dateOfBirth.required && errors.push('Date f birth is required.')
        return errors
      },
      nationalityErrors () {
        const errors = []
        if (!this.$v.nationality.$dirty) return errors
        !this.$v.nationality.required && errors.push('Nationality is required.')
        return errors
      },
      sessionOfAdmissionErrors () {
        const errors = []
        if (!this.$v.sessionOfAdmission.$dirty) return errors
        !this.$v.sessionOfAdmission.required && errors.push('Session of admission is required.')
        return errors
      },
      dateOfAdmissionErrors () {
        const errors = []
        if (!this.$v.dateOfAdmission.$dirty) return errors
        !this.$v.dateOfAdmission.required && errors.push('Date of admission is required.')
        return errors
      },
      stateOfOriginErrors () {
        const errors = []
        if (!this.$v.stateOfOrigin.$dirty) return errors
        !this.$v.stateOfOrigin.required && errors.push('State of origin is required.')
        return errors
      },
      religionErrors () {
        const errors = []
        if (!this.$v.religion.$dirty) return errors
        !this.$v.religion.required && errors.push('Religion of origin is required.')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.required && errors.push('Address of origin is required.')
        return errors
      },
      cityErrors () {
        const errors = []
        if (!this.$v.city.$dirty) return errors
        !this.$v.city.required && errors.push('City of origin is required.')
        return errors
      },
      stateErrors () {
        const errors = []
        if (!this.$v.state.$dirty) return errors
        !this.$v.state.required && errors.push('State of origin is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.required && errors.push('Phone of origin is required.')
        return errors
      }
    }
  }
</script>

<style scoped>
  #profile {
    width: 20%;
    border-radius: 50%;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);;
  }
  #form{
    zoom: 90%;
  }
</style>
