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
    const resp = response.data;
    const ret = resp.ret;
    if (0 === ret) {
      // 如果操作成功，返回码为0，返回所有结果
      return resp;
    } else {
      // 做其他状态码处理
      if (4001 === ret) {
        Message({
          message: "用户名或密码错误！",
          type: "error"
        });
      } else {
        Message({
          message: "未知错误，请稍后再试",
          type: "error",
          duration: 5 * 1000
        });
      }
      console.log("---response状态码之外错误---");
      return Promise.reject("---error---");
    }
  },
  error => {
    Message({
      message: "操作超时！",
      type: "error",
      duration: 5 * 1000
    });
    console.log(error);
    return Promise.reject("---error---");
  }
);

export default service;
