export default function init() {
  console.log("------自定义项目初始化-------");
  debug();
}

function debug() {
  console.log("--------process.env信息-----");
  console.log(process.env);
}
