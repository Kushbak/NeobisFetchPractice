let section = document.querySelector('.section');

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => { 
		if (res.status !== 200) {  
			console.log('Status Code: ' + res.status);  
			return;  
		}
		res.json().then(data => {  
			data.forEach((item, i, arr) => {
				let div = document.createElement('div');div.className = 'post';
				let h3 = document.createElement('h3'); 	h3.className = 'title';
				let p = document.createElement('p'); 	p.className = 'descr';
				section.appendChild(div)
				div.appendChild(h3); div.appendChild(p);
				h3.innerHTML = item.title;
				p.innerHTML = item.body; 
			}) 
		});
	})
	.catch((err) => {
		console.error(err);
	});

 
