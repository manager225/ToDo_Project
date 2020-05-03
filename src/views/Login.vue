<template>
<div id="app">
  <v-app id="inspire"
  style="background-color: grey"  >
    <v-content >

      <v-container
        class="fill-height"
        fluid
        style="height: 100vh; width: 100%"

      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <form @submit.prevent="submitHandler">
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>Log in to TODOMarvel</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form  >
                  <v-text-field
                    id="email"
                    label="Email"
                    name="login"
                    prepend-icon="email"
                    type="email"
                    required
                    v-model.trim="email"
                    :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                  />
                  <small
                    class="helper-text invalid red--text"
                    v-if="$v.email.$dirty && !$v.email.required">
                    Email field must not be empty</small>
                  <small
                    class="helper-text invalid red--text"
                    v-else-if="$v.email.$dirty && !$v.email.email">
                    Enter a valid Email</small>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    v-model.trim="password"
                    :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                  />
                  <small
                    class="helper-text invalid red--text"
                    v-if="$v.password.$dirty && !$v.password.required">
                    Enter password</small>
                  <small
                    class="helper-text invalid red--text"
                    v-else-if="$v.password.$dirty && !$v.password.minLength">
                    Password must contain at least {{$v.password.$params.minLength.min}} characters. Now it is {{password.length}}</small>

                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer />
                <v-btn color="indigo" class="btn white--text auth-submit" style="width: 100%" type="submit" v-on:submit.prevent>Log in</v-btn>
              </v-card-actions>
              <v-card-text style="justify-content: center; display: flex">
                <p class="indigo--text" >No account? <router-link to="/register" class="indigo--text">register</router-link></p>
              </v-card-text>
            </v-card>
            </form>
          </v-col>
        </v-row>
      </v-container>

    </v-content>
  </v-app>
</div>
  </template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators'
  import messages from "../utils/messages";

  export default {
    name: 'login',
    data: () => ({
      email: '',
      password: ''
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    },
    mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
     methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      };

      console.log(formData);
      this.$router.push('/')
    }
  }
  }
</script>