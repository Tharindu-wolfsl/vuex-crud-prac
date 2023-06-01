import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: []
  },
  mutations: {
    //chanage count state
    increment(state) {
      console.log("mutation");
      state.count++;
    },
    //change posts state
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    //call by increment button in Posts component
    increment(context) {
      console.log("action");
      context.commit("increment"); //call increment in mutations
    },

    //call by increment button in Posts component
    getPosts({ commit }) {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            commit("setPosts", response);
          });
      } catch (error) {
        console.log("Error", error);
      }
    }
  },
  getters: {
    getCount(state) {
      console.log("getter");
      return state.count;
    }
  }
});
export default store;
