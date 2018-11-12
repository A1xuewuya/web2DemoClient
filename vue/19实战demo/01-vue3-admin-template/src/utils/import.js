export default function _import(file, viewPath = "views") {
  if (process.env.NODE_ENV === "development") {
    console.log("-----直接加载-------");
    console.log(`@/${viewPath}/${file}.vue`);
    return require(`@/${viewPath}/${file}.vue`).default;
  } else if (process.env.NODE_ENV === "production") {
    console.log("-----按需加载-------");
    return () => import(`@/${viewPath}/${file}.vue`);
  }
}
