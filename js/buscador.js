var apikey= "6695f769d740495966218b5ad75558be";

var buscador = document.querySelector('#searchForm');
var campoPalabra = document.querySelector('#search_word');
var campoCategorias = document.querySelector('#categories');

var palabraDeCategoria = '';

campoCategorias.onchange = function () {
	console.log(this.value);
	palabraDeCategoria = this.value;
	campoPalabra.value = '';
}

campoPalabra.onchange = function () {
	console.log(this.value);
	palabraDeCategoria = this.value;
}

buscador.onsubmit = function (event) {
	if (palabraDeCategoria.length == 0) {
		alert('Campos vacíos');
		event.preventDefault();
	}
}
