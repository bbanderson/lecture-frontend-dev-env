module.exports = function myWebpackLoader(content) {
  console.log("myWebpackLoader가 동작함");
  console.log(content);
  return content;
};
