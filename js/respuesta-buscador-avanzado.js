window.addEventListener('load',function(){
console.log(window.location.href.substring(window.location.href.lastIndexOf('?')+1))
var queryString = new URLSearchParams(window.location.href.substring(window.location.href.lastIndexOf('?')+1));
var generQuiere = queryString.get ('Wanted');
var generNoQuiere = queryString.get('Unwanted');
var anio = queryString.get('año');
  console.log("dfd",queryString.get('Wanted'))
var url = 'https://api.themoviedb.org/3/discover/tv?api_key=6695f769d740495966218b5ad75558be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (informacion) {
    console.log(informacion.results);
    for (var i = 0; i < informacion.results.length; i++) {
      informacion.results[i]
      console.log("Dibuja",informacion.results[i].name);
      console.log("Dibuja",informacion.results[i].id);
      console.log("Dibuja",informacion.results[i].poster_path);

// averiguar como hacer para selecionar lo que no tiene poster osea como se dice valor vacio
      // var noEsta = function noMostrar()
      //   if (informacion[i].poster_path )

      var buscadorGeneral = document.querySelector (".resultados-buscador-avanzado")
      var elementsHtml ='<div class=" uk-card uk-card-default uk-card-body uk-width-1-5">'
       elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" elements>'
       elementsHtml +='</div> '
       buscadorGeneral.innerHTML += elementsHtml
    }
    })
  .catch(function (errors) {
    console.log(errors);
  });
})
