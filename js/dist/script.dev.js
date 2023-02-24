"use strict";

var bodyElement = document.body;
var menu = document.querySelector('.menu');
var game = document.querySelector('.game');
var result = document.querySelector('.game__result');
var items = document.querySelector('.game__items');
var enemy1 = document.querySelector('.game__monster1');
var enemy2 = document.querySelector('.game__monster2');
var enemy3 = document.querySelector('.game__monster3');
var enemy4 = document.querySelector('.game__monster4'); //---------------------------------------------------------

var colorRed = document.querySelector('.background-color__red-background');
colorRed.addEventListener("mousedown", function (event) {
  menu.style.background = "red";
  bodyElement.style.background = "red";
});
var colorYellow = document.querySelector('.background-color__yellow-background');
colorYellow.addEventListener("mousedown", function (event) {
  menu.style.background = "yellow";
  bodyElement.style.background = "yellow";
});
var colorGreen = document.querySelector('.background-color__green-background');
colorGreen.addEventListener("mousedown", function (event) {
  menu.style.background = "green";
  bodyElement.style.background = "green";
});
var colorBlue = document.querySelector('.background-color__blue-background');
colorBlue.addEventListener("mousedown", function (event) {
  menu.style.background = "blue";
  bodyElement.style.background = "blue";
});
var colorPink = document.querySelector('.background-color__pink-background');
colorPink.addEventListener("mousedown", function (event) {
  menu.style.background = "purple";
  bodyElement.style.background = "purple";
}); //---------------------------------------------------------

var enemyRed = document.querySelector('.enemy-color__red-enemy');
enemyRed.addEventListener("mousedown", function (event) {
  enemy1.style.backgroundImage = "url('img/monster_red.svg')";
  enemy2.style.backgroundImage = "url('img/monster_red.svg')";
  enemy3.style.backgroundImage = "url('img/monster_red.svg')";
  enemy4.style.backgroundImage = "url('img/monster_red.svg')";
});
var enemyYellow = document.querySelector('.enemy-color__yellow-enemy');
enemyYellow.addEventListener("mousedown", function (event) {
  enemy1.style.backgroundImage = "url('img/monster_yellow.svg')";
  enemy2.style.backgroundImage = "url('img/monster_yellow.svg')";
  enemy3.style.backgroundImage = "url('img/monster_yellow.svg')";
  enemy4.style.backgroundImage = "url('img/monster_yellow.svg')";
});
var enemyGreen = document.querySelector('.enemy-color__green-enemy');
enemyGreen.addEventListener("mousedown", function (event) {
  enemy1.style.backgroundImage = "url('img/monster_green.svg')";
  enemy2.style.backgroundImage = "url('img/monster_green.svg')";
  enemy3.style.backgroundImage = "url('img/monster_green.svg')";
  enemy4.style.backgroundImage = "url('img/monster_green.svg')";
});
var enemyBlue = document.querySelector('.enemy-color__blue-enemy');
enemyBlue.addEventListener("mousedown", function (event) {
  enemy1.style.backgroundImage = "url('img/monster_blue.svg')";
  enemy2.style.backgroundImage = "url('img/monster_blue.svg')";
  enemy3.style.backgroundImage = "url('img/monster_blue.svg')";
  enemy4.style.backgroundImage = "url('img/monster_blue.svg')";
});
var enemyPink = document.querySelector('.enemy-color__pink-enemy');
enemyPink.addEventListener("mousedown", function (event) {
  enemy1.style.backgroundImage = "url('img/monster_pink.svg')";
  enemy2.style.backgroundImage = "url('img/monster_pink.svg')";
  enemy3.style.backgroundImage = "url('img/monster_pink.svg')";
  enemy4.style.backgroundImage = "url('img/monster_pink.svg')";
}); //---------------------------------------------------------

var batman = document.querySelector('.avatar__batman');
batman.addEventListener("mousedown", function (event) {
  game.style.cursor = "url('img/batman24.png') 24 24, auto";
});
var dino = document.querySelector('.avatar__dino');
dino.addEventListener("mousedown", function (event) {
  game.style.cursor = "url('img/dino24.png') 24 24, auto";
});
var frozen = document.querySelector('.avatar__frozen');
frozen.addEventListener("mousedown", function (event) {
  game.style.cursor = "url('img/frozen24.png') 24 24, auto";
});
var pacman = document.querySelector('.avatar__pacman');
pacman.addEventListener("mousedown", function (event) {
  game.style.cursor = "url('img/pacman24.png') 24 24, auto";
});
var pika = document.querySelector('.avatar__pika');
pika.addEventListener("mousedown", function (event) {
  game.style.cursor = "url('img/pika24.png') 24 24, auto";
}); //---------------------------------------------------------

var go = document.querySelector('.start__go');
go.addEventListener("mousedown", function (event) {
  menu.classList.add("active");

  function hide(num) {
    menu.style.display = "none";
    var timeId = setTimeout(hide, 1000, ++num);

    if (num === 2) {
      clearTimeout(timeId);
    }
  }

  setTimeout(hide, 1000, 1);
}); //---------------------------------------------------------

var retry = document.querySelector('.result__gomenu');
retry.addEventListener("mousedown", function (event) {
  menu.style.display = "block";
  menu.classList.remove("active");
}); //---------------------------------------------------------