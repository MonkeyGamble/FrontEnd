// // const axios = require('axios');

// const { default: axios } = require('axios');

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {
// // 		const app = document.querySelector('.app');
// // 		const par = document.createElement('p');
// // 		par.textContent = res.data[0].title;
// // 		app.append(par);
// // 	})
// // 	.catch(err => console.log(err));

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {

// // 			const app = document.getElementById('app');

// // 			const par = document.createElement('p');
// // 			par.textContent = res.data[0].title;
// // 			app.appendChild(par);

// // 	})
// // 	.catch(err => console.log(err));

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {
// // 		const app = document.getElementById('app');
// // 		res.data.forEach(data => {
// // 			const par = document.createElement('p');
// // 			par.textContent = data.title;
// // 			app.appendChild(par);
// // 		});
// // 	})
// // 	.catch(err => console.log(err));

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {
// // 		console.log(res.data);
// // 		const app = document.getElementById('app');
// // 		const ul = document.createElement('ul');

// // 		res.data.forEach(data => {
// // 			const li = document.createElement('li');
// // 			li.textContent = data.title;
// // 			ul.appendChild(li);
// // 		});

// // 		app.appendChild(ul);
// // 	})
// // 	.catch(err => console.log(err));

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {
// // 		console.log(res.data);
// // 		const app = document.getElementById('app');
// // 		const ul = document.createElement('ul');
// // 		app.appendChild(ul);

// // 		for (let i = 0; i < res.data.length; i++) {
// // 			const li = document.createElement('li');
// // 			li.textContent = res.data[i].title;
// // 			ul.appendChild(li);
// // 		}
// // 	})
// // 	.catch(err => console.log(err));

// // axios
// // 	.get('https://jsonplaceholder.typicode.com/posts')
// // 	.then(res => {

// // 		const app = document.getElementById('app');

// // 		for (let i = 0; i < res.data.length; i++) {
// // 			const elem = res.data[i];
// // 			const ul = document.createElement('ul');

// // 			for (let key in elem) {
// // 				const li = document.createElement('li');
// // 				li.textContent = `${key}: ${elem[key]}`;
// // 				ul.appendChild(li);
// // 			}

// // 			app.appendChild(ul);
// // 		}

// // 	})

// // 	.catch(err => console.log(err));

// axios
// 	.get('https://jsonplaceholder.typicode.com/posts')
// 	.then(res => {
// 		console.log(res.data);
// 		const app = document.getElementById('app');
// 		const ul = document.createElement('ul');
// 		app.appendChild(ul);

// 		for (let i = 0; i < res.data.length; i++) {
// 			const liElem = document.createElement('div');
// 			const li = document.createElement('li');

// 			const h1 = document.createElement('h1');
// 			h1.textContent = `userID: ${res.data[i].userId}`;

// 			const h2 = document.createElement('h2');
// 			h2.textContent = `Id: ${res.data[i].id}`;

// 			const h3 = document.createElement('h3');
// 			h3.textContent = `Title: ${res.data[i].title}`;

// 			const p = document.createElement('p');
// 			p.textContent = `Body: ${res.data[i].body}`;

// 			li.appendChild(h1);
// 			li.appendChild(h2);
// 			li.appendChild(h3);
// 			li.appendChild(p);
// 			li.style.margin = '50px 0';

// 			ul.appendChild(li);
// 		}
// 	})
// 	.catch(err => console.log(err));

axios
	.get('https://jsonplaceholder.typicode.com/posts')
	.then(res => {
		console.log(res.data);
		const app = document.getElementById('app');
		const ul = document.createElement('ul');
		app.appendChild(ul);
		for (let i = 0; i < res.data.length; i++) {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = `${i + 1} - ${res.data[i].title}`;
			a.href = '';
			a.addEventListener('click', e => {
				e.preventDefault();
				// window
				// 	.open('about:blank', '_blank')
				// 	.document.write('<p><strong>Hello World!</strong></p>');
				// window.location.href = `https://jsonplaceholder.typicode.com/posts/${i + 1}`;
			});
			li.append(a);
			ul.appendChild(li);
		}
	})
	.catch(err => console.log(err));

axios
	.get('https://jsonplaceholder.typicode.com/posts')
	.then(res => {
		console.log(res.data);
		const app = document.getElementById('app');
		const ul = document.createElement('ul');
		app.appendChild(ul);
		for (let i = 0; i < res.data.length; i++) {
			const li = document.createElement('li');
			li.textContent = res.data[i].title;
			
			a.addEventListener('click', e => {
				e.preventDefault();
			
			
			app.innerHTML = '';


			const h1 = document.createElement('h1');
			h1.textContent = `userId: ${res.data[i].userId} `;
			const h2 = document.createElement('h2');
			h2.textContent = `Id: ${res.data[i].id} `;
			const h3 = document.createElement('h3');
			h3.textContent = `Title: ${res.data[i].title} `;
			const p = document.createElement('p');
			p.textContent = `Body: ${res.data[i].body} `;
			li.appendChild(h1);
			li.appendChild(h2);
			li.appendChild(h3);
			li.appendChild(p);
			ul.appendChild(li);
		}
	})
	.catch(err => console.log(err));
