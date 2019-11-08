
var parametrosURL = new URLSearchParams(location.search);
console.log(parametrosURL.get('idSerie'));

var idSerie = parametrosURL.get('idSerie')

var url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=6695f769d740495966218b5ad75558be&language=en-US`;

fetch (url)
  .then(function (res) {
    return res.json();
  })
  .then(function (informacion) {
    console.log(informacion);
    // Aca haces las cosas
    var detalle = document.querySelector(".overview")
    var elementsHtml = '';
    for (var i = 0; i < informacion.results.length; i++) {
      // console.log(informacion.results[i].name);
      // console.log(informacion.results[i].id);
      // console.log(informacion.results[i].poster_path);
       elementsHtml += `
          <div class="overview">
              <p class="overview1">
              </p>
          </div>
      `;

    }
    ul.innerHTML = elementsHtml;
  })

  .catch(function (errors) {
      console.log(errors);
  });
  //
  //
  // fetch(url)
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
  //       console.log(informacion.results[i].overview);
  //
  //       var buscadorGeneral = document.querySelector (".paginadetalles")
  //       var elementsHtml ='<div class=" uk-card uk-card-default uk-card-body uk-width-1-5">'
  //        elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + informacion.results[i].overview + console.log(informacion.results[i].name>'
  //        elementsHtml +='</div> '
  //        buscadorGeneral.innerHTML += elementsHtml
  //     }
  //     })
  //   .catch(function (errors) {
  //     console.log(errors);
  //   });
