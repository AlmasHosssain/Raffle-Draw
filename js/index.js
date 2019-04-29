
const lod = (()=>{
	let $ = (container) =>{
		return document.querySelector(container);
	}

	let inp = $("#inp");
	let nameList = $("#name-list"); 
	let giveAtry = $("#give-a-try");
	let display = $("#display");
	let firstPosition = $("#first-position");
	let secondPosition = $("#second-position");
	let thirdPosition = $("#third-position");
	//console.log(secondPosition);

	const nameArray = [];


	let shuffeld = (arr) =>{
		let shufArr = [...arr];

		for (var i = shufArr.length - 1; i > 0; i--) {
			let rand = Math.floor(Math.random * (i+1));

			let temp = shufArr[rand];
			shufArr[rand] = shufArr[i];
			shufArr[i] = temp;
		}

		return shufArr;
	}

	inp.addEventListener('keypress',(event)=>{
		if (event.key === 'Enter') {
			//console.log("Ok");
			let keep = event.target.value.split(',');

			if (keep[0] !== '') {
				//console.log(keep);
				keep.forEach((name)=>{
					nameArray.push(name);
					let addition = (name) =>{
					let li = document.createElement('li');
					li.classList.add('list-group-item');
					li.innerHTML = name;
					return li;
				}

				let get = addition(name);
				nameList.appendChild(get);
				event.target.value = '';
				})

				
			}
			//console.log(nameArray);
		}
	})

	giveAtry.addEventListener('click',(event)=>{
		if(nameArray.length === 0){
			alert("There are no entry");
		}

		else{
			let arrk = shuffeld(nameArray);

			for(let i = 1; i< arrk.length;i++){

				(function(i,count){

					setTimeout(()=>{
						let rand = Math.floor(Math.random()* arrk.length);
						display.innerHTML = arrk[rand];

						if(count === arrk.length - 1){
							if(!firstPosition.innerHTML){
								firstPosition.innerHTML = arrk[rand];
								let ind = nameArray.indexOf(arrk[rand]);
								nameArray.splice(ind,1);
							}
							else if(!secondPosition.innerHTML){
								secondPosition.innerHTML = arrk[rand];
								let ind = nameArray.indexOf(arrk[rand]);
								nameArray.splice(ind,1);
							}
							else if(!thirdPosition.innerHTML){
								thirdPosition.innerHTML = arrk[rand];
								let ind = nameArray.indexOf(arrk[rand]);
								nameArray.splice(ind,1);
							}
							else{
								alert('Raffel Dram Is Completed');
							}
						}
					},i)

				})(i*100,i)
			}
		}
	})
})();