import MainController from "./controllers/MainController.js";
import "./app.css";
import nyancat from "./nyancat.jpeg";
document.addEventListener("DOMContentLoaded", () => {
  new MainController();
  document.body.innerHTML = `
    <img src="${nyancat}"/>
  `;
});
