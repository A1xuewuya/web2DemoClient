import { login, getInfo } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";

export default {
  state: {
    token: "",
    roles: [],
    name: "",
    avatar: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
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
          .then(resp => {
            // resp为request拦截器response响应的data数据部分
            // console.log(resp);
            const data = resp.data;
            // 验证返回的roles是否为一个非空数组
            if (data.roles && data.roles.length > 0) {
              commit("SET_ROLES", data.roles);
              // 设置头像和昵称
              commit("SET_NAME", data.name);
              commit("SET_AVATAR", data.avatar);
            } else {
              reject("getInfo: roles must be a non-null Array!!!");
            }
            // promise异步返回
            resolve(resp);
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
