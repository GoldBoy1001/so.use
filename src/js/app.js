import * as webpFn from "./modules/fn.js";

webpFn.isWebp();

const btn = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    var pentagonBody = document.querySelector(".pentagon-body");
    var pentagonWrappers = pentagonBody.querySelectorAll(".pentagon-wrapper");
    // Преобразуем NodeList в массив для удобства перемешивания
    var wrappersArray = Array.from(pentagonWrappers);

    // Перемешиваем массив элементов
    wrappersArray.sort(function () {
      return 0.5 - Math.random();
    });

    // Очищаем контейнер
    pentagonBody.innerHTML = "";

    wrappersArray.forEach(function (wrapper) {
      pentagonBody.appendChild(wrapper);
    });
  });
});
