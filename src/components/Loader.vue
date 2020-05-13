<template>
  <div>
  <v-progress-circular indeterminate
                       :color="color">

  </v-progress-circular>
    </div>
</template>

<script>
  export default {
    computed: {
      color() {
        const colors = ['primary', 'red', 'purple', 'green', 'amber']
        return colors[Math.floor(Math.random() * 5)]
      }
    }
  }
</script>




<style scoped>
  div{ text-align: center}


  v-progress-circular {
    margin: 1rem
  }

</style>