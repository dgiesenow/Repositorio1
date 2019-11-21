// //constructor para agarrar la variable genero y  poner las series
window.addEventListener('load',function(){
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero

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


// fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (informacion) {
//     console.log(informacion.results);
//     for (var i = 0; i < informacion.results.length; i++) {
//       informacion.results[i]
//       console.log(informacion.results[i].name);
//       console.log(informacion.results[i].id);
//       console.log(informacion.results[i].poster_path);
//
//       var ul = document.querySelector (".top-rated")
//       var elementsHtml =`<li>`
//        elementsHtml +=`<div class="uk-panel">`
//        elementsHtml +=`<a href="detalle.html?idSerie=${informacion.results[i].id}">`
//        elementsHtml +=`<img src="https://image.tmdb.org/t/p/original` + informacion.results[i].poster_path + `" elements>`
//        elementsHtml +=`</div> </li>`
//        ul.innerHTML += elementsHtml
//     }
//     })
//   .catch(function (errors) {
//     console.log(errors);
//   });
