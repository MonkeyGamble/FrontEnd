function startGame() {
	document.title = `Score ${score}`;
	object.classList.toggle('is-moving');
}
function finishGame() {}
function hit() {
	score++;
	document.title = `Score ${score}`;
	object.classList.remove('is-moving');
	void object.offsetWidth; //приводит к вынужденному перерасчету макета браузера
	object.classList.add('is-moving');

	changeObjectSize();
	change_object_background();
}
function miss(event) {
	if (event.target.id == 'area') {
		/*срабатывает только, если мы попали в area, а не в object*/
		score--;
		document.title = `Score ${score}`;
	}
}

function changeObjectSize() {
	// const randomSize = 20 + Math.random() * 40; //диапазон от 20 до 60
	const randomSize = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
	object.style.width = `${randomSize}px`;
}

function change_object_background() {
	const colors = ['red', 'gold', 'blue', 'orange', 'purple'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	object.style.background = colors[randomIndex];
}
let score = 0;
let object = document.querySelector('#object');
