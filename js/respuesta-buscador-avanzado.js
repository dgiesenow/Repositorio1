var queryString = new URLSearchParams(location.search);
var busqueda = queryString.get ('Wanted' 'Unwanted' 'año');


// var url = "https://api.themoviedb.org/3/discover/tv?api_key=6695f769d740495966218b5ad75558be&language=en-US&sort_by=popularity.desc&first_air_date_year=$`{'año'}`&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false" + busqueda;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (informacion) {
    console.log(informacion.results);
    for (var i = 0; i < informacion.results.length; i++) {
      informacion.results[i]
      console.log(informacion.results[i].name);
      console.log(informacion.results[i].id);
      console.log(informacion.results[i].poster_path);

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
