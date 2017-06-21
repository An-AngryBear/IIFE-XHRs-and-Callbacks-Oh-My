const carnivoreOutput = document.getElementById("carnivores"),
	herbivoreOutput = document.getElementById("herbivores")

// puts carnivores onto the page
function showCarnivores (carnivores) {
	let carnivoresToShow = carnivores.Carnivores;
	for (let i = 0; i < carnivoresToShow.length; i++) {
		let output = document.createElement('h4');
		output.innerHTML += `${carnivoresToShow[i].type}`;
		carnivoreOutput.appendChild(output);
	}
}

// puts herbivores on to the page
function showHerbivores (herbivores) {
	let herbivoresToShow = herbivores.Herbivores;
	for (let i = 0; i < herbivoresToShow.length; i++) {
		let output = document.createElement('h4');
		output.innerHTML += `${herbivoresToShow[i].type}`;
		herbivoreOutput.appendChild(output);
	}
}

// initiates data grab to push to page
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);