<template>
  <v-simple-table
  >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Currency</th>
        <th class="text-left">Exchange</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cur in currencies" :key="cur">
        <td>RUB/{{ cur }}</td>
        <td>{{getCurrency(cur).toFixed(2)}}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    props: ['rates', 'date'],
    data: () => ({
      currencies: ['USD','EUR']
    }),

    methods: {
      getCurrency(currency) {
         return this.rates['RUB'] / this.rates[currency]
      }
    }
  }
</script>