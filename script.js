const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let fruitList = document.getElementById('fruitList');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruit.filter(function(value){
		return value.startsWith(str);
	});

	return results;
}

function searchHandler(e) {
	console.log("test");
	let results = [];
	let searchString = input.value;
	results = search(searchString);
	showSuggestions(results, searchString);
}

function showSuggestions(results, inputVal) {
	removeList();
	results.forEach(function(value){
		if(inputVal === ''){
			removeList();
		} else {
			suggestions.classList.add('has-suggestions');
			let fruitLi = document.createElement('li');
			fruitLi.innerText = value;
			fruitList.append(fruitLi);
		}
	});
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	removeList();
}

function removeList(){
	suggestions.classList.remove('has-suggestions');
	while(fruitList.hasChildNodes()){
		fruitList.removeChild(fruitList.firstChild);
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);