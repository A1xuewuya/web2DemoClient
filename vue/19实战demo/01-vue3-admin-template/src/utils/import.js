export default function _import(file, viewPath = "views") {
  if (process.env.NODE_ENV === "development") {
    console.log(`@/${viewPath}/${file}.vue`)
    return require(`@/${viewPath}/${file}.vue`).default;
  } else if (process.env.NODE_ENV === "production") {
    return () => import(`@/${viewPath}/${file}.vue`);
  }
}
