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
                    label="Email"
                    name="login"
                    prepend-icon="person"
                    type="email"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                  />
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
  export default {
    name: 'login',
    data: () => ({
    email: '',
    password: ''
  }),
    methods: {
      submitHandler() {
        this.$router.push('/')
      }
    }
  }
</script>