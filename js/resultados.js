var queryString = new URLSearchParams(location.search);
var busqueda = queryString.get ('search_word');


var url = "https://api.themoviedb.org/3/search/tv?api_key=6695f769d740495966218b5ad75558be&query=" + busqueda;

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

      var buscadorGeneral = document.querySelector (".resultados_buscador")
      var elementsHtml ='<div class=" uk-card uk-card-default uk-card-body uk-width-1-5">'
       elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" elements>'
       elementsHtml +='</div> '
       buscadorGeneral.innerHTML += elementsHtml
    }
    })
  .catch(function (errors) {
    console.log(errors);
  });
