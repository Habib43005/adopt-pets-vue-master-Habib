export default {
  // commit is a method from vuex context
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // pet is received as an argument
  }
}
