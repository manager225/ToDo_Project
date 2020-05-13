<template>
    <v-app>
        <Navbar/>

        <v-content class="grey lighten-4">
            <router-view></router-view>
        </v-content>

    </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import Popup from '../components/Popup'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components: {
    Navbar, Popup
  }
}
</script>