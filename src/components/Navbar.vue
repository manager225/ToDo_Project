<template>
    <nav>
        <v-app-bar flat v-text app>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="grey"
                            text
                            v-on="on"
                    >
                        <v-icon left>expand_more</v-icon>
                        MENU
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                            v-for="link in links"
                            :key="link.text"
                            @click=""
                            router :to="link.route"
                    >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="indigo">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" src='/avatar-1.png'>
                    </v-avatar>
                    <p class="white--text subheading mt-1">The Net Ninja</p>
                </v-flex>

                <v-flex class="mt-4 mb-3">
                    <Popup/>
                </v-flex>

            </v-layout>
            <v-list>
                <v-list-item-group v-for="link in links" :key="link.text">
                    <v-list-item router :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>


<script>
import Popup from './Popup'

export default {
    components: { Popup },
    data: () => ({
        drawer: false,
        links: [
            {icon: 'dashboard', text: 'Dashboard', route: '/'},
            {icon: 'folder', text: 'My Projects', route: '/projects'},
            {icon: 'person', text: 'Team', route: '/team'},
        ]
    })
}
</script>
