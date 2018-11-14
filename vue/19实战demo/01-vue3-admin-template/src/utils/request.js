import axios from "axios";
import store from "@/store/index";
import { getToken } from "@/utils/auth";
import { Message, MessageBox } from "element-ui";

//创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base api
  timeout: 5000 //请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers["X-Token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.ret !== 0) {
      // 返回其他状态码处理
      if (res.ret === 4001) {
        Message({
          message: "用户名或密码错误！",
          type: "error"
        });
      }
      //   Message({
      //     message: "未知错误，请联系管理员",
      //     type: "error",
      //     duration: 5 * 1000
      //   });
      return Promise.reject("error");
    } else {
      return res;
    }
  },
  error => {}
);

export default service;
