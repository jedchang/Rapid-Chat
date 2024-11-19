import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickName: '',
    socialName: ''
  },
  // 更改 state 方式
  mutations: {
    setNickName(state, payload) {
      state.nickName = payload;
    },
    setSocialName(state, payload) {
      state.socialName = payload;
    }
  },
  // 透過 dispatch 執行 action，提交 mutations，並處理非同步操作。
  actions: {}
});
