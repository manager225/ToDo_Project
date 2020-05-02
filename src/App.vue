
<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="sass">
    $color-pack: true
    @import '~vuetify/src/styles/main.sass'
    /*@import '~materialize-css/dist/css/materialize.min.css'*/
    /*@import './assets/index.css'*/

</style>



















<!--<template>-->
<!--    <v-app>-->
<!--        <Navbar/>-->

<!--        <v-content class="grey lighten-4">-->
<!--            <router-view></router-view>-->
<!--        </v-content>-->

<!--    </v-app>-->
<!--</template>-->

<!--<script>-->
<!--    import Navbar from './components/Navbar'-->


<!--    export default {-->
<!--        name: 'App',-->
<!--        components: { Navbar },-->
<!--        data: () => ({-->
<!--            //-->
<!--        }),-->
<!--    };-->
<!--</script>-->

