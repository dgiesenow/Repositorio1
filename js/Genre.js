// //constructor para agarrar la variable genero y  poner las series
window.addEventListener('load',function(){
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero
   document.querySelector(".idGenero").innerHTML += genero
   var ul = document.querySelector('#generos-menu')
  // //SERIES POR GENERO
  fetch(url)
   .then(function(respuesta) {
     return respuesta.json()
   })
   .then(function(informacion) {
     console.log(informacion);
      var id = informacion.id
      for (var genero of informacion.genres){
        ul.innerHTML += `<li><a href="genre.html?iddeGenero=${genero.id}&nombreDeGenero=${genero.name}">` + genero.name + '</a></li>';
      }
  })
   .catch(function(error) {
     console.log("Error: " + error);
   })
});

window.addEventListener('load',function(){
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero
   document.querySelector(".idGenero").innerHTML += genero
   var ul2 = document.querySelector('#listado-generos')
  // //SERIES POR GENERO
  fetch(url)
   .then(function(respuesta) {
     return respuesta.json()
   })
   .then(function(informacion) {
     console.log(informacion);
      var id = informacion.id
      for (var genero of informacion.genres){
        ul2.innerHTML += `<li><a href="genre.html?iddeGenero=${genero.id}&nombreDeGenero=${genero.name}">` + genero.name + '</a></li>';
      }
  })
   .catch(function(error) {
     console.log("Error: " + error);
   })
});
