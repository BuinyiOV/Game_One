
"use strict"

const bodyElement = document.body;
const menu = document.querySelector('.menu');
const game = document.querySelector('.game');
const result = document.querySelector('.game__result');
const items = document.querySelector('.game__items');
const enemy1 = document.querySelector('.game__monster1');
const enemy2 = document.querySelector('.game__monster2');
const enemy3 = document.querySelector('.game__monster3');
const enemy4 = document.querySelector('.game__monster4');

//---------------------------------------------------------

const colorRed = document.querySelector('.background-color__red-background');
colorRed.addEventListener("mousedown", function (event) {
menu.style.background = "red";
bodyElement.style.background = "red";
});

const colorYellow = document.querySelector('.background-color__yellow-background');
colorYellow.addEventListener("mousedown", function (event) {
menu.style.background = "yellow";
bodyElement.style.background = "yellow";
});

const colorGreen = document.querySelector('.background-color__green-background');
colorGreen.addEventListener("mousedown", function (event) {
menu.style.background = "green";
bodyElement.style.background = "green";
});

const colorBlue = document.querySelector('.background-color__blue-background');
colorBlue.addEventListener("mousedown", function (event) {
menu.style.background = "blue";
bodyElement.style.background = "blue";
});

const colorPink = document.querySelector('.background-color__pink-background');
colorPink.addEventListener("mousedown", function (event) {
menu.style.background = "purple";
bodyElement.style.background = "purple";
});

//---------------------------------------------------------

const enemyRed = document.querySelector('.enemy-color__red-enemy');
enemyRed.addEventListener("mousedown", function (event) {
enemy1.style.backgroundImage = "url('img/monster_red.svg')";
enemy2.style.backgroundImage = "url('img/monster_red.svg')";
enemy3.style.backgroundImage = "url('img/monster_red.svg')";
enemy4.style.backgroundImage = "url('img/monster_red.svg')";
});

const enemyYellow = document.querySelector('.enemy-color__yellow-enemy');
enemyYellow.addEventListener("mousedown", function (event) {
enemy1.style.backgroundImage = "url('img/monster_yellow.svg')";
enemy2.style.backgroundImage = "url('img/monster_yellow.svg')";
enemy3.style.backgroundImage = "url('img/monster_yellow.svg')";
enemy4.style.backgroundImage = "url('img/monster_yellow.svg')";
});

const enemyGreen = document.querySelector('.enemy-color__green-enemy');
enemyGreen.addEventListener("mousedown", function (event) {
enemy1.style.backgroundImage = "url('img/monster_green.svg')";
enemy2.style.backgroundImage = "url('img/monster_green.svg')";
enemy3.style.backgroundImage = "url('img/monster_green.svg')";
enemy4.style.backgroundImage = "url('img/monster_green.svg')";
});

const enemyBlue = document.querySelector('.enemy-color__blue-enemy');
enemyBlue.addEventListener("mousedown", function (event) {
enemy1.style.backgroundImage = "url('img/monster_blue.svg')";
enemy2.style.backgroundImage = "url('img/monster_blue.svg')";
enemy3.style.backgroundImage = "url('img/monster_blue.svg')";
enemy4.style.backgroundImage = "url('img/monster_blue.svg')";
});

const enemyPink = document.querySelector('.enemy-color__pink-enemy');
enemyPink.addEventListener("mousedown", function (event) {
enemy1.style.backgroundImage = "url('img/monster_pink.svg')";
enemy2.style.backgroundImage = "url('img/monster_pink.svg')";
enemy3.style.backgroundImage = "url('img/monster_pink.svg')";
enemy4.style.backgroundImage = "url('img/monster_pink.svg')";
});

//---------------------------------------------------------

const batman = document.querySelector('.avatar__batman');
batman.addEventListener("mousedown", function (event) {
game.style.cursor = "url('img/batman24.png') 24 24, auto";
});

const dino = document.querySelector('.avatar__dino');
dino.addEventListener("mousedown", function (event) {
game.style.cursor = "url('img/dino24.png') 24 24, auto";
});

const frozen = document.querySelector('.avatar__frozen');
frozen.addEventListener("mousedown", function (event) {
game.style.cursor = "url('img/frozen24.png') 24 24, auto";
});

const pacman = document.querySelector('.avatar__pacman');
pacman.addEventListener("mousedown", function (event) {
game.style.cursor = "url('img/pacman24.png') 24 24, auto";
});

const pika = document.querySelector('.avatar__pika');
pika.addEventListener("mousedown", function (event) {
game.style.cursor = "url('img/pika24.png') 24 24, auto";
});


//---------------------------------------------------------

const go = document.querySelector('.start__go');
go.addEventListener("mousedown", function (event) {
menu.classList.add(`active`);
function hide (num){
	menu.style.display = "none";
	let timeId = setTimeout (hide, 1000, ++num);
	if (num === 2){
	clearTimeout(timeId);
	}
}
setTimeout (hide, 1000, 1);
});

//---------------------------------------------------------

const retry = document.querySelector('.result__gomenu');
retry.addEventListener("mousedown", function (event) {
menu.style.display = "block";
menu.classList.remove(`active`);
});

//---------------------------------------------------------
