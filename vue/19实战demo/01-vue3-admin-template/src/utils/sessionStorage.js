export default {
  getItem(key) {
    let item = sessionStorage.getItem(key);
    // 判断是字符串还是对象
    let result = /^[{\[].*[}\]]$/g.test(item);
    if (result) {
      return JSON.parse(item);
    } else {
      return item;
    }
  },
  setItem(key, value) {
    // 判断是字符串还是i对象
    if (typeof value == "string") {
      sessionStorage.setItem(key, value);
    } else {
      let item = JSON.stringify(value);
      sessionStorage.setItem(key, item);
    }
  },
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
  getUserSpace() {
    // 获取当前使用了的sessionStorage的空间
    if (!window.sessionStorage) {
      console.log("浏览器不支持sessionStorage");
    } else {
      var size = 0;
      for (item in window.sessionStorage) {
        if (window.sessionStorage.hasOwnProperty(item)) {
          size += window.sessionStorage.getItem(item).length;
        }
      }
    }
    console.log(
      "当前sessionStorage的使用容量为" + (size / 1024).toFixed(2) + "KB"
    );
  }
};
