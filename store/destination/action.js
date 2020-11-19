import api from '../../plugins/api'
export const state = () => ({
  destinations: [],
})

export const getters = {
  dreamingDestinations: (state) =>
    state.destinations.filter((destination) => destination.isDreamDestination),
}

export const actions = {
  getDestination(state) {
    api.get('/destinations').then((response) => {
      console.log(response.data)
      state.commit('setDestination', response.data)
    })
  },
}

export const mutations = {
  setDestination(state, items) {
    state.destinations = items
  },
}
