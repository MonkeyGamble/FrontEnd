const redButton = document.querySelector('.trigger');

redButton.addEventListener('click', () => {
	redButton.classList.toggle('trigger_on');
	redButton.innerText = redButton.classList.contains('trigger_on')
		? 'ON'
		: 'OFF';
	redButton.classList.contains('trigger_on') ? getData() : console.clear;
});

const getData = () => {
	fetch('https://reqres.in/api/users?page=1')
		.then(res => res.json())
		.then(data => console.log(data));
};
// 4. При клике на кнопку отправлять запрос по ссылке https://reqres.in/api/users?page=1 и выводить в консоль полученные данные (массив с объектами)
