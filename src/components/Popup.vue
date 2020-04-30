
<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="success">Add New Project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" class="px-3">
                    <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>

                        <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="dateFormatted"
                                        label="Date"
                                        hint="MM/DD/YYYY format"
                                        persistent-hint
                                        prepend-icon="event"
                                        @blur="date = parseDate(dateFormatted)"
                                        v-on="on"
                                        :rules="inputRules"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>

                    <v-spacer></v-spacer>
                    <v-btn text @click="submit" class="success mx-0 mt-3" :loading="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>

        </v-card>

    </v-dialog>
</template>

<script>
    import db from '../fb'
    export default {
        data: vm => {
            return {
                title: '',
                content: '',
                due: null,
                date: new Date().toISOString().substr(0, 10),
                dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
                menu1: false,
                inputRules: [
                    v => !!v || 'This field is required',
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ],
                loading: false,
                dialog: false
            }
        },
        computed: {
            computedDateFormatted () {
                return this.formatDate(this.date)
            },
        },

        watch: {
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            },
        },

        methods: {
            submit() {
                if(this.$refs.form.validate()) {
                    this.loading = true;
                    const project = {
                        title: this.title,
                        content: this.content,
                        due: this.date,
                        person: 'X‑Men',
                        status: 'ongoing'
                    };
                    db.collection('projects').add(project).then(() => {
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectAdded')
                    })
                }
            },

            formatDate (date) {
                if (!date) return null;

                const [year, month, day] = date.split('-');
                return `${month}/${day}/${year}`
            },
            parseDate (date) {
                if (!date) return null;

                const [month, day, year] = date.split('/');
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },

        },




    }
</script>
