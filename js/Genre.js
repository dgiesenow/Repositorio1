
//constructor para agarrar la variable genero y  poner las series
window.onload = function() {
var queryString = new URLSearchParams(location.search)
var idGenero = queryString.get("genero")
var genero = queryString.get("porgenero")
// esto es para que se ponga el titulo del genero segun genero
 document.querySelector(".idGenero").innerHTML += genero
//SERIES POR GENERO
fetch("https://api.themoviedb.org/3/discover/tv?api_key6695f769d740495966218b5ad75558be&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+idGenero+"")
 .then(function(respuesta) {
   return respuesta.json()
   console.log(respuesta);
 })
 .then(function(informacion) {
   var arraySeries = informacion.results
   console.log(arraySeries);
   for (var i = 0; i < arraySeries.length; i++) {
     var png = arraySeries[i].poster_path;
     var id = arraySeries[i].id
     document.querySelector(".todo").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalle.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
   }
 })
 .catch(function(error) {
   console.log("Error: " + error);
 })
