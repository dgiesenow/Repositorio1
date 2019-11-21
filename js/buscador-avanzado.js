// window.addEventListener('load',function(){
//   var queryString = new URLSearchParams(window.location.search)
//   var idGenero = queryString.get("idGenero");
//   var genero = queryString.get("genero");
//   var apikey= "6695f769d740495966218b5ad75558be";
//   var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
//   // esto es para que se ponga el titulo del genero segun genero
//    var select = document.querySelector('.select-genre')
//   // //SERIES POR GENERO
//   fetch("https://api.themoviedb.org/3/discover/tv?api_key=6695f769d740495966218b5ad75558be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
//    .then(function(respuesta) {
//      return respuesta.json()
//    })
//    .then(function(informacion) {
//      console.log(informacion);
//       var id = informacion.id
//       for (var genero of informacion.genres){
//         select.innerHTML += `<option value=${genero.id}>` + genero.name + `</option>`;
//       }
//   })
//    .catch(function(error) {
//      console.log("Error: " + error);
//    })
// });

// no quiero que se vean

window.addEventListener('load',function(){
  var radio3 = document.querySelector(".año")
  var opcionesFe;
  for (var i = 1950 ; i < 2020 ; i++) {
   opcionesFe = '<option>'
   opcionesFe += i
   opcionesFe += '</option>'
   radio3.innerHTML += opcionesFe


 }
  var queryString = new URLSearchParams(window.location.search)
  var idGenero = queryString.get("idGenero");
  var genero = queryString.get("genero");
  var apikey= "6695f769d740495966218b5ad75558be";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key="+apikey+"&language=en-US";
  // esto es para que se ponga el titulo del genero segun genero
  // //SERIES POR GENERO


  fetch(url)
   .then(function(respuesta) {
     return respuesta.json()
   })
   .then(function(informacion) {
     console.log(informacion);
      var id = informacion.id
      var radio1 = document.querySelector('.no')
      var radio2 = document.querySelector('.select-genre')
      for (var genero of informacion.genres){
        radio1.innerHTML += `<option value=${genero.id}>` + genero.name + `</option>`;
        radio2.innerHTML += `<option value=${genero.id}>` + genero.name + `</option>`;

      }

  })
   .catch(function(error) {
     console.log("Error: " + error);
   })




});
