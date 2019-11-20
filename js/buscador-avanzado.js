window.addEventListener('load',function(){
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero
   var select = document.querySelector('.select-genre')
  // //SERIES POR GENERO
  fetch(url)
   .then(function(respuesta) {
     return respuesta.json()
   })
   .then(function(informacion) {
     console.log(informacion);
      var id = informacion.id
      for (var genero of informacion.genres){
        select.innerHTML += `<option value=${genero.id}>` + genero.name + `</option>`;
      }
  })
   .catch(function(error) {
     console.log("Error: " + error);
   })
});

// no quiero que se vean

window.addEventListener('load',function(){
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero
   var radio = document.querySelector('.no')
  // //SERIES POR GENERO
  fetch(url)
   .then(function(respuesta) {
     return respuesta.json()
   })
   .then(function(informacion) {
     console.log(informacion);
      var id = informacion.id
      for (var genero of informacion.genres){
        radio.innerHTML += `<option value=${genero.id}>` + genero.name + `</option>`;
      }
  })
   .catch(function(error) {
     console.log("Error: " + error);
   })
});
