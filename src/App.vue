<template>
    <v-app>
        <Navbar/>

        <v-content class="grey lighten-4">
            <router-view></router-view>
        </v-content>

    </v-app>
</template>

<script>
    import Navbar from './components/Navbar'


    export default {
        name: 'App',
        components: { Navbar },
        data: () => ({
            //
        }),
    };
</script>

<style lang="sass">
    $color-pack: true

    @import '~vuetify/src/styles/main.sass'
</style>
