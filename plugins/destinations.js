import Vue from 'vue'

Vue.mixin({
  methods: {
    getDestinations() {
      this.$store.dispatch('destination/getDestination')
    },
  },
})
