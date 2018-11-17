import { login, getInfo } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";

export default {
  state: {
    token: "",
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    // 管理员登录
    Login({ commit }, userInfo) {
      console.log("---actions login操作---");
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password)
          .then(res => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const data = response.data;
            if (data.roles && data.roles.length > 0) {
              commit("SET_ROLES", data.roles);
            } else {
              reject("getInfo: roles must be a non-null Array!!!");
            }
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
