var displayMessage = function (message) {
  alert (message);
};

var containerText = document.querySelector(".container-text")

containerText.addEventListener ("click", function () {displayMessage ("Не спи!");});

containerText.addEventListener ("click", function () {displayMessage ("Ну что ж успехи на лицо и яйцо");});

containerText.addEventListener ("click", function () {displayMessage ("Я проснулся и сейчас пойду за шампанским!");})
