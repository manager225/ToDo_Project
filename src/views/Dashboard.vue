<template>
    <div class="dashboard">
        <h1 class="subheading grey--text px-4 pb-4 text-center">Dashboard</h1>

        <v-container class="my-5">

            <v-layout row justify-start class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn small text color="grey" v-on="on" @click="sortBy('title')">
                            <v-icon small left>folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sort by project name</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn small text color="grey" v-on="on" @click="sortBy('person')">
                            <v-icon small left>person</v-icon>
                            <span class="caption text-lowercase">By Person</span>
                        </v-btn>
                    </template>
                    <span>Sort by project author</span>
                </v-tooltip>
            </v-layout>

            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}
                            </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>

        </v-container>

    </div>
</template>


<script>
    import db from '../fb'
    export default {
        data() {
            return {
                projects: []

            }
        },
        methods: {
            sortBy(prop) {
                this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
            }
        },

        created() {
            db.collection('projects').onSnapshot(res => {
                const changes = res.docChanges();
                changes.forEach(change => {
                    if (change.type === 'added') {
                        this.projects.push({
                            ...change.doc.data(),
                            id: change.doc.id
                        })
                    }
                })
            })
        }

    }
</script>

<style>
    .project.complete {
        border-left: 4px solid #3CD1C2;
    }

    .project.ongoing {
        border-left: 4px solid orange
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }

    .container .project .v-chip.complete {
        background: #3cd1c2;
    }

    .container .project .v-chip.ongoing {
        background: #ffaa2c;
    }

    .container .project .v-chip.overdue {
        background: #f83e70;
    }
</style>
