// Отримуємо випадкове число від 0 до size
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

// Вираховуємо відстань між подією й ціллю
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

// Отримуємо рядок, що показує відстань
var getDistanceHint = function (distance) {
  if (distance < 20) {
    return "Like in a hell!";
  } else if (distance < 40) {
    return "Boiling hot!";
  } else if (distance < 60) {
    return "Really really hot!";
  } else if (distance < 100) {
    return "Really hot!";
  } else if (distance < 150) {
    return "Hot!";
  } else if (distance < 200) {
    return "Warm";
  } else if (distance < 320) {
    return "Cold!";
  } else if (distance < 480) {
    return "Really cold!";
  } else if (distance < 620) {
    return "Really really cold!";
  } else {
    return "Freezing!";
  }
};

// Налаштовуємо наші змінні параметри
var width = 800;
var height = 800;
var clicks = 0;

// Створюємо випадкову локацію target
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

// Додаємо маніпулятор кліків до елеметнів img
$("#map").click(function (event) {
  clicks++;
  $("#click").text("The clicks left " + (20 - clicks));

  // Отримуємо Відстань між event і target
  var distance = getDistance(event, target);

  // Конвертуємо відстань в підказку
  var distanceHint = getDistanceHint(distance);

  // Оновлюємо #distance-елемент новою підказкою
  $("#distance").text(distanceHint);

  //Якщо клік було зроблено достатньо близько,
  // кажемо гравцеві, що він переміг.
  if (distance < 14) {
    alert("Found the treasure in " + clicks + " clicks!");
  }
  if (clicks > 20) {
    alert("Luck in next time. GAME OVER!!");
  }
});
