import { login } from "@/api/login";

export default {
  state: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    // 管理员登录
    Login({ commit }, userInfo) {
      console.log("---actions login操作---");
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password)
          .then(res => {
            // setToken(res.token);
            // commit("SET_TOKEN", res.token);
            // resolve(res);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 账户登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
  }
};
