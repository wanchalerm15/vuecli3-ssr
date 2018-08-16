import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    set_posts: (state, posts) => state.posts = posts
  },
  actions: {
    init_posts: ({ commit }) => Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => commit('set_posts', res.data))
  }
})
