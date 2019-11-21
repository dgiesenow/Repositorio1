window.addEventListener('load',function(){
var queryString = new URLSearchParams(location.search);
var generQuiere = queryString.get ('Wanted');
var generNoQuiere = queryString.get('Unwanted');
var anio = queryString.get('año');

var url = 
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
})
