var queryString = new URLSearchParams(location.search);
var busqueda = queryString.get ('search_word');


var url = "https://api.themoviedb.org/3/search/tv?api_key=6695f769d740495966218b5ad75558be&query=" + busqueda;
