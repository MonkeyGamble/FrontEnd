// const pElem = document.createElement('p');
// const pElem2 = document.createElement('p');
// pElem.innerText = 'Test';
// pElem2.innerText = 'Test2';
// // document.body.append(pElem, pElem2);   //добавляет несколько элементов и ничего не возвращает
// document.body.appendChild(pElem); //добавляет один элемент и возвращает его

// const divBlock = document.querySelector('.block');
// const name = 'John';
// divBlock.insertAdjacentHTML('afterbegin', `<div class="inner">${name}</div>`);
// divBlock.insertAdjacentText('beforebegin', '<div class="inner">Inner</div>');
// const pElem3 = document.createElement('p');
// divBlock.insertAdjacentElement('afterend', pElem3);

// //callback функция

// function getName(userName, callback) {
// 	callback(userName);
// }
// function getHello(userName) {
// 	console.log(`Hi, ${userName}`);
// }
// getName('John', getHello);

// document.querySelector('a').addEventListener('click', function (event) {
// 	event.preventDefault();
// });

// Создайте функцию createThumbnailsContainer, которая создает элемент div для изображений, добавляет класс, добавляет его в тело документа и возвращает этот элемент.

let activeImageIndex = -1;

let sourceArray = [
	'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
	'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
	'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
	'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais',
	'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
	'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=sph',
	'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg',
	'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU',
	'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=',
	'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
	'https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
];

function createThumbnailsContainer() {
	const mainDiv = document.createElement('div');
	mainDiv.classList.add('image_thumbnails');
	document.body.append(mainDiv);
	return mainDiv;
}
createThumbnailsContainer();

// Создайте функцию createImgThumbnail, которая принимает один аргумент - ссылку на изображение, создает элемент div, содержащий изображение с заданным источником и возвращает его.

function createImgThumbnail(source) {
	const imgDiv = document.createElement('div');
	const image = document.createElement('img');
	image.setAttribute('src', source);
	image.setAttribute('alt', 'thumbnail');
	imgDiv.append(image);
	return imgDiv;
}

// Создайте функцию initializeThumbnails, которая принимает два аргумента, массив ссылок на изображения и элемент div для изображений, получаемый с помощью createThumbnailsContainer, потом заполняет этот див элементами изображения, используя createImgThumbnail.

let thumbnailContainer = createThumbnailsContainer();

function initializeThumbnails(sourceArray, thumbnailContainer) {
	for (let i = 0; i < sourceArray.length; i++) {
		let imgDiv = createImgThumbnail(sourceArray[i]);
		imgDiv.addEventListener('click', function () {
			activeImageIndex = i;
			setActiveImage(sourceArray[i]);
		});
		thumbnailContainer.append(imgDiv);
	}
}

initializeThumbnails(sourceArray, thumbnailContainer);

// Создайте функцию setActiveImage, которая в параметрах получает ссылку на картинку, создает контейнер активного изображения и добавляет в DOM.

function setActiveImage(source) {
	unsetActiveImage(); //перед назначением активного изображения убираем старый контейнер, чтобы картинки не накладывались друг на друга
	const activeDiv = document.createElement('div');
	activeDiv.classList.add('active_image_container');
	const activeImg = document.createElement('img');
	activeImg.setAttribute('src', source);
	activeImg.setAttribute('alt', 'active_image');
	activeDiv.append(activeImg);
	document.body.append(activeDiv);
}

// Создайте функцию unsetActiveImage, которая получает из DOM и удаляет элемент активного изображения.

function unsetActiveImage() {
	const activeDiv = document.querySelector('.active_image_container');
	if (activeDiv) {
		activeDiv.remove();
	}
}

// Модифицируйте функцию initializeThumbnails так, чтобы при клике по элементу изображения вызывалась функция setActiveImage со ссылкой той картинки, на которую нажали.

// Создайте функции nextImage и prevImage, которые будут переключать активную картинку.

function nextImage() {
	if (activeImageIndex < 0) {
		return;
	} else {
		activeImageIndex += 1;
		if (activeImageIndex >= sourceArray.length) {
			activeImageIndex = 0;
		}
	}
	setActiveImage(sourceArray[activeImageIndex]);
}

function prevImage() {
	if (activeImageIndex < 0) {
		return;
	} else {
		activeImageIndex = activeImageIndex - 1;
		if (activeImageIndex < 0) {
			activeImageIndex = sourceArray.length - 1;
		}
	}
	setActiveImage(sourceArray[activeImageIndex]);
}

// При нажатии клавиши Esc вызвать функцию unsetActiveImage, нажатии стрелки вправо - nextImage, влево - prevImage.

document.addEventListener('keydown', function (event) {
	console.log(event);
	if (event.key === 'Escape') {
		activeImageIndex = -1;
		unsetActiveImage();
	}
	if (event.key === 'ArrowLeft') {
		prevImage();
	}
	if (event.key === 'ArrowRight') {
		nextImage();
	}
});
