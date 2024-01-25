const addButton = document.querySelector('.addBtn');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

// addButton.addEventListener('click', () => {
// 	if (input.value) {
// 		const item = document.createElement('li');
// 		item.innerHTML = input.value;
// 		list.appendChild(item);
// 		input.value = '';
// 	}
// });

addButton.addEventListener('click', () => {
	if (input.value) {
		const item = document.createElement('li');
		item.innerHTML = `<input type="checkbox" class="checkbox"/><span class="span">${input.value}</span><button class="deleteBtn">delete</button>`;
		list.appendChild(item);
		input.value = '';
		const checkbox = item.querySelector('.checkbox');
		const span = item.querySelector('.span');
		const deleteButton = item.querySelector('.deleteBtn');

		checkbox.addEventListener('click', () => {
			if (span.classList.contains('completed'))
				span.classList.remove('completed');
			else span.classList.add('completed');
		});

		deleteButton.addEventListener('click', () => {
			list.removeChild(item);
		});
	}
});
