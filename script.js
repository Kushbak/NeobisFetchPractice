let section = document.querySelector('.section');

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => { 
		if (res.status !== 200) {  
			console.log('Status Code: ' + res.status);  
			return;  
		}
		res.json().then(data => {  
			data.forEach((item, i, arr) => { 
				let content = ` 
					<h3 class='title'>${item.title}</h3>
					<p class='descr'>${item.body}</p> 
				` 
				let wrapper = document.createElement('div'); 
				wrapper.className = 'post'
				wrapper.innerHTML = content 
				section.appendChild(wrapper)
			}) 
		});
	}).catch((err) => {
		console.error(err);
	}); 